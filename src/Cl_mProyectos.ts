import Cl_mGrupo, { iGrupo } from "./Cl_mGrupo.js";

export default class Cl_mProyectos {
  private grupos: Cl_mGrupo[] = [];

  agregarGrupo({
    grupo,
    callback,
  }: {
    grupo: Cl_mGrupo;
    callback: (error: string | false) => void;
  }): void {
    // Validar nombre de grupo repetido
    const nombreRepetido = this.grupos.find(
      (g) => g.nombre.toLowerCase() === grupo.nombre.toLowerCase()
    );
    if (nombreRepetido) {
      callback(`El grupo ${grupo.nombre} ya existe`);
      return;
    }

    // Validar cedula repetida
    if (grupo.error()) {
      callback(`El grupo ${grupo.nombre} tiene cédula repetida internamente.`);
      return;
    }
    // Validar cedulas contra todos los grupos existentes
    for (const g of this.grupos) {
      if (
        g.existeCedula(grupo.cedula1) ||
        g.existeCedula(grupo.cedula2) ||
        g.existeCedula(grupo.cedula3)
      ) {
        callback(
          `El grupo ${grupo.nombre} tiene cédula repetida con el grupo ${g.nombre}.`
        );
        return;
      }
    }
    // Si todo está bien, agregar el grupo
    this.grupos.push(grupo);
    callback(false);
  }
  listar(): iGrupo[] {
    let grupos: iGrupo[] = [];
    this.grupos.forEach((g) => grupos.push(g.toJSON()));
    return grupos;
  }
}
