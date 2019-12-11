import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/layout/home"
  },
  {
    // 默认layout布局，可定制layout布局，layout路由可修改
    // 布局路由下为视图文件
    path: "/layout",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue")
      },
      // 免费咨询
      {
        path: "/freeConsult",
        name: "freeConsult",
        component: () => import("@/views/home/other/freeConsult.vue")
      },
      // 全面咨询
      {
        path: "/allConsult",
        name: "allConsult",
        component: () => import("@/views/home/other/allConsult.vue")
      },
      // 文章详情
      {
        path: "/articleInfo",
        name: "articleInfo",
        component: () => import("@/views/home/other/articleInfo.vue")
      },
      // 企业信息
      {
        path: "/businessInfo",
        name: "businessInfo",
        component: () => import("@/views/home/other/businessInfo.vue")
      },
      // 我的资料
      {
        path: "/userInfo",
        name: "userInfo",
        component: () => import("@/views/home/other/userInfo.vue")
      }
    ]
  }

];

const router = new VueRouter({
  routes
});

export default router;
