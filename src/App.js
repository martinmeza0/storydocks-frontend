import React, {useState, useEffect} from 'react'
import Product from './components/Product'
import productServices from './services/products'
import './css/App.css';

function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    productServices
      .getAllproducts()
      .then(products =>{
        setProducts(products)
      })
  }, [])


  return (
    <div className="App">
      <header>
        <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
        </nav>        
        <h1> Clothes Shop store </h1>
      </header>

      <main>
        <section>
          {products.map((product, i) =>
            <Product
              key={i}
              title={product.name}
              img={product.image}              
              price={product.price}
              description={product.description}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
