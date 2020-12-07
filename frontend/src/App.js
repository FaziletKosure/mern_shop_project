import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Header/>
    <main className="py-3">
      <Container>
         <HomeScreen/>
      </Container> 
    </main>
    <Footer/>
   
    </>
  );
}

export default App;
