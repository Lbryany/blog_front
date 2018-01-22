import Vue from 'vue';
import Router from 'vue-router';

const index = (resolve) => require(['../components/index.vue'], resolve);

Vue.use(Router);

const routers = new Router({
    
    mode: 'history',

    routes: [
        {
            path: '/index',
            meta: {
                title: ''
            },
            component: index
        }
    ],

    
    
});
export default routers;