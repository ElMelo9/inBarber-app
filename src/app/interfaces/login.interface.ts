export interface LoginI{
    
    email_usuario: string;
    password_usuario: string;
}

export interface LoginResponse{
    token_usuario: string;
    token_tipo: string;
}