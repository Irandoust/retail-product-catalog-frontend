import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { ProductListPage } from './pages';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
