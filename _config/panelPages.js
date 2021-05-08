export default {
  ads: {
    permission: 'iad.ads.manage',
    activated: true,
    path: '/ads',
    name: 'qad.ads.index',
    crud: import('@imagina/qad/_crud/ads'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master'),
    title: 'qad.sidebar.panelAds',
    icon: 'fas fa-bullhorn',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  adsCreate: {
    permission: 'iad.ads.create',
    activated: true,
    path: '/ads/create',
    name: 'qad.ads.create',
    page: () => import('@imagina/qad/_pages/admin/ads/form'),
    layout: () => import('@imagina/qsite/_layouts/master'),
    title: 'qad.sidebar.adminAdsCreate',
    icon: 'fas fa-bullhorn',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb : ['qad.ads'],
      recommendations: {
        name: 'addForm'
      }
    }
  },
  adsUpdate: {
    permission: 'iad.ads.edit',
    activated: true,
    path: '/ads/update/:id',
    name: 'qad.ads.edit',
    page: () => import('@imagina/qad/_pages/admin/ads/form'),
    layout: () => import('@imagina/qsite/_layouts/master'),
    title: 'qad.sidebar.adminAdsUpdate',
    icon: 'fas fa-bullhorn',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb : ['qad.ads'],
      recommendations: {
        name: 'addForm'
      }
    }
  }
}
