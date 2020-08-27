export class Produto {
  private _id: number;
  private _dataCadastro: Date;
  private _nome: string;

  toJSON() {
    return JSON.parse(JSON.stringify({
      nome: this.nome,
      dataCadastro: this.dataCadastro
    }));
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dataCadastro(): Date {
    return this._dataCadastro;
  }

  set dataCadastro(value: Date) {
    this._dataCadastro = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }
}
