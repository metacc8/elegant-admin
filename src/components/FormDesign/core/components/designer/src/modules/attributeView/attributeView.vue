<script lang="ts" setup>
import { computed, inject, nextTick, ref, watch } from 'vue'
import { getAttributeValue, pluginManager, revoke, setAttributeValue } from '../../../../../../utils'
import ENode from '../../../../node/index'
import type { ComponentSchema, Designer, PageSchema } from '../../../../../types/elegant-designer'

const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

const componentConfings = pluginManager.getComponentConfings()
const checkedNode = computed(() => {
  return designer.state.checkedNode
})

function isShow(item: ComponentSchema) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show
  }

  // show属性为function类型则执行
  if (typeof item.show === 'function') {
    return item.show?.({ values: checkedNode.value! })
  }

  return true
}

const componentAttributes = ref<ComponentSchema[]>([])
watch(() => designer.state.checkedNode?.type, () => {
  const type = designer.state.checkedNode?.type
  if (!type) {
    return []
  }
  const attribute = componentConfings[type]?.config.attribute ?? []

  componentAttributes.value = [
    {
      label: '组件ID',
      type: 'input',
      field: 'id',
      componentProps: {
        disabled: true,
      },
    },
    ...attribute,
  ]

  if (type === 'page') {
    componentAttributes.value.push(...[
      {
        label: '画布宽度',
        type: 'EInputSize',
        field: 'canvas.width',
        editData: pageSchema,
      },
      {
        label: '画布高度',
        type: 'EInputSize',
        field: 'canvas.height',
        editData: pageSchema,
      },
    ])
  }
}, {
  immediate: true,
})

/**
 * 设置属性值
 */
function handleSetValue(value: any, field: string, item: ComponentSchema, editData = checkedNode.value) {
  if (typeof item.onChange === 'function') {
    item.onChange({ value, values: editData!, componentAttributes })
  }
  // 判断是否同步修改属性值
  if (item.changeSync) {
    setAttributeValue(value, field, editData!)
  }
  else {
    nextTick(() => {
      setAttributeValue(value, field, editData!)
    })
  }
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push(pageSchema.schemas, '编辑组件属性')
}
</script>

<template>
  <div :key="checkedNode?.id" class="elegant-attribute-view">
    <div v-for="item in componentAttributes" :key="item.field">
      <div v-if="isShow(item)" class="elegant-attr-item" :class="item.layout">
        <div class="elegant-attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div class="elegant-attr-input" :class="{ 'block!': item.layout === 'vertical' }">
          <ENode
            :component-schema="{ ...item, componentProps: { ...item.componentProps, ...(item.field === 'componentProps.defaultValue' ? checkedNode?.componentProps : {}), input: false, field: undefined, hidden: false }, show: true, noFormItem: true }"
            :model-value="getAttributeValue(item.field!, item.editData ?? checkedNode!)"
            @update:model-value="handleSetValue($event, item.field!, item, item.editData)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
