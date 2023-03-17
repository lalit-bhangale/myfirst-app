//import logo from './logo.svg';
import './Styles.css';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Categories from './Components/Categories';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='row'>
                    <div className='col-sm-4'>
                    <Categories/>
                    </div>
                    <div className='col-sm-4'>
                    <Product />
                    </div>
      </div>          
    
     <Footer />
    </div>
  );
}

export default App;
