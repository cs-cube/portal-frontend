import { GuestGuard } from './core/guards/guest/guest.guard';
import { AuthenticatedGuard } from './core/guards/authenticated/authenticated.guard';
import { PageNotFoundComponent } from './layout/errors/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedPageComponent } from './layout/authenticated-page/authenticated-page.component';
import { IndexComponent } from './layout/index/index.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthenticatedGuard ],
    component: AuthenticatedPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`./modules/dashboard/dashboard.module`).then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import(`./modules/users/users.module`).then(m => m.UsersModule)
      },
      {
        path: 'service-transactions',
        loadChildren: () => import(`./modules/service-transactions/service-transactions.module`).then(m => m.ServiceTransactionsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import(`./modules/settings/settings.module`).then(m => m.SettingsModule)
      },
    ]
  },



  {
    path: 'auth',
    canActivate: [ GuestGuard ],
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
