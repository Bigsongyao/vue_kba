import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import diagram from '@/components/diagram'
import consult from '@/components/consult'
import shop_consult from '@/components/shop_consult'
import brand_consult from '@/components/brand_consult'
import kline from '@/components/kline'
import hot from '@/components/hot'
import shop from '@/components/shop'
import union from '@/components/union'
import great_event from '@/components/great_event'
import stats from '@/components/stats'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/diagram',
      name: 'diagram',
      component: diagram
    },
    {
      path: '/consult',
      name: 'consult',
      component: consult
    },
    {
      path: '/shop_consult',
      name: 'shop_consult',
      component: shop_consult
    },
    {
      path: '/brand_consult',
      name: 'brand_consult',
      component: brand_consult
    },
    {
      path: '/kline',
      name: 'kline',
      component: kline
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/union',
      name: 'union',
      component: union
    },
    {
      path: '/great_event',
      name: 'great_event',
      component: great_event
    },
    {
      path: '/stats',
      name: 'stats',
      component: stats
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
