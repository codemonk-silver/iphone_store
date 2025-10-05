import React from 'react'
import Hero from '../components/Hero'
import ProductItem from '../components/ProductItem'
import Category from '../components/Category'
import BestSellProuduct from '../components/BestSellProuduct'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductItem />
      <Category />
      <BestSellProuduct />
    </div>
  )
}

export default Home