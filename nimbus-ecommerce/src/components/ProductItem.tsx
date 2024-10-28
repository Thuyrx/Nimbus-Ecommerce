import { useState } from 'react';
import { fetchData } from '../api';

const ProductItem = ({ produto }) => {
  const [isZoomed, setIsZoomed] = useState(false); // Controle para o zoom

  const adicionarAoCarrinho = async () => {
    try {
      await fetchData('/carrinhos/adicionar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_produto: produto.id_produto, quantidade: 1 }),
      });
      alert('Produto adicionado ao carrinho!');
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 relative">
      {/* Imagem com funcionalidade de zoom */}
      <img
        src={produto.imagem} // URL da imagem do produto
        alt={produto.nome}
        className={`w-full h-48 object-cover rounded-lg cursor-pointer ${isZoomed ? 'fixed inset-0 w-full h-full z-50' : ''}`}
        onClick={() => setIsZoomed(!isZoomed)} // Alternar entre zoom e estado normal
      />

      {!isZoomed && (
        <>
          <h3 className="font-bold mt-4">{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p className="text-gray-600">R$ {produto.preco}</p>
          <button 
            className="mt-2 bg-blue-500 text-white p-2 rounded" 
            onClick={adicionarAoCarrinho}
          >
            Adicionar ao Carrinho
          </button>
        </>
      )}

      {/* Botão de fechar o zoom */}
      {isZoomed && (
        <button 
          onClick={() => setIsZoomed(false)}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full z-50"
        >
          X
        </button>
      )}
    </div>
  );
};

export default ProductItem;
