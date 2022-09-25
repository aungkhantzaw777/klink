import logo1 from '../assets/logo1.png'
import placeholder from '../assets/placeholder.png'
import { CardList } from '../components/organisms/CardList'

export default function Home() {
  const products = [


    {
      id: 1,
      name: 'Couple Shoes 2021 New One Man and One Woman Spring Korean',
      href: '#',
      color: 'Salmon',
      price: '9,000',
      quantity: 1,
      imageSrc: placeholder,
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Couple Shoes 2021 New One Man and One Woman Spring Korean',
      href: '#',
      color: 'Blue',
      price: '3,000',
      quantity: 1,
      imageSrc: placeholder,
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
      id: 3,
      name: 'Couple Shoes 2021 New One Man and One Woman Spring Korean',
      href: '#',
      color: 'Blue',
      price: '3,000',
      quantity: 1,
      imageSrc: placeholder,
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]

  return (
    <>

      <div className="grid grid-cols-3 h-screen grid-rows-3 ">
        <div className="col-span-2 ">
          <div className='py-4 px-4 pl-8 flex justify-between'>
            <div><img src={logo1} alt="klink" /></div>
            
            
            <div>
             
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
        
          </div>
        </div>
        <div className="col-span-1 row-span-3 flex flex-col justify-between border border-l-gray-100">
          <div className='flex flex-col pl-8 pr-5 justify-between'>
            <h1 className="font-bold text-lg">Order Details</h1>
            {/* content start */}
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 ">
                  {products.map((product) => (
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
                9000
              </h1>
            </div>
            <div className='mb-4 flex justify-between divided-y divide-gray-700'>
              <span className='text-gray-500'>Tax (5%)</span>
              <h1><span>Ks</span>
                450
              </h1>
            </div>
            <div className='mb-2 flex justify-between'>
              <span className='text-gray-700'>Total</span>
              <h1 className='font-bold text-primary-600'><span>Ks</span>
                9450
              </h1>
            </div>
            <button
              type="button"
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