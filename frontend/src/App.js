import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
       
         <Route path='/' exact component={HomeScreen}/>
         <Route path='/Product/:id' component={ProductScreen}/>
      </Container> 
    </main>
    <Footer/>
   
    </Router>
  );
}

export default App;
