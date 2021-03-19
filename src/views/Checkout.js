import {Link, useParams} from 'react-router-dom';
import products from '../components/data';
import {FaShoppingBag, FaArrowLeft} from 'react-icons/fa';

const CheckOut = ({onAdd}) => {
    const { id } = useParams();
    const data = products.find((product) => product.key === Number(id));

    return(
        <div className="w-full  mt-40 flex flex-col  items-center justify-center md:mt-28 lg:flex-row">
            <div className="w-full p-4 flex items-center justify-center lg:w-3/5">
                <div className="text-center w-full flex flex-col items-center justify-center">
                    <h1 className="text-2xl text-gray-600 font-light mb-2 md:text-4xl">{data.name}</h1>
                    <p className="text-xl text-gray-500 font-regular mb-6 md:text-2xl">{data.fabricant}</p>
                    <div className="w-4/5 h-64 bg-gray-400 flex items-center rounded-md shadow-2xl flex items-center justify-center md:w-100 md:h-96">
                        <img className={data.width ? 'w-3/5' : 'w-4/5'} src={data.img} alt={data.name}/>
                    </div>
                </div>
            </div>
            <div className="w-full p-6 flex flex-col items-center lg:w-2/5">
                <p className="text-3xl text-gray-700 font-light mb-6" >About:</p>
                <p className="w-4/5 mb-6 font-light text-lg text-gray-900 lg:w-96">{data.description}</p>
                <div className="w-4/5 flex items-center justify-center flex-col shadow-lg bg-gray-400 p-6 rounded-md lg:w-96">
                    <p className="text-3xl text-gray-900 font-bold mb-6">$ {data.price}</p>
                    <button onClick={() => onAdd(data)} className="w-32 h-12 rounded-md items-center justify-center transform hover:scale-110 duration-300 bg-gray-900 flex text-gray-100 text-lg outiline-none md:w-64 md:h-16 md:text-xl mb-4" >Buy now  <FaShoppingBag /></button>

                    <Link to='/shop' className="p-2 bg-gray-100 rounded-md flex items-center text-gray-700 font-bold text-md" ><FaArrowLeft /> Back to shop</Link>
                </div>
            </div>
        </div>
    )
}



export default CheckOut;