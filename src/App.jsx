
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
 

  return (
    <>
    <div className='bg-blue-200'>
    <NavBar></NavBar>
     
     {/* <DaisyNav></DaisyNav> */}

      {/* <h1 className='text-7xl bg-red-200'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>

  
    </div>
     
    </>
  )
}

export default App
