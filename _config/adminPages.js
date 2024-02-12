export default {
  ads: {
    permission: 'iad.ads.manage',
    activated: true,
    path: '/ad/ads/index',
    name: 'qad.ads.index',
    crud: import('modules/qad/_crud/ads'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iad.cms.sidebar.adminAds',
    icon: 'fal fa-rectangle-ad',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  adsCreate: {
    permission: 'iad.ads.create',
    activated: true,
    path: '/ad/ads/create',
    name: 'qad.ads.create',
    page: () => import('modules/qad/_pages/admin/ads/form'),
    layout: () => import('layouts/master.vue'),
    title: 'iad.cms.sidebar.adminAdsCreate',
    icon: 'fal fa-rectangle-ad',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qad.ads'],
      recommendations: {
        name: 'addForm'
      }
    }
  },
  adsUpdate: {
    permission: 'iad.ads.edit',
    activated: true,
    path: '/ad/ads/update/:id',
    name: 'qad.ads.edit',
    page: () => import('modules/qad/_pages/admin/ads/form'),
    layout: () => import('layouts/master.vue'),
    title: 'iad.cms.sidebar.adminAdsUpdate',
    icon: 'fal fa-rectangle-ad',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qad.ads'],
      recommendations: {
        name: 'addForm'
      }
    }
  },
  categories: {
    permission: 'iad.categories.manage',
    activated: true,
    path: '/ad/categories/index',
    name: 'qad.categories.index',
    crud: import('modules/qad/_crud/categories'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iad.cms.sidebar.adminCategories',
    icon: 'fa-light fa-layer-group',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qad.ads']
    }
  },
  ups: {
    permission: 'iad.ups.manage',
    activated: true,
    path: '/ad/ups/index',
    name: 'qad.ups.index',
    crud: import('modules/qad/_crud/ups'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iad.cms.sidebar.adminUps',
    icon: 'fa-light fa-up-from-bracket',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qad.ads']
    }
  },
  adUps: {
    permission: 'iad.ups.manage',
    activated: true,
    path: '/ad/ad-ups/index',
    name: 'qad.adUps.index',
    crud: import('modules/qad/_crud/adUps'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iad.cms.sidebar.adminAdUps',
    icon: 'fa-light fa-arrow-up-wide-short',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qad.ads']
    }
  }
}
