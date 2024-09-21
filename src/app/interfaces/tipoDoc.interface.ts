export interface tipoDocCreate {
    nombre_tipo_documento: string
    sigla_tipo_documento: string
}

export interface tipoDocResponse {
    id_tipo_documento: number
    nombre_tipo_documento: string
    sigla_tipo_documento: string
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date
}

export interface tipoDocUpdate {
    nombre_tipo_documento: string
    sigla_tipo_documento: string
    estado_rg: number

}
