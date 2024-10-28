import { useEffect, useState } from 'react';
import { fetchData } from '../api';
import ProductItem from './ProductItem'; // Importando o componente ProductItem

const ProductMenu = () => {
  const [produtos, setProdutos] = useState([]);

  // Função para buscar os produtos
  useEffect(() => {
    const getProdutos = async () => {
      try {
        const data = await fetchData('/produtos'); // Endpoint para pegar produtos
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };
    getProdutos();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
      {produtos.length > 0 ? (
        produtos.map((produto) => (
          <ProductItem key={produto.id_produto} produto={produto} /> // Usando ProductItem
        ))
      ) : (
        <div className="p-4 bg-gray-100">
          <h3 className="font-bold">Nenhum produto encontrado.</h3>
        </div>
      )}
    </section>
  );
};

export default ProductMenu;
