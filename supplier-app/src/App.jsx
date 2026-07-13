// import { useState } from 'react'
import './App.css'

function App() {
  const openModel = () => {
    console.log("Supplier list fetching");
  }

  return (
    <>
      <section id="header">
        <div>
          <h1>Landing Page</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={openModel}
        >
          Add Payment
        </button>
      </section>
    </>
  )
}

export default App
