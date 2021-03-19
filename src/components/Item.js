import {FaShoppingBag} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Item = ({data}) => {
    return(
        <div className="w-72 flex flex-col items-center justify-center justify-self-center lg:items-start">
            <div className="h-72 mb-2 flex items-center bg-gray-50">
                <img src={data.img}  alt={data.name} className="w-full"></img>
            </div>
            <p className="text-2xl text-center text-gray-900 font-semibold lg:text-left">{data.name}</p>
            <p className="text-xl text-gray-700 mb-2">{data.fabricant}</p>
            <p className="text-xl text-gray-500 font-bold mb-2">$ {data.price}</p>
            <Link to={`/shop/${data.key}`} className="text-lg text-gray-200 bg-gray-900 rounded-sm w-32 flex items-center justify-center p-2">Buy it  <FaShoppingBag className="ml-3"/></Link>
        </div>
    )
}

export default Item;