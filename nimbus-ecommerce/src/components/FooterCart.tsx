import { useEffect, useState } from 'react';
import { fetchData } from '../api'; // Importando fetchData para usar axios

const FooterCart = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartTotal = async () => {
      try {
        const data = await fetchData('/carrinhos'); // Mudando para usar fetchData
        setTotal(data.total || 0); // Supondo que o backend retorna um campo 'total'
      } catch (error) {
        console.error("Erro ao buscar o total do carrinho:", error);
      }
    };

    fetchCartTotal();
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full flex justify-center items-center">
      <div className="text-center">
        <p>Total do Carrinho: R$ {total}</p>
        <button className="mt-2 bg-green-500 text-white p-2 rounded">Finalizar Compra</button>
      </div>
    </footer>
  );
};

export default FooterCart;
