import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { ProductListPage } from './pages';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
