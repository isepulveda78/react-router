import {useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [products, setProducts] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character');

        const products = await data.json();
        console.log(products.results);
        setProducts(products.results);
    }
  return (
    <div className="container">
      <h1>Shop</h1>
      <br/>
      {products.map(products => (
          <h1 key={products.id}>
              <Link to={`/shop/${products.id}`}>{products.name}</Link>
              </h1>
      ))}
    </div>
  );
}

export default Shop;
