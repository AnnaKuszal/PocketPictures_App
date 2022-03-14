import React from 'react';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Hero from './components/layout/Hero/Hero';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';

import './styles/global.scss';


const App = () => (
  <MainLayout>
    <Hero title='Pocket Pictures' /> 
    <Main title='My collection'/> 
    <Footer text='Copyright © 2022 by Anna Kuszal. All Rights Reserved.'/>
  </MainLayout>
);

export default App;
