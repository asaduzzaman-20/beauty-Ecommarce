import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Imageimpori from './component/imageimport'
import BeautySection from './component/BeautySection '
import BeautyTrends from './component/BeautyTrends'
import Footer from './component/footer'
import Productcard from './component/productcard'
import Beautyacrd from './component/Beautyacrd'
import Topproduct from './component/topproduct'
import Special from './component/speacialoffer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="bodycolor ">
        <Header />
        <Imageimpori />
        <BeautySection />
        <BeautyTrends />
        <Productcard />
        <Beautyacrd />
        <Topproduct />
        <Special />
        <Footer />

</div>


    </>
  )
}

export default App;
