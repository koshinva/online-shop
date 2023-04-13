import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/cart" element={<div>Cart</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
