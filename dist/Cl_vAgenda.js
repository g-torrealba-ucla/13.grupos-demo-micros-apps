import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vProyectos extends Cl_vGeneral {
  constructor() {
    super({ formName: "agenda" });
    this.inNombre = this.crearHTMLInputElement("inNombre", {
      refresh: () => {},
      oninput: () => this.mostrarGruposRegistrados(),
    });
    this.btAgregarGrupo = this.crearHTMLButtonElement("btAgregarGrupo", {
      onclick: () => this.agregarGrupo(),
    });
    this.divGruposRegistrados = this.crearHTMLElement("divGruposRegistrados", {
      type: tHTMLElement.CONTAINER,
      refresh: () => this.mostrarGruposRegistrados(),
    });
  }
  get nombre() {
    return this.inNombre.value.trim();
  }
  mostrarGruposRegistrados() {
    this.divGruposRegistrados.innerHTML = "";
    let contactos = this.controlador.gruposRegistrados();
    contactos = contactos.filter((contacto) => {
      return contacto.nombre.toLowerCase().includes(this.nombre.toLowerCase());
    });
    contactos.forEach((contacto) => {
      this.divGruposRegistrados.innerHTML += `<tr>
            <td style="width: 80px;">${contacto.cedula}</td>
            <td style="width: 200px;">${contacto.nombre}</td>
            <td style="width: 80px;">${contacto.telefono}</td>
        </tr>`;
    });
  }
  agregarGrupo() {
    let cedula = prompt("Ingrese la cédula del nuevo contacto:");
    if (!cedula) return;
    let nombre = prompt("Ingrese el nombre:");
    if (!nombre) return;
    let telefono = prompt("Ingrese el teléfono:");
    if (!telefono) return;
    this.controlador.agregarGrupo({
      grupoData: {
        cedula: +cedula,
        nombre: nombre,
        telefono: telefono,
      },
      callback: (error) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}
