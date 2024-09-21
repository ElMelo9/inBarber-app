export interface barrioCreate {
    nombre_barrio: string
}

export interface barrioResponse {
    id_barrio: number
    nombre_barrio: string
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date
}

export interface barrioUpdate {
    nombre_barrio: string
    estado_rg: number
}
