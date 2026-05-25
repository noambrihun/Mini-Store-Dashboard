import { useState, useEffect } from 'react';
import type { Product } from '../types/products';
function AllProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);
    return (
        <div className="text-gray-900">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">All Products</h1>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
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
                ))}
            </div>
        </div>
    )
}
export default AllProducts;