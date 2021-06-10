import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ``,
    children:[
        {
          path: ``,
          loadChildren: () =>
            import('./pages/prueba/prueba.module').then(m => m.PruebaModule)
        },
        {
          path: `prueba`,
          loadChildren: () =>
            import('./pages/prueba/prueba.module').then(m => m.PruebaModule)
        }
      ]
  },
  {
    path: `**`,
    redirectTo: `home`,
    pathMatch: `full`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    }
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
