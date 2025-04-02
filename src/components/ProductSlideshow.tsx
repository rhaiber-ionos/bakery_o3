import React, { useState, useEffect } from 'react'

const images = [
  '/images/product1.jpg',
  '/images/product2.jpg',
  '/images/product3.jpg'
]

const ProductSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrent((current + 1) % images.length)
  }

  return (
    <div className="p-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-bold mb-4">Our Products</h2>
      <div className="relative">
        <img src={images[current]} alt={`Slide ${current + 1}`} className="w-full h-64 object-cover rounded" />
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2">Prev</button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2">Next</button>
      </div>
    </div>
  )
}

export default ProductSlideshow
