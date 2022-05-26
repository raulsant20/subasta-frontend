import './App.css';
import {useContext, useEffect} from 'react'
import AppRoutes from './Routes'
import {UserContext} from './context/userContext'

function App() {
  const { Initialize } = useContext(UserContext);
  useEffect(()=>{
    Initialize()
  },[])
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
