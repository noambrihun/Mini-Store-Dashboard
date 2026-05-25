import {Link} from 'react-router-dom'
function Sidebar() {
    return (
        <aside className='w-64 bg-gray-800 text-white p-4 min-h-screen'>
            <h1 className='text-2xl font-bold mb-4 underline'>Admin Dashboard</h1>
            <Link to='/' className='block p-2 rounded-md hover:bg-gray-700 text-white'>All Products</Link>
            <Link to='/add-product' className='block p-2 rounded-md hover:bg-gray-700 text-white'>Add Product</Link>
            <Link to='/search-product' className='block p-2 rounded-md hover:bg-gray-700 text-white'>Search Product</Link>
        </aside>
    )
}
export default Sidebar;