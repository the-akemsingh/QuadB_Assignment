import React from 'react'
import { Link } from 'react-router-dom'
import { productsData } from "../utils/data"
import ProductsCard from './products/ProductsCard'

const Shop = () => {
    return (
        <div className='w-full max-w-[1200px] mx-auto'>
            {/* Page Upper Static Layout */}
            <div className='background-image relative'>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center'>
                    <div>
                        <Link to={'/'} className='text-gray-600 font-medium text-md'>Home</Link> <span className='mx-3'>{">"}</span> <Link to={'/shop'} className='text-gray-900 font-semibold text-md'>Shop</Link>
                    </div>
                    <h1 className='heading text-5xl my-4 font-medium'>Shop Page</h1>
                    <p className='text-lg text-gray-800 '>Let’s design the place you always imagined.</p>
                </div>
            </div>
            {/* Main Shop Layout  */}
            <div className='flex flex-col mt-[40px] w-full'>
                {/* Filters Layout  */}
                <div className='w-full flex flex-col  justify-between '>
                    {/* Category and Price Filters  */}
                    <div className='flex gap-[10px] mb-[30px]'>
                        <div >
                            <p className='text-md uppercase text-gray-600 mb-2'>Categories</p>
                            <select name="category" className='outline-none py-3 px-6 text-black border text-md border-gray-700 rounded-[8px] font-medium' >
                                <option value="living">Living Room</option>
                                <option value="bedroom">Bedroom Room</option>
                                <option value="kitchen">Kitchen</option>
                            </select>
                        </div>
                        <div >
                            <p className='text-md uppercase text-gray-600 mb-2'>Prices</p>
                            <select name="prices" className='outline-none py-3 px-6 text-gray-800 border text-md border-gray-500 rounded-[8px] font-medium' >
                                <option value="all">All Prices</option>
                                <option value={100}>$0 - 100$</option>
                                <option value={300}>$100 - $300</option>
                            </select>
                        </div>
                    </div>
                    {/* All Products */}
                    <div className='flex flex-wrap items-center justify-center'>
                        {productsData.map((products) => (
                            <ProductsCard products={products} />
                        ))}
                    </div>
                </div>
                <button className='w-[200px] mx-auto border border-gray-600 text-black py-4  font-semibold mb-5 hover:text-white hover:bg-black'>
                    Show More
                </button>
            </div>
        </div>
    )
}

export default Shop