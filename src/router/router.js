import Vue from 'vue';
import Router from 'vue-router';

const index = (resolve) => require(['../components/index.vue'], resolve);
const content = (resolve) => require(['../components/content/content.vue'], resolve);

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
        },
        {
            path: '/content',
            component: content
        }
    ],

    
    
});
export default routers;