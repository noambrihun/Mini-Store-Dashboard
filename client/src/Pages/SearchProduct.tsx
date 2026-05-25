import { useState ,useEffect } from 'react';
function SearchProduct() {
    const[search, setSearch] = useState('');
    const[products, setProducts] = useState([]);
    useEffect(() => {
        if(search === "") {
            setProducts([])
            return
          }

        fetch(`http://localhost:3000/api/products/search/${search}`)
          .then(response => response.json())
          .then(data => setProducts(data))
          .catch(error => console.error(error))
      
      }, [search])
    return (
        <div>
        <header>
        <h1 className="text-3xl font-bold text-slate-900">Search Product</h1>
        <p className="mt-1 text-slate-500">Search for a product</p>     
      </header>
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 text-black p-6 shadow-sm">
      <input type="text" placeholder="Search product" value={search} onChange={(e) => setSearch(e.target.value)} />
      {products.map((product) => {
        return(
        <div key={product._id} >
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.stock}</p>
        <p>{product.description}</p>
      </div>
      );
      })}
      </div>
    </div>
  );
}
export default SearchProduct;