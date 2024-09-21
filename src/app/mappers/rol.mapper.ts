import { rolResponse, rolUpdate } from "../models/rol.interface";


export class RolMapper {
    
  // Método para convertir un rolResponse a rolUpdate
  static mapToRolUpdate(rol: rolResponse): rolUpdate {
    return {
      nombre_rol: rol.nombre_rol,
      estado_rg: rol.estado_rg
      
    };
  }
}