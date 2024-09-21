import { usuarioResponse } from "../models/usuario.inteface";
import { UsuarioUpdate } from "../models/usuario.inteface";


export class UsuarioMapper {
    
  // Método para convertir un usuarioResponse a UsuarioUpdate
  static mapToUsuarioUpdate(usuario: usuarioResponse): UsuarioUpdate {
    return {
      id_rol: usuario.id_rol,
      id_barrio: usuario.id_barrio,
      id_tipo_documento: usuario.id_tipo_documento,
      doc_usuario: usuario.doc_usuario,
      nombre_usuario: usuario.nombre_usuario,
      apellido_usuario: usuario.apellido_usuario,
      email_usuario: usuario.email_usuario,
      telefono_usuario: usuario.telefono_usuario,
      direccion_usuario: usuario.direccion_usuario,
      estado_rg: usuario.estado_rg
    };
  }
}