import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
    const[title, setTitle] = useState('');
    const[price, setPrice] = useState('');
    const[category, setCategory] = useState('');
    const[stock, setStock] = useState('');
    const[description, setDescription] = useState('');
    const navigate = useNavigate();
    const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    price,
                    category,
                    stock,
                    description
                })
            });
            const data = await response.json();
            console.log(data);
            setTitle('');
            setPrice('');
            setCategory('');
            setStock('');
            setDescription('');
            navigate('/');
        } catch (error) {
            console.error('Error adding product:', error);
            if(title === '' || price === '' || category === '' || stock === '' || description === ''){
                alert('Please fill in all fields');
                return;
            }
            if(title.length < 1 || title.length > 100){
                alert('Title must be between 1 and 100 characters');
                return;
            }
            if(price.length < 0){
                alert('Price must be greater than 0');
                return;
            }
            if(stock.length < 0){
                alert('Stock must be greater than 0');
                return;
            }
            if(category.length < 1 || category.length > 20){
                alert('Category must be between 1 and 20 characters');
                return;
            }
            if(description.length < 1 || description.length > 20){
                alert('Description must be between 1 and 20 characters');
                return;
            }
            alert('Error adding product');
            return;
        }
    };
    return (
        <form onSubmit={addProduct} className='flex flex-col gap-4'>
        <header>
        <h1 className="text-3xl font-bold text-slate-900">Add Product</h1>
        <p className="mt-1 text-slate-500">Add a new product</p>
      </header>

      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 text-black p-6 shadow-sm">
      <input
        type="text"
        placeholder="Product title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border border-gray-300 rounded-md p-2'
      />

      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className='border border-gray-300 rounded-md p-2'
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='border border-gray-300 rounded-md p-2'
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='border border-gray-300 rounded-md p-2 min-h-36 resize-y'
      />
      <button type='submit' className="rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700">Add Product</button>
      </div>
        </form>
    )
}
export default AddProduct;