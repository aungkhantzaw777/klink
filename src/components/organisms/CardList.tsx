import React from 'react'
export type Props = {
    product: product
};
interface product {
    id: number,
    name: string,
    href: string,
    price: string,
    quantity: number,
    imageSrc: string,
    imageAlt: string,
}
export const CardList: React.FC<Props> = ({ product }) => (
    <>
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md ">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={product.href}>{product.name}</a>
                        </h3>
                        {/* <p className="ml-4">{product.price}</p> */}
                        <p className="ml-4">X</p>
                    </div>

                </div>
                <div className="flex flex-1 items-center mt-2  text-sm">
                    <span className="isolate inline-flex rounded-md shadow-sm mr-3">
                        <button
                            type="button"
                            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-1 text-sm font-bold text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500  focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        >
                            -
                        </button>
                        <input type="text" value={product.quantity} readOnly  className="relative w-12 -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                        <button
                            type="button"
                            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        >
                            +
                        </button>
                    </span>
                    <span className='text-app-primarylight text-sm'>Ks</span><h1 className='text-lg text-app-primarylight font-semibold'>{product.price}</h1>
                    
                </div>
            </div>
        </li>
    </>
);