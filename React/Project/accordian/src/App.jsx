import { useState } from 'react'

import './App.css'
import Accoidian from './components/accordian/Accoidian'
import Bgchanger from './components/bgchnager/Bgchanger'
import StarRating from './components/star-rating/StarRating'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMoreData from './components/load-more-data/LoadMoreData'
import NavMenu from './components/side-menu/NavMenu'
import navData from './components/side-menu/navData'
import QrcodeGenerator from './components/qr-code-generator/QrcodeGenerator'
import DarkLight from './components/dark-light/DarkLight'


function App() {
 
  return (
   <>
   {/* <Accoidian/> */}
   {/* <Bgchanger/> */}
   {/* <StarRating/> */}
   {/* <ImageSlider/> */}
   {/* <LoadMoreData/> */}
   {/* <NavMenu menus={navData}/> */}
   {/* <QrcodeGenerator/> */}
   <DarkLight/>
   </>
  )
}

export default App
