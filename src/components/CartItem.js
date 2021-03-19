import {FaTimes} from 'react-icons/fa';

const CartItem = ({data, onDelete, onChange}) => {
    return(
        <div className="w-full p-4 flex flex-col items-center justify-between my-5 border-t border-b border-gray-500 lg:w-4/5 lg:flex-row relative">
            <FaTimes onClick={() => onDelete(data.key)} className="absolute top-4 right-4 text-2xl text-gray-700 cursor-pointer " />
            <div className="overflow-hidden w-full h-48 mb-4 bg-gray-100 flex items-center justify-center rounded-md lg:w-80 lg:h-64 lg:mb-0">
                <img className="w-64 lg:w-4/5" src={data.img} alt={data.name}></img>
            </div>
            <div className="w-full flex flex-col items-center justify-center lg:w-96">
                <p className="text-xl text-gray-600 font-regular mb-2 lg:text-2xl">{data.name}</p>
                <p className="text-lg text-gray-900 font-light mb-4 lg:text-xl">{data.fabricant}</p>
                <p className="text-2xl text-gray-700 font-bold lg:text-4xl">{data.price}</p>
                <div className="flex items-center justify-center mt-4">
                    <button disabled={data.qtt <= 1 ? true : false} onClick={() => onChange(data.key, -1)} className="w-8 h-8 bg-gray-700 text-gray-100 text-lg font-bold">-</button>
                    <p className="w-14 h-8 mx-2 bg-gray-600 flex items-center justify-center text-gray-100 text-lg">{data.qtt}</p>
                    <button onClick={() => onChange(data.key, 1)} className="w-8 h-8 bg-gray-700 text-gray-100 text-lg font-bold">+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;