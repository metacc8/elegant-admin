
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

var F=function(x){for(var r=[],s=x.length,h=0;h<s;h++){var u=x.charCodeAt(h);if(u>=55296&&u<=56319&&s>h+1){var f=x.charCodeAt(h+1);f>=56320&&f<=57343&&(u=(u-55296)*1024+f-56320+65536,h+=1)}if(u<128){r.push(u);continue}if(u<2048){r.push(u>>6|192),r.push(u&63|128);continue}if(u<55296||u>=57344&&u<65536){r.push(u>>12|224),r.push(u>>6&63|128),r.push(u&63|128);continue}if(u>=65536&&u<=1114111){r.push(u>>18|240),r.push(u>>12&63|128),r.push(u>>6&63|128),r.push(u&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer};export{F as e};
