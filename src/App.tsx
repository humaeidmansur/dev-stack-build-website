import { Suspense } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Functionality from './Component/Functionality'
import Navbar from './Component/Navbar'

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
  <Navbar />
  <Banner />

<Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
  <Functionality />
</Suspense>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        theme="light"
        transition={Bounce}
      />
  <Footer />
    </>
  )
}

export default App
