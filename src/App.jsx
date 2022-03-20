
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';
import BannerImages  from './components/BannerImages';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

/*
this website is taking the design from
1.  https://kalles-demo.myshopify.com/collections/sale
2.  https://kalles-demo.myshopify.com/pages/index?view=home_5
3.  https://www.wix.com/website-template/view/html/2240?siteId=3ea3a68e-c5a7-4baf-8ca4-50ce3a7f5f33&metaSiteId=97c52d73-badc-4953-ae75-febebad84e62&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Dtshirt&tpClick=view_button
*/


function App() {
  return (
    <>
      <Header></Header>
      <Slide></Slide>
      <Footer></Footer>
    </>
  );
}

export default App;
