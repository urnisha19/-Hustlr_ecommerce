import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductCardListTest = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 12)));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Shop Our Products</h1>
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardListTest;