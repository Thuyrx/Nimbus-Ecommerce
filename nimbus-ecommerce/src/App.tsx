import Header from './components/Header';
import ProductMenu from './components/ProductMenu';
import FooterCart from './components/FooterCart';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Conheça nosso menu</h2>
        <ProductMenu />
      </main>
      <FooterCart />
    </div>
  );
}

export default App;
