import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/views/Home.vue'),
    }
]

export default routes;