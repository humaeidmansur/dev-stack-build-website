import { Suspense } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Functionality from './Component/Functionality'
import Navbar from './Component/Navbar'


function App() {


  return (
    <>
  <Navbar />
  <Banner />

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Functionality />
      </Suspense>

  <Footer />
    </>
  )
}

export default App
