import {FaTimesCircle, FaShoppingBag, FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import CartItem from '../components/CartItem';
import {useState} from 'react';

const Cart = ({items, onDelete, onChange, onReset}) => {
    const [bougth, setBougth] = useState(false);

    const cartPrice = () =>{
        if(items.length){
            return items.map((item) => parseFloat(item.price) * item.qtt).reduce((acc, cur) => acc + cur, 0).toFixed(2);
        }else{
            return 0.00.toFixed(2);
        }
    }

    const onBuy = () => {
        setBougth(true);
        onReset();
    }

    return(
        <div className="w-full  mt-40 flex flex-col  items-center justify-center md:mt-28 lg:flex-row">
            {!bougth ?
            (<div className="w-4/5 p-4 bg-gray-300">
                <div className="w-full p-4 border-b border-gray-500 flex flex-col items-center justify-between lg:flex-row">
                    <p className=" mb-2 text-2xl text-gray-700 font-light md:text-4xl md:mb-0">Your cart</p>
                    <p className="text-xl text-gray-700 font-light md:text-3xl">Total price: $ {cartPrice()}</p>
                </div>
                <div className="w-full  flex flex-col items-center justify-center border-b border-gray-500 lg:p-6" >
                    {items.length ? items.map((item) => (
                        <CartItem key={item.key} data={item} onDelete={onDelete} onChange={onChange}/>
                    )) 
                    : 
                    (<div className="flex p-6 flex-col justify-center items-center lg:p-2">
                        <p className="text-xl font-light text-gray-600 flex items-center mb-6 lg:text-4xl">No items in cart yet  <FaTimesCircle className="ml-4"/></p>
                        <Link className="mb-6 p-6 bg-gray-100 w-44 h-10 rounded-md flex items-center justify-center text-gray-900 text-md lg:w-64 lg:h-16 lg:text-xl" to="/shop">Go shopping <FaShoppingBag className="ml-4"/></Link>
                    </div>)}
                </div>
                <div className="w-full flex items-center justify-center p-6">
                    <button disabled={items.length? false: true} onClick={onBuy} className="w-44 h-10 bg-gray-900 rounded-md text-lg text-gray-100 lg:w-64 lg:h-16 lg:text-xl transform hover:scale-110 duration-300">CheckOut</button>
                </div>
            </div>)
            :
            (<div className="w-4/5 p-4 bg-gray-300 p-6">
                <div className="border-b border-t border-gray-500 p-6 flex items-center justify-center flex-col">
                    <p className="text-3xl text-center lg:text-5xl text-gray-700 font-light mb-10">Thanks for shopping!</p>
                    <button onClick={() => setBougth(false)} className="rounded-md w-44 lg:w-64 h-16 bg-gray-100 text-xl text-gray-900 flex items-center justify-center"><FaArrowLeft className="mr-4"/> Go back</button>
                </div>
            </div>)}
        </div>
    )
}

export default Cart;