import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'produtos',
  //   loadChildren: './produto/produto.module#ProdutoNewModule',
  // },
  {
    path: '**', redirectTo: 'produtos',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
