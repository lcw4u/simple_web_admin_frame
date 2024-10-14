import {createMemoryHistory, createRouter, RouteRecordRaw, RouterOptions} from 'vue-router'
const Layout = () => import("./layout/index.vue");
import Login from "./components/Login.vue"
import Loading from "./components/Loading.vue"
import { useAuthStore } from './stores/auth';
//import {post} from "./utils/request"
const files = import.meta.glob("./components/Menu*/index.vue", { eager: true })

let children = []
for (const key in files) {
    const componentConfig = files[key];
    const path = "/" + key.split("/").slice(0,-1).pop()?.split(".")[0]
    console.log(path)
    children.push({path: path, component: componentConfig.default});
}

const routes = [
    {
        path: "/",
        name: "Home",
        component: Layout,
        redirect: "/Loading",
        children: children
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
        meta: {

        }
    },
    {
        path: "/Loading",
        name: "Loading",
        component: Loading,
        meta: {

        }
    }

] as Array<RouteRecordRaw>

const opt = {
    history: createMemoryHistory(),
    routes: routes
} as RouterOptions;

const router = createRouter(opt);

const LoginPath = "/Login"
router.beforeEach((to, from, next) => {
    if (to.path !== LoginPath){
        const authStore = useAuthStore();
        const isAuthenticated = authStore.isLoggedIn;
        if(!isAuthenticated){
            next({ name: 'Login' });
            return;
        }
    }

    if (from.path == "/Loading" && to.path != LoginPath){
        /*
        post("/auth/check").then((body) => {
            if(body.expire > 0){
                useAuthStore().setExpire(body.expire);
            }
            next();
        });*/
        next();
    }else{
        next();
    }

});

export default router