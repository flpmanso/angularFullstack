import { Component, OnInit } from '@angular/core';
import {ProdutoService} from './service/produto.service';
import {Produto} from './model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.sass']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  produtoEditar: boolean;
  produto: Produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
  ) {
    ProdutoService.UPDATE_TABLE.subscribe(
      value => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.findProdutos();
  }

  public findProdutos() {
    this.produtoService.findAll().subscribe(
      value => {
        this.produtos = value;
      }
    );
  }

  public deletarProduto(id: number) {
    this.produtoService.deletarProduto(id).subscribe(
      value => {
        this.findProdutos();
      }
    );
  }

  campoEditar(produto: Produto) {
    this.produtoEditar = !this.produtoEditar;
    this.produto = produto;
  }

  public editarProduto() {
    this.produtoService.editarProduto(this.produto.id, this.produto).subscribe(
      value => {
        this.findProdutos();
        this.produtoEditar = false;
        this.cancelar();
      }
    );
  }

  public salvarProduto() {
    this.produto.dataCadastro = new Date();
    this.produtoService.salvarProduto(this.produto.toJSON()).subscribe(
      value => {
        this.findProdutos();
        this.cancelar();
      }
    );
  }

  public cancelar() {
    this.produto = new Produto();
  }

}
