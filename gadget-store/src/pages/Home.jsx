import React from 'react'
import Hero from '../components/Hero'
import ProductItem from '../components/ProductItem'
import Category from '../components/Category'
import BestSellProuduct from '../components/BestSellProuduct'
import Banner from '../components/Banner'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductItem />
      <Category />
      <BestSellProuduct />
      <Banner />
      <Explore />
    </div>
  )
}

export default Home