import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import CategoryList from '../components/CategoryList/CategoryList'
import CarouselComponent from '../components/carousel/Carousel'
import Cards from '../components/cards/Cards'
import ListView from '../components/view/ListView'
import LifestyleCards from '../components/LifestyleCards/LifestyleCards'
import Footer from '../components/footer/Footer'
export default function home() {
  return (
    <div>
      {/* <NavBar/> */}
      {/* <CategoryList/> */}
      <CarouselComponent/>
      <Cards/>
      <ListView/>
      <LifestyleCards/>
    </div>
  )
}
