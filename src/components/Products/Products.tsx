import { FC } from 'react';

import './Products.css';
import { useTypedSelector } from 'hooks/useTypedSelector';
import ProductItem from './ProductItem';
import Button from 'components/ui/Button';
import { useActions } from 'hooks/useActions';

const Products: FC = () => {
  const { products, productsPerPage, moreButtonActivity } = useTypedSelector(
    (state) => state.products
  );
  const { increaseProductsPerPage } = useActions();
  return (
    <div className="products">
      <ul className="products__list">
        {products.slice(0, productsPerPage).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
      {moreButtonActivity && (
        <Button className="mt-5" onClick={() => increaseProductsPerPage()}>
          Ещё
        </Button>
      )}
    </div>
  );
};

export default Products;
