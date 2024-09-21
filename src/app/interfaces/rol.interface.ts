export interface rolCreate {
    nombre_rol: string
}

export interface rolResponse {
    id_rol: number
    nombre_rol: string
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date

}
export interface rolUpdate {
    nombre_rol: string
    estado_rg: number
}
