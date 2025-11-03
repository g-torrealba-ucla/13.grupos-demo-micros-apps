import Cl_mGrupo, { iGrupo } from "./Cl_mGrupo.js";
import Cl_mProyectos from "./Cl_mProyectos.js";
import Cl_vContactos from "./Cl_vProyectos.js";

export default class Cl_controlador {
  public modelo: Cl_mProyectos;
  public vista: Cl_vContactos;
  constructor(modelo: Cl_mProyectos, vista: Cl_vContactos) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarGrupo({
    grupoData,
    callback,
  }: {
    grupoData: iGrupo;
    callback: Function;
  }): void {
    this.modelo.agregarGrupo({
      grupo: new Cl_mGrupo(grupoData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  gruposRegistrados(): iGrupo[] {
    return this.modelo.listar();
  }
}
