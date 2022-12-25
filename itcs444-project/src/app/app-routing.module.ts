import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'owner',
    loadChildren: () => import('./owner/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./supplier/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addshift',
    loadChildren: () => import('./addshift/addshift.module').then( m => m.AddshiftPageModule)
  },

  {
    path: 'product-details/:name',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'owner/owner-orders',
    loadChildren: () => import('./owner/owner-orders/owner-orders.module').then(m => m.OwnerOrdersPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'place-order/:name',
    loadChildren: () => import('./place-order/place-order.module').then( m => m.PlaceOrderPageModule)
  },
  {
    path: 'modify-product/:name',
    loadChildren: () => import('./modify-product/modify-product.module').then( m => m.ModifyProductPageModule)
  },
  {
    path: 'pending-rejected-orders',
    loadChildren: () => import('./pending-rejected-orders/pending-rejected-orders.module').then( m => m.PendingRejectedOrdersPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./supplier/add-product/add-product.module').then( m => m.AddProductPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
