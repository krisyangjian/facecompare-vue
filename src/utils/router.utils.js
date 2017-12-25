import Vue from 'vue';
import Router from 'vue-router';

import ButtonRouters from '../modules/button/button.router';
import TableRouters from '../modules/table/table.router';

Vue.use(Router);

let router = new Router({
	routes: [
		...ButtonRouters,
		...TableRouters
	]
});

function GlobalRouterPlugin() {}
GlobalRouterPlugin.install = function(Vue, options) {
	Vue.getRouter = function() {
		return router;
	};
};
Vue.use(GlobalRouterPlugin);

export {
	router
};