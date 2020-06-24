import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'places',
    component: PlacesPage,
    children: [
      // {
      //   path: 'places',
      //   loadChildren: () => import('../places/places.module').then(m => m.PlacesPageModule)
      // },
      {
        path: 'discover',
        loadChildren: () => import('../places/discover/discover.module').then(m => m.DiscoverPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'offers',
        loadChildren: () => import('../places/offers/offers.module').then(m => m.OffersPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/places/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/places/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
