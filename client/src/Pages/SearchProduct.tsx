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
        <div className="text-gray-900">
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Search Product</h1>
                <p className="mt-1 text-sm text-gray-500">Search for a product</p>
            </header>

            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <input
                    type="text"
                    placeholder="Search product"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => {
                    return (
                        <div
                            key={product._id}
                            className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4">
                                <div className="flex items-start justify-between gap-3">
                                    <h2 className="text-lg font-semibold leading-snug text-gray-900">
                                        {product.title}
                                    </h2>
                                    <p className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                                        {product.price}
                                    </p>
                                </div>
                                <p className="mt-2 inline-block rounded-md bg-gray-800 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-white">
                                    {product.category}
                                </p>
                            </div>

                            <div className="flex flex-1 flex-col gap-3 px-5 py-4">
                                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                                    {product.description}
                                </p>
                                <p className="mt-auto text-sm font-medium text-gray-700">
                                    {product.stock}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default SearchProduct;