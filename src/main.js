import Vue from 'vue';
import App from './App.vue';
import routers from './router/router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueResource from 'vue-resource';
import util from './lib/util';

Vue.use(VueResource);
Vue.use(iView);
Vue.use(util);

// const RouterConfig = {
//     routers: Routers
// }

new Vue({
    el: '#app',
    router: routers,
    render: h => h(App)
})
