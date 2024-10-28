import axios from 'axios';

// Criando uma instância do axios com a URL base
const api = axios.create({
    baseURL: 'http://localhost:3000', // Base URL do seu backend
});

// Função para buscar dados
export const fetchData = async (endpoint: string, options = {}) => {
    try {
        const response = await api.get(endpoint, options); // Fazendo a requisição com axios
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error; // Lança o erro para tratamento posterior
    }
};
