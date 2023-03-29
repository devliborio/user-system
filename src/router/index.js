import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import axios from 'axios'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') != undefined) {

        var request = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        }

        console.log(request)

        axios.post("http://localhost:8686/validate",{},request).then((res) => {
          console.log(res)
          next();
        }).catch((err) => {
          let errorAuth = err.response.data;
          alert(errorAuth);
          next('/login');
        });
      } else {
        alert("Faça o login primeiro!");
        next('/login');
      }
    }
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
