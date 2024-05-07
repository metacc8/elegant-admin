import { defineFakeRoute } from 'vite-plugin-fake-server/client'

export default defineFakeRoute([
  {
    url: '/mock/app/route/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 200,
        data: [
          {
            meta: {
              title: '演示',
              icon: 'ri:function-add-fill',
            },
            children: [
              {
                path: '/breadcrumb_demo',
                component: 'Layout',
                redirect: '/breadcrumb_demo/list1',
                name: 'breadcrumbDemo',
                meta: {
                  title: '面包屑导航',
                  icon: 'i-mdi:biscuit-crumbs',
                },
                children: [
                  {
                    path: 'list1',
                    name: 'breadcrumbDemoList1',
                    component: 'breadcrumb_demo/list1.vue',
                    meta: {
                      title: '列表1（平级模式）',
                    },
                  },
                  {
                    path: 'detail1',
                    name: 'breadcrumbDemoDetail1',
                    component: 'breadcrumb_demo/detail1.vue',
                    meta: {
                      title: '详情1',
                      menu: false,
                      activeMenu: '/breadcrumb_demo/list1',
                    },
                  },
                  {
                    path: 'list2',
                    name: 'breadcrumbDemoList2',
                    redirect: '/breadcrumb_demo/list2',
                    meta: {
                      title: '列表2（层级模式）',
                    },
                    children: [
                      {
                        path: '',
                        component: 'breadcrumb_demo/list2.vue',
                        meta: {
                          title: '列表2（层级模式）',
                          menu: false,
                          breadcrumb: false,
                        },
                      },
                      {
                        path: 'detail2',
                        name: 'breadcrumbDemoDetail2',
                        component: 'breadcrumb_demo/detail2.vue',
                        meta: {
                          title: '详情2',
                          menu: false,
                          breadcrumb: false,
                          activeMenu: '/breadcrumb_demo/list2',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                path: '/multilevel_menu_demo',
                component: 'Layout',
                redirect: '/multilevel_menu_demo/page',
                name: 'multilevelMenuDemo',
                meta: {
                  title: '菜单嵌套',
                  icon: 'heroicons-solid:menu-alt-3',
                },
                children: [
                  {
                    path: 'page',
                    name: 'multilevelMenuDemo1',
                    component: 'multilevel_menu_demo/page.vue',
                    meta: {
                      title: '菜单1',
                    },
                  },
                  {
                    path: 'level2',
                    name: 'multilevelMenuDemo2',
                    redirect: '/multilevel_menu_demo/level2/page',
                    meta: {
                      title: '菜单2',
                    },
                    children: [
                      {
                        path: 'page',
                        name: 'multilevelMenuDemo2-1',
                        component: 'multilevel_menu_demo/level2/page.vue',
                        meta: {
                          title: '菜单2-1',
                        },
                      },
                      {
                        path: 'level3',
                        name: 'multilevelMenuDemo2-2',
                        redirect: '/multilevel_menu_demo/level2/level3/page1',
                        meta: {
                          title: '菜单2-2',
                        },
                        children: [
                          {
                            path: 'page1',
                            name: 'multilevelMenuDemo2-2-1',
                            component: 'multilevel_menu_demo/level2/level3/page1.vue',
                            meta: {
                              title: '菜单2-2-1',
                            },
                          },
                          {
                            path: 'page2',
                            name: 'multilevelMenuDemo2-2-2',
                            component: 'multilevel_menu_demo/level2/level3/page2.vue',
                            meta: {
                              title: '菜单2-2-2',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                path: '/plugin_demo',
                component: 'Layout',
                redirect: '/plugin_demo/qrcode',
                name: 'pluginDemo',
                meta: {
                  title: '插件',
                  icon: 'i-clarity:plugin-outline-alerted',
                },
                children: [
                  {
                    path: 'qrcode',
                    name: 'pluginDemoQrcode',
                    component: 'plugin_demo/qrcode.vue',
                    meta: {
                      title: '二维码',
                      icon: 'i-material-symbols:qr-code',
                    },
                  },
                  {
                    path: 'esign',
                    name: 'pluginDemoEsign',
                    component: 'plugin_demo/esign.vue',
                    meta: {
                      title: '电子签名',
                      icon: 'i-mdi:draw',
                    },
                  },
                  {
                    path: 'swiper',
                    name: 'pluginDemoSwiper',
                    component: 'plugin_demo/swiper.vue',
                    meta: {
                      title: '轮播动画',
                      icon: 'i-carbon:carousel-horizontal',
                    },
                  },
                  {
                    path: 'tinymce',
                    name: 'pluginDemoTinymce',
                    component: 'plugin_demo/tinymce.vue',
                    meta: {
                      title: 'TinyMCE 编辑器',
                      icon: 'i-file-icons:tinymce',
                    },
                  },
                  {
                    path: 'markdown',
                    name: 'pluginDemoMarkdown',
                    component: 'plugin_demo/markdown.vue',
                    meta: {
                      title: 'Markdown 编辑器',
                      icon: 'i-teenyicons:markdown-outline',
                    },
                  },
                  {
                    path: 'countto',
                    name: 'pluginDemoCountTo',
                    component: 'plugin_demo/count.to.vue',
                    meta: {
                      title: '计数器',
                      icon: 'i-carbon:character-whole-number',
                    },
                  },
                  {
                    path: 'splitpanes',
                    name: 'pluginDemoSplitpanes',
                    component: 'plugin_demo/splitpanes.vue',
                    meta: {
                      title: '拆分面板',
                      icon: 'i-icon-park-outline:split-cells',
                    },
                  },
                ],
              },

              {
                path: '/link',
                component: 'Layout',
                redirect: '/link/github',
                name: 'externalLinkDemo',
                meta: {
                  title: '外链',
                  icon: 'i-ri:external-link-fill',
                },
                children: [
                  {
                    path: 'github',
                    component: 'LinkLayout',
                    name: 'linkDemoWindowGithub',
                    meta: {
                      title: 'Github 仓库',
                      link: 'https://github.com/zhangyao1990/elegant-admin',
                    },
                  }, {
                    path: 'vue-doc',
                    component: 'LinkLayout',
                    name: 'iframeDemoWindowGithub',
                    meta: {
                      title: 'vue3文档',
                      iframe: 'https://cn.vuejs.org/guide/introduction.html',
                    },
                  },
                ],
              },
              {
                path: '/mock_demo',
                component: 'Layout',
                redirect: '/mock_demo/index',
                name: 'MockDemo',
                meta: {
                  title: 'Mock',
                  icon: 'i-ri:database-2-line',
                },
                children: [
                  {
                    path: 'index',
                    name: 'MockDemoIndex',
                    component: 'mock_demo/index.vue',
                    meta: {
                      title: 'Mock',
                      menu: false,
                      breadcrumb: false,
                      activeMenu: '/mock_demo',
                    },
                  },
                ],
              }, {
                path: '/permission_demo',
                component: 'Layout',
                redirect: '/permission_demo/index',
                name: 'PermissionDemo',
                meta: {
                  title: '权限验证',
                  icon: 'ri:shield-keyhole-line',
                },
                children: [
                  {
                    path: 'index',
                    name: 'PermissionDemoIndex',
                    component: 'permission_demo/index.vue',
                    meta: {
                      title: '权限验证',
                      menu: false,
                      breadcrumb: false,
                      activeMenu: '/permission_demo',
                    },
                  },
                  {
                    path: 'test',
                    name: 'PermissionDemoTest',
                    component: 'permission_demo/test.vue',
                    meta: {
                      title: '测试页面',
                      auth: ['permission.browse'],
                      menu: false,
                      breadcrumb: false,
                      activeMenu: '/permission_demo',
                    },
                  },
                ],
              },
            ],
          }, {
            meta: {
              title: '配置',
              icon: 'ep:setting',
            },
            children: [{
              path: '/sys_setting',
              component: 'Layout',
              redirect: '/sys_setting/sys_user',
              name: 'systemSetting',
              meta: {
                title: '系统设置',
                icon: 'fluent:laptop-settings-20-regular',
              },
              children: [
                {
                  path: 'sys_user',
                  name: 'SysUser',
                  component: 'sys_setting/sys_user/index.vue',
                  meta: {
                    title: '账号管理',
                  },
                },

                {
                  path: 'sys_role',
                  name: 'SysRole',
                  component: 'sys_setting/sys_role/index.vue',
                  meta: {
                    title: '角色管理',
                  },
                },
                {
                  path: 'sys_menu',
                  name: 'SysMenu',
                  component: 'sys_setting/sys_menu/index.vue',
                  meta: {
                    title: '菜单管理',
                  },
                }, {
                  path: 'sys_resource',
                  name: 'SysResource',
                  component: 'sys_setting/sys_resource/index.vue',
                  meta: {
                    title: '资源管理',
                  },
                },
              ],
            }],
          },
        ],
      }
    },
  },
  {
    url: '/mock/app/menu/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 200,
        data: [
          {
            meta: {
              title: '演示',
              icon: 'uim:box',
            },
            children: [
              {
                meta: {
                  title: '多级导航',
                  icon: 'heroicons-solid:menu-alt-3',
                },
                children: [
                  {
                    path: '/multilevel_menu_demo/page',
                    meta: {
                      title: '导航1',
                    },
                  },
                  {
                    meta: {
                      title: '导航2',
                    },
                    children: [
                      {
                        path: '/multilevel_menu_demo/level2/page',
                        meta: {
                          title: '导航2-1',
                        },
                      },
                      {
                        meta: {
                          title: '导航2-2',
                        },
                        children: [
                          {
                            path: '/multilevel_menu_demo/level2/level3/page1',
                            meta: {
                              title: '导航2-2-1',
                            },
                          },
                          {
                            path: '/multilevel_menu_demo/level2/level3/page2',
                            meta: {
                              title: '导航2-2-2',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }
    },
  },
])
