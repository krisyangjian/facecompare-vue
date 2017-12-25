import Vue from 'vue';
// import App from './App';
// import { router } from './utils/router.utils';
// import ElementUI from 'element-ui';
// import 'is-ui/dist/lib/theme-chalk/index.css';

// Vue.use(ElementUI);
import InsightUI from 'facecompare-ui';
Vue.use(InsightUI);


var wn = new Vue({
	el: '#app',
	template: '<div><is-test></is-test></div>',
})