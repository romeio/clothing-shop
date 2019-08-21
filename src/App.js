import React from 'react';
import {Route,Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepages.component';
import ShopPage from './pages/shop/shop.component.jsx';

 const HatsPage =(props) =>(
     <div>
      <Link to='/'>Tohats</Link>
       
      <button onClick={() => props.history.push('/')}>Home</button>
    
      <h1>Hats pages</h1>
     
     </div>


 )
 const HelloPages =() =>(

   <div>
     <p>Show All Pages for all tipes</p>
     <h1>Hello World</h1>
   </div>
 )
function App() {
  return (
    <div>
   
    <Route path='/hello' component={HelloPages}/>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    
    
    
    </div>
  );
}
export default App;
