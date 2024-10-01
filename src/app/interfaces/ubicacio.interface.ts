
export interface UbicacionCreate{
    id_usuario: number
    longitud_usuario: number
    latitud_usuario: number
}

export interface UbicacionResponse{

    id_ubicacion:number
    id_usuario: number
    longitud_usuario: number
    latitud_usuario: number
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date
}

export interface UbicacionUpdate{

    id_ubicacion:number
    id_usuario: number
    longitud_usuario: number
    latitud_usuario: number
    estado_rg: number
    fecha_md: Date
}
