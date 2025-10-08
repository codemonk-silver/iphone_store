import React from 'react'
import Hero from '../components/Hero'
import ProductItem from '../components/ProductItem'
import Category from '../components/Category'
import BestSellProduct from '../components/BestSellProuduct'
import Banner from '../components/Banner'
import Explore from '../components/Explore'
import Arrival from '../components/Arrival'
import Feature from '../components/Feature'

const Account = () => {
  return (
    <div>
        <Hero />
        <ProductItem />
        <Category />
        <BestSellProduct />
        <Banner />
        <Explore />
        <Arrival />
        <Feature />
    </div>
  )
}

export default Account