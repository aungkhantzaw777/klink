import { ProductProp } from '../../utils/interface/root';
export type Props = {
    product: ProductProp,
    handleProduct: (id:number) => void
};

export const ProductList: React.FC<Props> = ({ product, handleProduct }) => {
    return (
        <>
            <div key={product.id} className="group relative">
                <div  className="min-h-52 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-52">
                    <img
                    onClick={() => handleProduct(product.id)}
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div onClick={() => handleProduct(product.id)} className="mt-4 flex flex-col">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </a>
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    <div className='mt-3'>
                        <p className="text-sm font-semibold text-primary-600">Ks 
                            <span className='font-bold text-lg pl-1'>

                                {product.price}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}
