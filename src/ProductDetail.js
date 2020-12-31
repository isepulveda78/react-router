import {useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function ProductDetail({ match }) {
    useEffect(() => {
        fetchPoster();
    }, []);

    const [product, setProduct ] = useState({
        image: ''
    });

    
    const fetchPoster = async () => {
        const fetchItem = await fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`);

        const product = await fetchItem.json();
        console.log(product);
        setProduct(product);
    }

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} />
      <p>$9.99</p>
    </div>
  );
}

export default ProductDetail;
