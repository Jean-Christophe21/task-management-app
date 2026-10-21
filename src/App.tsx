// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import httpService from "./service/httpService.ts";


async function displayTasks(){
  const response = await httpService.get("/tasks");
  console.log("response:", response.data.data);
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={displayTasks}>Display Tasks</button>
    </>
  )
}

export default App
