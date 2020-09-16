import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout 公共侧边栏 头部 */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

export const constantRoutes = [

  {
    path: '/ShipOrderList',
    component: () => import('@/views/SinceDistribution/index'),
    meta: { title: '自配送', icon: 'dashboard', noCache: true },
    children: [
      {
        path: 'ShipOrderList',
        component: () => import('@/views/SinceDistribution/components/ShipOrderList')
      }
    ]
  },
  {

    path: '/PlatformBind',
    component: () => import('@/views/DeliveryOrder/PlatformBind/index'),
    children: [
      {
        path: 'MeituanTakeAway',
        component: () => import('@/views/DeliveryOrder/PlatformBind/MeituanTakeAway'),
        name: 'MeituanTakeAway'
      }
    ]
  },

  {
    path: '/cashierDesk',
    component: Layout,
    // redirect: '/cashierDesk/Index',
    children: [
      {
        path: 'Index',
        component: () => import('@/views/cashierDesk/index'),
        name: 'cashierDesk',
        meta: { title: '收银台', icon: 'dashboard', noCache: false }
      },
      {
        path: 'print',
        component: () => import('@/views/cashierDesk/print'),
        hidden: true
      },
      {
        path: 'payment',
        component: () => import('@/views/cashierDesk/payment'),
        hidden: true
      }
    ]
  },

  {
    path: '/DeliveryOrder',
    component: Layout,
    redirect: '/DeliveryOrder/Index',
    children: [
      {
        path: 'Index',
        component: () => import('@/views/DeliveryOrder/index'),
        name: 'DeliveryOrder',
        meta: { title: '外卖订单', icon: 'dashboard', noCache: true }
      }
    ]
  },

  {
    hidden: true,
    path: '/OnlineOrderDetail',
    component: () => import('@/views/OnlineOrders/OnlineOrderDetail'),
    name: 'OnlineOrderDetail'
  },
  {
    path: '/AddAppointment',
    component: () => import('@/views/BookingOrder/AddAppointment/index')
  },
  {
    component: Layout,
    path: '/OnlineOrder',
    children: [
      {
        path: 'OnlineOrders',
        component: () => import('@/views/OnlineOrders/index'),
        meta: { title: '网店订单', icon: 'dashboard', noCache: true },
        name: 'OnlineOrders'
      }
    ]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/BookingOrder',
    children: [
      {
        meta: { title: '预约', icon: 'dashboard', noCache: true },
        path: 'BookingOrder',
        component: () => import('@/views/BookingOrder/index')
      }
    ]
  },
  //会员卡信息
  {
    path: '/MemberUser/MemberCardDetail',
    component: () => import('@/views/MemberUser/MemberCardDetail/index'),
    name: 'MemberCardDetail',
    children: [
      {
        name:"MemberCardDetail",
        path: 'MemberCardDetail',
        component: () =>import('@/views/MemberUser/MemberCardDetail/components/MemberCardInfoDetail'),
      },
      {
        name:"MemberModificate",
        path: 'MemberModificate',
        component: () =>import('@/views/MemberUser/MemberCardDetail/components/MemberModificate'),
      }
    ]
  },
  {
    component: Layout,
    path: '/UnfoldPresentate',
    children: [
      {
        path: 'Index',
        component: () => import('@/views/UnfoldPresentate/index'),
        meta: { title: '展示介绍', icon: 'dashboard' },
        name: 'UnfoldPresentate'
      }
    ]
  },
  {
    component: Layout,
    path: '/MemberUser',
    children: [
      {
        path: 'Index',
        component: () => import('@/views/MemberUser/index'),
        meta: { title: '会员', icon: 'dashboard' },
        name: 'UnfoldPresentate'
      }
    ]
  },
  {
    // 评价
    // evaluate
    path: '/evaluate',
    name: 'evaluate',
    component: () => import('@/views/cashierDesk/evaluate')
  },
  {
    // 开单
    path: '/BillingOrder',
    component: () => import('@/views/cashierDesk/BillingOrder'),
    children: [
      {
        // 会员
        path: 'MembersInfo',
        component: () => import('@/views/MembersInfo/index'),
        children: [
          {
            // 客户信息
            path: 'customerInfo',
            component: () => import('@/views/MembersInfo/childRouter/customerInfo')
          },
          // 标签
          {
            path: 'MemberLabel',
            component: () => import('@/views/MembersInfo/childRouter/MemberLabel')
          },
          // 验光单
          {
            path: 'eyeGlassPrescription',
            component: () => import('@/views/MembersInfo/childRouter/eyeGlassPrescription')
          },
          // 交易历史
          {
            path: 'TransactionHistory',
            component: () => import('@/views/MembersInfo/childRouter/TransactionHistory')
          },
          // 预约事件
          {
            path: 'ScheduledEvents',
            component: () => import('@/views/MembersInfo/childRouter/ScheduledEvents')
          },
          // 视光记录
          {
            path: 'quitOptometryRecord',
            component: () => import('@/views/MembersInfo/childRouter/quitOptometryRecord')
          },
          // 视光记录
          {
            path: 'discountCoupon',
            component: () => import('@/views/MembersInfo/childRouter/discountCoupon')
          }
        ]
      },
      {
        path: 'Overbooking',
        component: () => import('@/views/Overbooking/index'),
        children: [
          {
            path: 'SaveNewMember',
            component: () => import('@/views/Overbooking/components/SaveNewMember')
          },

          {
            path: 'AddFramework',
            component: () => import('@/views/Overbooking/components/AddFramework/index'),
            children: [
              {
                path: 'GlassesFar',
                component: () => import('@/views/Overbooking/components/AddFramework/GlassesFar')
              },

              {
                path: 'multipleFocus',
                component: () => import('@/views/Overbooking/components/AddFramework/multipleFocus')
              },

              {
                path: 'contactLenses',
                component: () => import('@/views/Overbooking/components/AddFramework/contactLenses')
              },
              {
                path: 'RigidGasPermeable',
                component: () => import('@/views/Overbooking/components/AddFramework/RigidGasPermeable')
              },

              {
                path: 'CornealShape',
                component: () => import('@/views/Overbooking/components/AddFramework/CornealShape')
              },
              {
                path: 'zeroDiopter',
                component: () => import('@/views/Overbooking/components/AddFramework/zeroDiopter')
              },
              {
                path: 'GlassesNear',
                component: () => import('@/views/Overbooking/components/AddFramework/GlassesNear')
              }

            ]
          }
        ]
      }

    ]
  },

  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'dashboard', affix: true }
      }
    ]
  }
  /* {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: '必备资料', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: '指南', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }*/
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
// 权限设置
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: '权限',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: '页面权限',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: '指示权限'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '为角色标识权限',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: '图标', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: '例子',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: '创建文章', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: '编辑文章', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: '文章列表', icon: 'list' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: '标签切换', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: '错误信息',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '未经授权', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '不存在', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: '错误log', icon: 'bug' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: '导入Excel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: '导入可选' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: '上传 Excel' }
      }
    ]
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: '压缩', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: '下载PDF', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: '主题', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: '剪贴板', icon: 'clipboard' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com/',
        meta: { title: '外部链接', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
