import {NgModule} from '@angular/core';
import {ProdutoComponent} from './produto.component';
import {ProdutoRoutingModule} from './produto-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProdutoComponent,
  ],
  imports: [
    ProdutoRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ProdutoComponent
  ],
})
export class ProdutoModule {

}
