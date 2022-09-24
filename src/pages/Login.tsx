import logo from '../assets/logo.png'
import Avatar from '../assets/Avatar.png'

import { StarIcon } from '@heroicons/react/24/solid'

export default function Login() {
    const stars = [
        1,
        2,
        3,
        4,
        5
    ]
    return (
        <>
         <div className="flex h-screen">
         {/* <div className="relative hidden w-1/2 flex-1 lg:block bg-blue-500"> */}
         <div className="relative hidden w-1/2 lg:flex lg:flex-col bg-app-primary">
          <div className="p-6"><img src={logo} className="h-9 w-40" alt="" /></div>
          <div className="flex flex-col grow  justify-around text-center font-semibold">
            <div className='grow flex items-center'>
                <div>
                    <div className="flex justify-center mb-8">
                        {
                            stars.map(star => <StarIcon key={star} className="h-6 w-6 text-app-gold d-block" />)
                        }
                    </div>
                    
                      <div>
                          <p className="text-3xl text-white">
                          KLink has saved us thousands of hours of work. We’re able to spin up projects and features much faster.
                          </p>
                      </div>
                      <div className='flex justify-center mt-8'>
                        <img src={Avatar} className="h-16 w-16" alt="" />
                      </div>
                      <div className="mt-8">
                        <h1 className="text-white text-lg">Lori Bryson</h1>
                        <p className="text-darkgray text-sm">Product Designer, Sisyphus</p>
                      </div>
                </div>
            </div>
            <div className='p-16 flex justify-between'>
                <h1 className='text-darkgray text-sm'>© klinkenterprise.com</h1>
                <h1 className='text-darkgray text-sm'>help@klinkenterprise.com</h1>

            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Login</h2>
              <p className="mt-2 text-sm text-gray-600">
               
                <span className="font-sm text-gray-500">
                Welcome back! Please enter your details.
                </span>
              </p>
            </div>

            <div className="mt-8">
              

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password"  className="block text-sm font-medium  text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='••••••••'
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
        </>
    )
}