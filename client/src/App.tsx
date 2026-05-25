
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './index.css'
import Sidebar from './Components/Sidebar'
import AddProduct from './Pages/AddProduct'
import SearchProduct from './Pages/SearchProduct'
import AllProducts from './Pages/AllProducts'
function App() {
  return (
    <BrowserRouter>
    <div className='flex min-h-screen bg-gray-50 text-white'>
      <Sidebar />
        <main className='flex-1 overflow-auto'>
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/search-product' element={<SearchProduct />} />
        </Routes>
        </div>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
