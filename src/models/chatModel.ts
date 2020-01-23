export interface Chat {
    id: string;
    mensagem: string;
    eu: boolean;
    criadoEm: string;
    tipo: 'humano' | 'bot';
}