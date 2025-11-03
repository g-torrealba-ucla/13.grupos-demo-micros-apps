/**
 * Se requiere una micro-APP que permita registrar la información de unos grupos
 * de trabajo para distintos proyectos de negocio. Cada grupo admite hasta 3
 * personas, mínimo 2, de las que se conoce su cédula. Cada grupo también tiene un nombre.
 * Los nombres de grupos no pueden repetirse.
 * Las cédulas de las personas tampoco pueden repetirse.
 * Se requiere que la micro-APP permita:
 * - Crear grupos.
 * - Listar grupos.
 * - Validar las restricciones indicadas.
 */

import Cl_controlador from "./Cl_controlador.js";
import Cl_mProyectos from "./Cl_mProyectos.js";
import Cl_vProyectos from "./Cl_vProyectos.js";

export default class Cl_index {
  public modelo: Cl_mProyectos;
  public vista: Cl_vProyectos;
  constructor() {
    this.modelo = new Cl_mProyectos();
    this.vista = new Cl_vProyectos();
    let controlador = new Cl_controlador(this.modelo, this.vista);
    this.vista.controlador = controlador;
    this.vista.refresh();
  }
}
