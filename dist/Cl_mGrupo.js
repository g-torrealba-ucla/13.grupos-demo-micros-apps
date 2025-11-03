export default class Cl_mGrupo {
    constructor({ nombre = "", cedula1 = 0, cedula2 = 0, cedula3 = null, }) {
        this._nombre = "";
        this._cedula1 = 0;
        this._cedula2 = 0;
        this._cedula3 = 0;
        this.nombre = nombre;
        this.cedula1 = cedula1;
        this.cedula2 = cedula2;
        this.cedula3 = cedula3;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
    set cedula1(cedula1) {
        this._cedula1 = +cedula1;
    }
    get cedula1() {
        return this._cedula1;
    }
    set cedula2(cedula2) {
        this._cedula2 = +cedula2;
    }
    get cedula2() {
        return this._cedula2;
    }
    set cedula3(cedula3) {
        this._cedula3 = cedula3 ? +cedula3 : null;
    }
    get cedula3() {
        return this._cedula3;
    }
    error() {
        if (this._cedula1 === this._cedula2 ||
            (this._cedula3 !== null && this._cedula1 === this._cedula3) ||
            (this._cedula3 !== null && this._cedula2 === this._cedula3))
            return `El grupo ${this._nombre} tiene cedula repetida`;
        return false;
    }
    existeCedula(cedula) {
        if (cedula === null)
            return false;
        if (this.cedula1 === cedula || this.cedula2 === cedula)
            return true;
        if (this.cedula3 !== null && this.cedula3 === cedula)
            return true;
        return false;
    }
    toJSON() {
        return {
            nombre: this._nombre,
            cedula1: this._cedula1,
            cedula2: this._cedula2,
            cedula3: this._cedula3,
        };
    }
}
