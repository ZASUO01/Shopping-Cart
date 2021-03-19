import {FaShoppingCart} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Header = ({qtt}) => {
    const [color, setColor] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        setColor(location.pathname === '/' ? '1' : '2');
    },[location])
    
    return(
        <header className={`w-full p-6 font-body absolute top-0 left-0 ${color === '1' ? 'text-gray-200' : 'text-gray-700'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
                <Link to='/' className='font-light text-2xl mb-6 md:text-3xl md:mb-0 lg:text-5xl'>StringMania Shop</Link>
                <div className='flex items-center justify-center'>
                    <div className="flex items-center justify-center md:mr-14">
                        <Link to='/shop' className="text-md mr-10 hover:underline lg:text-xl">Shop</Link>
                        <Link to='/about' className="text-md mr-10 hover:underline lg:text-xl">About Us</Link>
                    </div>
                    <Link className={`border rounded-md flex items-center ${color === '1' ? 'border-gray-200' : 'border-gray-700'}`} to='/cart'>
                        <span className={`w-10 flex justify-center text-xl ${color === '1' ? 'text-gray-900 bg-gray-200' : 'text-gray-200 bg-gray-900'}`}>{qtt}</span>
                        <span className={`w-10 flex justify-center text-xl ${color === '1' ? 'text-gray-200' : 'text-gray-900'}`}><FaShoppingCart/></span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;