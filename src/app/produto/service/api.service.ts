import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  /**
   * faz a chamada de URI via HTTP Method GET
   * OBS: sem a '/' no inicio
   * @example get('mysaga/colaborador', 2);
   * @param resource {EnumResources}(local para busca exemplo 'colaborador')
   * @param prefixo {any}
   * @returns Observable<any>
   */
  public get(resource: string, urn: string, value: any): Observable<any> {
      return this.http.get(`${resource}/${urn}/${value}`);
  }
  public delete(resource: string, urn: string, value: any): Observable<any> {
      return this.http.delete(`${resource}/${urn}/${value}`);
  }
  public put(resource: string, urn: string, json: JSON): Observable<any> {
      return this.http.put(`${resource}/${urn}`, json);
  }
  public post(resource: string, urn: string, json: JSON): Observable<any> {
      return this.http.post(`${resource}/${urn}`, json);
  }

}
