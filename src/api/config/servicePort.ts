// * 后端接口请求地址1
const BASEURL1: any = {
	dev: '/nethos/admin',
	test: 'https://t-zbzk.zjwlyy.cn/nethos/admin',
	prod: ''
};
// * 后端接口请求地址2
const BASEURL2: any = {
	dev: '/propaganda',
	test: 'https://propaganda-test.zjwlyy.cn/propaganda',
	prod: ''
};
export const PORT1 = BASEURL1[import.meta.env.VITE_APP_MODE];
export const PORT2 = BASEURL2[import.meta.env.VITE_APP_MODE];
