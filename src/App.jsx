import { useEffect,useState } from 'react'
import './component/CSSmag.css'
import './App.css'
import Mag from './component/Mag' 
import Preloadingpage from './Preloadingpage'

function App() {
  const [count, setCount] = useState(0)
const [isLoading,setIsLoading] = useState(true);
useEffect(() =>{
  const fakeDataFetch = () =>{
setTimeout(() => {
  setIsLoading(false);
}, 6000);
  }
  fakeDataFetch();
}, []) 
  return (
    <>{
      isLoading ? (<Preloadingpage/>) : (<Mag/>)
    }
    
    
    </>
  )
}


export default App
