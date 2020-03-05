import React from 'react';
import BurgerBuilder from './containers/burgerbuilder/BurgerBuilder'
import './App.css';
import Layout from './components/layout/layout'

function App() {
  return (
    <div>
      <Layout>
      <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
