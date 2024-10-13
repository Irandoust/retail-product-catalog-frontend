import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductListPage, ProductDetailPage } from './pages';

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
