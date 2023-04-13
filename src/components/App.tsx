import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/cart" element={<div>Cart</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
