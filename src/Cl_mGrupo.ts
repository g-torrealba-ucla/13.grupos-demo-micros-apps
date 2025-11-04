export interface iGrupo {
  nombre: string;
  cedula1: number;
  cedula2: number;
  cedula3: number | null;
}
export default class Cl_mGrupo {
  _nombre: string = "";
  _cedula1: number = 0;
  _cedula2: number = 0;
  _cedula3: number | null = 0;
  constructor({
    nombre = "",
    cedula1 = 0,
    cedula2 = 0,
    cedula3 = null,
  }: {
    nombre: string;
    cedula1: number;
    cedula2: number;
    cedula3: number | null;
  }) {
    this.nombre = nombre;
    this.cedula1 = cedula1;
    this.cedula2 = cedula2;
    this.cedula3 = cedula3;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim().toUpperCase();
  }
  get nombre() {
    return this._nombre;
  }
  set cedula1(cedula1: number) {
    this._cedula1 = +cedula1;
  }
  get cedula1() {
    return this._cedula1;
  }
  set cedula2(cedula2: number) {
    this._cedula2 = +cedula2;
  }
  get cedula2() {
    return this._cedula2;
  }
  set cedula3(cedula3: number | null) {
    this._cedula3 = cedula3 ? +cedula3 : null;
  }
  get cedula3() {
    return this._cedula3;
  }
  error(): string | false {
    if (
      this.cedula1 === this.cedula2 ||
      (this.cedula3 !== null && this.cedula1 === this.cedula3) ||
      (this.cedula3 !== null && this.cedula2 === this.cedula3)
    )
      return `El grupo ${this.nombre} tiene cedula repetida`;
    return false;
  }
  existeCedula(cedula: number | null): boolean {
    if (cedula === null) return false;
    if (this.cedula1 === cedula || this.cedula2 === cedula) return true;
    if (this.cedula3 !== null && this.cedula3 === cedula) return true;
    return false;
  }
  toJSON(): iGrupo {
    return {
      nombre: this._nombre,
      cedula1: this._cedula1,
      cedula2: this._cedula2,
      cedula3: this._cedula3,
    };
  }
}
