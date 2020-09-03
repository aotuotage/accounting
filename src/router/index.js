import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Wrongq from '@/components/Wrongq'
import MemoryFlow from '@/components/MemoryFlow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Wrongq',
      name: 'Wrongq',
      component: Wrongq
    },
    {
      path: '/MemoryFlow',
      name: 'MemoryFlow',
      component: MemoryFlow
    }
  ]
})
