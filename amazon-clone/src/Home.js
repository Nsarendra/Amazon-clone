import React from 'react'
import './Home.css';
import  Product from './Product'

function Home() {
  return (
    <div className='home'>
       <div className='home_container'>
          <img className='home_image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
           alt=''/>
            <div className='home_row'>
               <Product
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
               price={29.99}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
               rating={5}/>
               <Product
               title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
               price={239.99}
               image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
               rating={5}/>
            </div>
            <div className='home_row'>
            <Product 
                 id="4903850"
                 title="Samsung LC49RG0SSUXEN 49' Curved LED Gaming Monitor"
                 price={199.99}
                 rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
            <Product
            id="23445930"
            title="Amazon Echo (3rd generation) Smart speaker with ALexa, Charcoal Fabric"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
            <Product
            id="3254354345"
            title="New Apple ipod pro (12.9-inchmwi-fi,128GB) -SIlver($th Generation)"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
            </div>

            <div className='home_row'>
            <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
            </div>
       </div>
    </div>
  )
}

export default Home
