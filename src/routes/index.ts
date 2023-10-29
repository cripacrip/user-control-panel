
import { createRouter, createWebHistory } from 'vue-router';
import { ROUTERS_NAME } from './constants';

export { ROUTERS_NAME } from './constants';

const routes = [
    { 
        path: '/', 
        name: ROUTERS_NAME.mainLayout, 
        component: () => import('@/layouts/control-panel-layout.vue')
    },
    {
        path: '/main',
        name: ROUTERS_NAME.home,
        component: () => import('@/components/pages/controller-main/controller-main.vue'),
        redirect: () => ({ name: ROUTERS_NAME.userList }),
        children: [
            { 
                path: '',
                name: ROUTERS_NAME.userList,
                component: () => import('@/components/user-list.vue'),
            },
            { 
                path: '/user-list/edit/:id',
                name: ROUTERS_NAME.userEdit,
                component: () => import('@/components/user-edit.vue'),
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;