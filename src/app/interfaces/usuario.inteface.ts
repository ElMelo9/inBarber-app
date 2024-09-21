import { EmailValidator } from "@angular/forms"

export interface usuarioResponse{
    id_usuario: number
    id_rol: number
    id_barrio: number
    id_tipo_documento: number
    doc_usuario: string
    nombre_usuario: string
    apellido_usuario: string
    email_usuario: string
    telefono_usuario: string
    direccion_usuario: string
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date
}

export interface UsuarioUpdate{

    id_rol: number
    id_barrio: number
    id_tipo_documento: number
    doc_usuario: string
    nombre_usuario: string
    apellido_usuario: string
    email_usuario: string
    telefono_usuario: string
    direccion_usuario: string
    estado_rg: number
}


export interface usuarioCreate{
    id_rol: number
    id_barrio: number
    id_tipo_documento: number
    doc_usuario: string
    nombre_usuario: string
    apellido_usuario: string
    email_usuario: string
    telefono_usuario: string
    direccion_usuario: string
    password_usuario: string
}
