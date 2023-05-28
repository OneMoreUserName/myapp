import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router";
import Upcliker from "../components/Upcliker.vue";
import Downcliker from "../components/Downcliker.vue";
import Home from "../components/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/home",
        name: "Home",
        component: () => Home,
    },
    {
        path: "/up/:count",
        name: "Up",
        component:() => Upcliker,
    },   
    {
        path: "/down/:count",
        name: "down",
        component:() => Downcliker,
    }    
]

const router: Router = createRouter({
    history: createWebHistory("/"),
    routes
});

export default router;