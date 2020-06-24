import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadChildren: () => import('../places/places.module').then(m => m.PlacesPageModule)
      },
      {
        path: 'discover',
        loadChildren: () => import('../places/discover/discover.module').then(m => m.DiscoverPageModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('../places/offers/offers.module').then(m => m.OffersPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/places',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/places',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
