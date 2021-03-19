import background from '../images/background.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="w-full h-screen" style={homeStyle}>
            <div className="absolute w-full top-40 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-100 font-semibold mb-6">High quality guitars for guitar heros!</h1>
                <p className="text-xl sm:text-2xl text-gray-200 mb-10">Special offers on digital pedals this month.</p>
                <Link to='/shop'  className="px-10 py-4 text-lg  font-semibold text-gray-900 bg-gray-100 hover:opacity-60 duration-300">SHOP NOW</Link>
            </div>
        </div>
    )
}

const homeStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

export default Home;