import React from 'react'
import { cartItemProp } from '../../utils/interface/root';
import { useDispatch } from 'react-redux';
import { decreateCartItemQty, increateCartItemQty, removeCart } from '../../store/slices/cartItems';

export type Props = {
    product: cartItemProp
};

export const CardList: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch()
    const remove = (id:number) => {
        dispatch(removeCart({id}))
    }
    const increate = (id:number) => {
        let count = 1
        dispatch(increateCartItemQty({id , count}))
    }
    const decreate = (id:number) => {
        let count = 1
        dispatch(decreateCartItemQty({id, count}))
    }
    return (
    
    
        <>
            <li className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md ">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
    
                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a href="#">{product.name}</a>
                            </h3>
                            <p onClick={() => remove(product.id)} className="ml-4 cursor-pointer">X</p>
                        </div>
    
                    </div>
                    <div className="flex flex-1 items-center mt-2  text-sm">
                        <span className="isolate inline-flex rounded-md shadow-sm mr-3">
                            <button
                                type="button"
                                onClick={() => decreate(product.id)}
                                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-1 text-sm font-bold text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500  focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                -
                            </button>
                            <input type="text" value={product.quantity} readOnly  className="relative w-12 -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                            <button
                                type="button"
                                onClick={() => increate(product.id)}
                                className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                +
                            </button>
                        </span>
                        <span className='text-app-primarylight text-sm'>Ks</span><h1 className='text-lg text-app-primarylight font-semibold'>{parseInt(product.price) * product.quantity}</h1>
                        
                    </div>
                </div>
            </li>
        </>
    );
}
