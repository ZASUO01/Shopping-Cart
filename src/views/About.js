import about from '../images/about.jpg';
const About = () => {
    const style = {
        backgroundImage: `url(${about})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    
    return(
        <div style={style} className="w-full  p-2 mt-40 flex flex-col  items-center justify-center md:mt-28 lg:flex-row md:p-6">
            <div className="w-full p-2 rounded-md flex items-center justify-center md:w-4/5 md:p-6" style={{backgroundColor: 'rgba(0,0,0, 0.9)'}}>
                <div className="w-4/5">
                    <p className="w-full text-center text-3xl text-gray-100 font-light mb-6 md:text-5xl md:text-left">Our store</p>
                    <p className="text-lg text-center text-gray-200 font-light md:text-xl md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, neque vel luctus vestibulum, lorem lacus tristique turpis, sed pulvinar nunc purus eu justo. Nunc rutrum, turpis quis elementum laoreet, nisl erat laoreet risus, in sodales purus mauris ut nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam suscipit, ante id imperdiet blandit, nibh metus cursus neque, vitae rutrum ligula mauris eget massa. Vestibulum quis erat quis urna rutrum accumsan id id diam. Suspendisse blandit nisl sed libero commodo, vitae hendrerit erat interdum. Ut sagittis a velit ut commodo. Etiam faucibus faucibus arcu nec consectetur. Fusce est justo, ullamcorper ac accumsan tincidunt, lacinia ac libero. Nullam vitae tristique neque, non ultricies nulla. Pellentesque rutrum dolor at est imperdiet, ac maximus augue consectetur. Vestibulum vel odio semper, finibus nibh ac, tincidunt felis.</p>
                </div>
                </div>
        </div>
    )
}

export default About;