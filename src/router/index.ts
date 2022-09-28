import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayOut from "@/views/layout/LayOut.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LayOut,
    redirect:{name:"homeson"},
    children:[
      {
        path:"homeson",
        name:"homeson",
        component:() => import("@/views/HomeView.vue"),
      }
    ]
  },
  {
    path:'/fen',
    name:"fen",
    component:LayOut,
    redirect:{name:"type"},
    children:[
      {
        path:"type",
        name:"type",
        component:() => import("@/views/FenXiao.vue"),
      }
    ]
  },
  {
    path:'/cart',
    name:"mycart",
    redirect:{name:"mcart"},
    component:LayOut,
    children:[
      {
        path:"mcart",
        name:"mcart",
        component:() => import ("@/views/MyCart.vue"),
      }
    ]
  },
  {
    path:'/mine',
    name:"mine",
    component:LayOut,
    redirect:{name:"detail"},
    children:[
      {
        path:"detail",
        name:"detail",
        component:() => import ("@/views/MineView.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
