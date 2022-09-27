import { useContext, useState } from "react"
import logo1 from '../assets/logo1.png'
import placeholder from '../assets/placeholder.png'
import { useEffect } from 'react'
import { CardList } from '../components/organisms/CardList'
import { Badge } from '../components/atoms/Badge'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ProductProp, cartItemProp, orderProductProp } from '../utils/interface/root'
import { ProductList } from '../components/organisms/ProductList'
import { getProducts } from '../api/product'
import AuthContext from "../store/slices/auth-context"

// redux
import { setProduct } from '../store/slices/product'
import { setCartItems } from '../store/slices/cartItems'
import { useDispatch, useSelector } from "react-redux"
import { AppState } from '../store'
import { postOrder } from "../api/order"

export default function Home() {
  const authCtx = useContext(AuthContext)
  const token = authCtx?.token

  const products = useSelector((state: AppState) => state.productRduc.products)
  const cartItems = useSelector((state: AppState) => state.cartRduc.cartItems)
  const dispatch = useDispatch()

  const categories: { id: number, name: string }[] = [
    {
      id: 1,
      name: 'Category1'
    },
  ]
  useEffect(() => {
    getProducts('products', { Authorization: `Bearer ${token}` }).then(({ data }) => {
      console.log('get product is', data.data)
      let results: ProductProp[] = []
      results = data.data
      dispatch(setProduct(results))
    })
  }, [])

  const addToCart = (id: number) => {
    let checkExistingItem = cartItems.find(item => item.id === id)
    if (checkExistingItem) {
      return
    }
    let items = products.filter((product: ProductProp) => product.id === id)
    let carts: cartItemProp[] = items.map(item => {
      return { ...item, quantity: 1 }
    })

    dispatch(setCartItems(carts))

  }


  const calcuateTotal = () => {
    let result = 0
    cartItems.forEach(item => {
      let eachPrice = parseInt(item.price) * item.quantity
      result = result + eachPrice
    })
    return result
  }

  const subtotal = calcuateTotal()

  const calculateTax = () => {
    let result = 0
    result = (5 / 100) * subtotal
    return result
  }

  let tax = calculateTax()


  const calculateAllTotal = () => {
    let result = 0
    result = subtotal + tax
    return result
  }
  const totalAmount = calculateAllTotal()

  const paynow = async () => {
    if(cartItems.length < 0) {
      return 
    }
    let orderProducts: orderProductProp[] = cartItems.map(item => {
      let subtotal = parseInt(item.price) * item.quantity
      return {
        product_id: item.id,
        quantity: item.quantity,
        subtotal
      }
    })

    let data = {
      total: totalAmount,
      tax: tax,
      products : orderProducts
    }
    await postOrder({url: 'orders', data, headers: {Authorization: `Bearer ${token}`}}).then(r => {
      console.log(r)
    }).catch(e => {
      console.log(e.message)
    }).finally(() => {
      
    })
  }

  return (
    <>

      <div className="grid grid-cols-3 h-screen grid-rows-3 ">
        <div className="col-span-2 ">
          <div className='py-4 px-4 pl-8 flex justify-between'>
            <div><img src={logo1} alt="klink" /></div>


            <div className="relative mt-1 flex items-center w-60">
              <input
                type="text"
                name="search"
                id="search"
                placeholder='search'
                className="block w-full rounded-md border-gray-300 text-xl pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd className="inline-flex items-center rounded-full border border-gray-100 px-4 font-sans text-sm font-medium text-gray-100 bg-app-primary">
                  <MagnifyingGlassIcon className='h-4 w-4' />
                </kbd>
              </div>
            </div>

          </div>
          {/* filter part */}
          <div className='pl-8 space-x-2 overflow-x-auto'>
            <Badge classes='text-primary-25 bg-primary-600' >All</Badge>
            {
              categories.map((cat, i) => (
                <Badge key={i} classes='text-black bg-gray-100' >
                  {cat.name}
                </Badge>
              ))
            }

          </div>
          <div className='mt-5 px-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {
              products.map(product => (
                <ProductList handleProduct={addToCart} key={product.id} product={product} />
              ))
            }
          </div>


        </div>
        <div className="col-span-1 row-span-3 flex flex-col justify-between border border-l-gray-100">
          <div className='flex flex-col pl-8 pr-5 justify-between'>
            <h1 className="font-bold text-lg">Order Details</h1>
            {/* content start */}
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 ">
                  {cartItems.map((product) => (
                    <CardList key={product.id} product={product} />
                  ))}
                </ul>
              </div>
            </div>
            {/* content end */}
          </div>
          <div className='bg-primary-25 py-4 pl-8 pr-5'>
            <div className='mb-3 flex justify-between'>
              <span className='text-gray-500'>Subtotal</span>
              <h1><span>Ks</span>
                {subtotal}
              </h1>
            </div>
            <div className='mb-4 flex justify-between border border-b-1 border-r-0 border-l-0 border-t-0 border-gray-500'>
              <span className='text-gray-500'>Tax (5%)</span>
              <h1><span>Ks</span>
                {tax}
              </h1>
            </div>
            <div className='mb-2 flex justify-between'>
              <span className='text-gray-700'>Total</span>
              <h1 className='font-bold text-primary-600'><span>Ks</span>
                {totalAmount}
              </h1>
            </div>
            <button
              type="button"
              onClick={paynow}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full"
            >
              Pay Now
            </button>
          </div>
        </div>

      </div>


    </>
  )
}