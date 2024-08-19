import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header />
        {/* Other components and content */}
      </div>

      <div className="card">
      <h1>LAND TAX MANAGEMENT SYSTEM</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisdddicing elit. Nobis architecto repellendus quisquam repudiandae excepturi ullam magni quo consequatur aut. Excepturi iste ab sapiente molestiae recusandae error commodi officia at doloribus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum animi velit dolorem cum optio! Laboriosam alias ab in quisquam quam fuga optio nulla. Ipsam deleniti laborum dolorem officiis in architecto!
        </p>
      </div>
      <p className="read-the-docs">
        Click HERE to Start
      </p>
    </>
  )
}


export default App

