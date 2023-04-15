import { FC, useEffect } from 'react';

import './Products.css';
import { useTypedSelector } from 'hooks/useTypedSelector';
import ProductItem from './ProductItem';
import { useActions } from 'hooks/useActions';
import Button from 'ui/button/Button';

const Products: FC = () => {
  const { products, productsPerPage, moreButtonActivity } = useTypedSelector(
    (state) => state.products
  );
  const { increaseProductsPerPage, checkMoreButtonActivity } = useActions();

    useEffect(() => {
      checkMoreButtonActivity();
    }, [checkMoreButtonActivity, products]);

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
