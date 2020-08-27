import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import {Produto} from '../model/produto.model';
import {ApiService} from './api.service';

@Injectable({providedIn: 'root'})
export class ProdutoService extends ApiService{

  static UPDATE_TABLE = new EventEmitter<any>();

  public findAll(): Observable<Produto[]> {
    return this.get('http://localhost:8080', 'produtos', '');
  }

  public deletarProduto(id: number) {
    return this.delete('http://localhost:8080', 'produto', id);
  }

  public editarProduto(id: number, produto: Produto) {
    return this.put('http://localhost:8080', 'produto' + `/${id}`, JSON.parse(JSON.stringify(produto, ['dataCadastro', 'nome'])));
  }

  public salvarProduto(json: JSON) {
    return this.post('http://localhost:8080', 'produto' , json);
  }

  public uptadeTable() {
    ProdutoService.UPDATE_TABLE.emit(true);
  }

}
