import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/paper_list",
  //   name: "PaperList",
  //   component: () => import("../views/PaperList.vue")
  // },
  {
    path: "/paper/LibEpidemic-An-Open-Library-For-Traffic-Prediction",
    name: "LibEpidemic-An-Open-Library-For-Traffic-Prediction",
    component: () => import("../views/paper/LibEpidemic-An-Open-Library-For-Traffic-Prediction.vue")
  },
  {
    path: "/paper",
    name: "Paper",
    component: () => import("../views/Paper.vue")
  },
  {
    path: "/tutorial",
    name: "Tutorial",
    component: () => import("../views/Tutorial.vue")
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: () => import("../views/Ranking.vue")
  },
  {
    path: "/install_libepidemic",
    name: "InstallLibEpidemic",
    component: () => import("../views/started/InstallLibEpidemic.vue")
  },
  {
    path: "/quick_start",
    name: "QuickStart",
    component: () => import("../views/started/QuickStart.vue")
  },
  {
    path: "/task",
    name: "Task",
    component: () => import("../views/Task.vue")
  },
  {
    path: "/data",
    name: "Data",
    component: () => import("../views/toolkit/Data.vue")
  },
  {
    path: "/model",
    name: "Model",
    component: () => import("../views/toolkit/Model.vue")
  },
  {
    path: "/evaluation",
    name: "Evaluation",
    component: () => import("../views/toolkit/Evaluation.vue")
  },
  {
    path: "/ranking/METR-LA",
    name: "METR-LA",
    component: () => import("../views/ranking/speed/METR-LA.vue")
  },
  {
    path: "/ranking/PEMS-BAY",
    name: "PEMS-BAY",
    component: () => import("../views/ranking/speed/PEMS-BAY.vue")
  },
  {
    path: "/ranking/PEMSD4",
    name: "PEMSD4",
    component: () => import("../views/ranking/speed/PEMSD4.vue")
  },
  {
    path: "/ranking/PEMSD8",
    name: "PEMSD8",
    component: () => import("../views/ranking/speed/PEMSD8.vue")
  },
  {
    path: "/ranking/T-Drive20150206",
    name: "T-Drive20150206",
    component: () => import("../views/ranking/speed/T-Drive20150206.vue")
  },
  {
    path: "/ranking/TAXIBJ2015",
    name: "TAXIBJ2015",
    component: () => import("../views/ranking/speed/TAXIBJ2015.vue")
  },
  {
    path: "/ranking/NYCTAXI202001-202003-3600",
    name: "NYCTAXI202001-202003-3600",
    component: () => import("../views/ranking/speed/NYCTAXI202001-202003-3600.vue")
  },
  // {
  //   path: "/ranking/TAXIBJ",
  //   name: "TAXIBJ",
  //   component: () => import("../views/ranking/speed/TAXIBJ.vue")
  // },
  {
    path: "/ranking/NYCBike20140409",
    name: "NYCBike20140409",
    component: () => import("../views/ranking/speed/NYCBike20140409.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  // {
  //   path: "/chart",
  //   name: "Chart",
  //   component: () => import("../views/Chart.vue")
  // },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/news/News.vue")
  },
  {
    path: "/news/LibEpidemic-v0.1.0-has-released",
    name: 'LibEpidemic-V0.1.0-Has-Released',
    component: () => import("../views/news/content/LibEpidemic-V0.1.0-Has-Released.vue")
  },

];

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
