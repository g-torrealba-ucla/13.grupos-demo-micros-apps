import Cl_mGrupo from "./Cl_mGrupo.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarGrupo({ grupoData, callback, }) {
        this.modelo.agregarGrupo({
            grupo: new Cl_mGrupo(grupoData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    gruposRegistrados() {
        return this.modelo.listar();
    }
}
