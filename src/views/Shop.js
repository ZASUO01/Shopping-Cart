import {useState, useEffect} from 'react';
import Item from '../components/Item';
import products from '../components/data';

const Shop = () => {
    const [type, setType] = useState(null);
    const [items, setItems] = useState([]);
    
    const fetchType = (e) => {
        const str = e.target.textContent.toLowerCase();
        setType(str);
    }

    useEffect(() => {
        if(type && type !== 'all'){
            const typeArr = products.filter((product) => product.type === type);
            setItems(typeArr);
        }else{
            setItems(products);
            setType(null);
        }
    }, [type])

    return(
        <div className="w-full mt-40 p-6 flex flex-col items-center justify-center md:flex-row md:items-start md:mt-28">
            <aside className="w-4/5 flex flex-col items-center justify-center md:w-96">
                <h1 className="w-full text-center text-3xl text-gray-900 font-semibold mb-10 md:text-left">Shop: {type? type : 'All'}</h1>
                <ul className="w-full flex flex-col items-center justify-center text-2xl text-gray-700 md:items-start">
                    <p className="cursor-pointer transform hover:scale-110 duration-300" onClick={(e) => fetchType(e)} >All</p>
                    <p className="cursor-pointer transform hover:scale-110 duration-300" onClick={(e) => fetchType(e)} >Guitars</p>
                    <p className="cursor-pointer transform hover:scale-110 duration-300" onClick={(e) => fetchType(e)} >Amplifiers</p>
                    <p className="cursor-pointer transform hover:scale-110 duration-300" onClick={(e) => fetchType(e)} >String packs</p>
                </ul>
            </aside>
            <div className="py-2 px-20 grid grid-cols-1 gap-20 lg:grid-cols-2">
               {items.map((item) => (
                   <Item  key={item.key} data={item}/>
               ))}
            </div>
        </div>
    )
}

export default Shop;