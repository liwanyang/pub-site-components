import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
    path:"/",
    name:"home",
    component:()=>import("../pages/home.vue"),
},{
    path:"/packages",
    name:"packages",
    component:()=>import("../pages/packages.vue"),
},{
    path:"/packages/detail",
    name:"packagesDetail",
    component:()=>import("../pages/packages-detail.vue"),
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;