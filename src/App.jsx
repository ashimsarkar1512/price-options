import './App.css'
import Navbar from './components/Navbar/Navbar'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl bg-amber-300'>Vite + React</h1>
       <PriceOptions></PriceOptions>
   
    </>
  )
}

export default App
