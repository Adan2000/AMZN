import React, { useState } from 'react';
import Product from '../components/Product';
import data from '../data';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    return () => {
    }
  }, [])
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
