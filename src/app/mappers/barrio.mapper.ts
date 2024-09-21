import { barrioResponse, barrioUpdate } from "../models/barrio.interface";



export class BarrioMapper {
    
  // Método para convertir un rolResponse a rolUpdate
  static mapToBarrioUpdate(barrio: barrioResponse): barrioUpdate {
    return {
      nombre_barrio: barrio.nombre_barrio,
      estado_rg: barrio.estado_rg
      
    };
  }
}