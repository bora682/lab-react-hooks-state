import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([]);

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label htmlFor="category-select">Filter by Category: </label>
      <select
      id="category-select"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Grains">Grains</option>
      </select>

      <ProductList cartItems={cartItems} setCartItems={setCartItems} selectedCategory={selectedCategory} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
