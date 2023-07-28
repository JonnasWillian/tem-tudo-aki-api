export interface UsuarioCadastrarDto{
    nome: string;
    email: string;
    senha: string;
    telefone : string; //?: significa que é opcional
    cpf : string;
}