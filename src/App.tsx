import React from 'react'
import OpeningHours from './components/OpeningHours'
import ProductSlideshow from './components/ProductSlideshow'
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Bakery Delight</h1>
      </header>
      <div className="max-w-4xl mx-auto">
        <OpeningHours />
        <ProductSlideshow />
        <EmployeeList />
      </div>
    </div>
  )
}

export default App
