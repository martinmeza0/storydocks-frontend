import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/api/products">Contact</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
        </nav>        
        <h1> Clothes Shop store </h1>
      </header>

      <main>
        <section>
          <div className="product">
              <img src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="dadad"/>
              <div className="info">
                  <h3> black coach</h3>
                  <p className="price">$10</p>
              </div>
          </div>
          <div className="product">
              <img src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="dadad"/>
              <div className="info">
                  <h3> black coach</h3>
                  <p className="price">$10</p>
              </div>
          </div>
          <div className="product">
              <img src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="dadad"/>
              <div className="info">
                  <h3> black coach</h3>
                  <p className="price">$10</p>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
