import { tipoDocUpdate, tipoDocResponse } from "../models/tipoDoc.interface";

export class TipoDocMapper {
    
    // Método para convertir un rolResponse a rolUpdate
    static mapToTipoDocUpdate(tipoDoc: tipoDocResponse): tipoDocUpdate {
      return {
        nombre_tipo_documento: tipoDoc.nombre_tipo_documento,
        sigla_tipo_documento: tipoDoc.sigla_tipo_documento,
        estado_rg: tipoDoc.estado_rg
      };
    }
  }