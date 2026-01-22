import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";
import Game from "../view/game/List.vue";
import Detail from "../view/game/compoents/Detail.vue";
import New from "../view/game/compoents/New.vue";
import Login from "../view/login/index.vue";
import Test from "../view/test/index.vue";
import historyAQ from "../view/historyAQ/index.vue";
import menuHidden from "../view/menuHidden/index.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/main",
      redirect: "/game",
      name: "main",
      component: Layout,
      children: [
        {
          name: "game",
          path: "/game",
          component: Game
        },
        {
          name: "new",
          path: "/new",
          component: New
        },
        {
          name: "detail",
          path: "/detail",
          component: Detail
        }
      ]
    },
    {
      path: "/main",
      redirect: "/test",
      name: "main",
      component: Layout,
      children: [
        {
          name: "test",
          path: "/test",
          component: Test
        },

      ]
    },
    {
      path: "/main",
      redirect: "/historyAQ",
      name: "main",
      component: Layout,
      children: [
        {
          name: "historyAQ",
          path: "/historyAQ",
          component: historyAQ
        },

      ]
    }
    , {
      path: "/main",
      redirect: "/menuHidden",
      name: "main",
      component: Layout,
      children: [
        {
          name: "menuHidden",
          path: "/menuHidden",
          component: menuHidden
        },
      ]
    },
    {
      path: "/main",
      redirect: "/test1",
      name: "main",
      component: Layout,
      children: [
        {
          name: "test1",
          path: "/test1",
          component: Test
        },
      ]
    }
  ]
});

