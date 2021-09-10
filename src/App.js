
import './App.css';
import BrandValue from './components/BrandValue';
import DealsUnder from './components/DealsUnder';
import ExploreMarket from './components/ExploreMarket';
import Footer from './components/Footer';
import GetInspire from './components/GetInspire';
import Header from './components/Header';
import PhotoShow from './components/PhotoShow';
import PopularService from './components/PopularService';
import ProductCustom from './components/ProductCustom';
import Rating from './components/Rating';
import ShareAppScreen from './components/ShareAppScreen';
import ShopGoods from './components/ShopGoods';
import SmallCard from './components/SmallCard';

function App() {
  return (
    <div className="App">
     <Header/>
     <BrandValue/>
     <SmallCard/>
     <PopularService/>
     <ShopGoods/>
     
     <ExploreMarket/>
     <ProductCustom/>
     <DealsUnder/>
     <PhotoShow/>
  
     <GetInspire/>
   
     <ShareAppScreen/>
     <Footer/>

    </div>
  );
}

export default App;
