import dinkys11 from '../images/dinkys11.png';
import ibanezRg from '../images/ibanez-rg.png';
import ibanezMk from '../images/ibanez-mk.png'
import ibanezSa from '../images/ibanez-sa.png';
import gibsonEp from '../images/gibson-ep.png';
import gibsonSg from '../images/gibson-sg.png';
import gibsonLp from '../images/gibson-lp.png';

import orangemTm from '../images/orange-tm.png';
import orangeRt from '../images/orange-rt.png';
import marshalSc from '../images/marshal-sc.png';

import dadario9 from '../images/dadario-9.jpg';
import dadario10 from '../images/dadario-10.jpg';

const products = [
    {
        type:'guitars',
        key:1,
        img:dinkys11,
        name:'Dinky Js11 503 - Gloss Black',
        fabricant: 'Jackson',
        price: '1520.00',
        description: 'Harkening back to the early ‘90s when import Jackson® guitars were manufactured exclusively in Japan, we introduce the all-new Jackson MJ Series — an exciting and innovative collection of instruments attentively crafted in Japan. The MJ Series combines Jackson’s world-renowned legacy of designing high-performance instruments with an assortment of top-tier features at a competitive price point.'
    },
    {
        type:'guitars',
        key:2,
        img:ibanezRg,
        name:'RG J.Custom RG8570Z',
        fabricant: 'Ibanez',
        price: '2500.99',
        description: 'Ibanez j.custom guitars are manufactured by an elite group of highly skilled luthiers trained in producing instruments of uncompromised quality. The j.custom designation represents every advance in design and technology Ibanez has developed over the decades: the best woods, neck, fret treatments, in-demand pickup, and top-quality hardware. Each is masterfully crafted to the highest standards to ensure unparalleled sound, maximum playability and exquisite beauty.'
    },
    {
        type:'guitars',
        key:3,
        img:ibanezMk,
        name:'Mikro GRG M21',
        fabricant: 'Ibanez',
        price: '550.99',
        description: 'GRG miKro puts out sound way beyond its size. Perfect for young rockers on the way up or seasoned road warriors on the tour bus. The Maple neck provides stability and bright tonal character. Jatoba has a reddish brown color which produces a rich mid range with a crisp high end.'
        
    },
    {
        type:'guitars',
        key:4,
        img:ibanezSa,
        name:'SA Standard SA360NQM',
        fabricant: 'Ibanez',
        price: '1250.00',
        description: 'Ibanez builds guitars for players of all levels—from beginners to the most demanding masters of the instrument. Regardless of price, Ibanez always strives to offer the absolute best sound, style, and playability in its class. The Standard series incorporates all the staples the Ibanez brand is famous for, such as fast necks, floating trems, and high-octane distortion in a package that is available and accessible to most players'
        
    },
    {
        type:'guitars',
        key:5,
        img:gibsonEp,
        name:'Explorer',
        fabricant: 'Gibson',
        price: '2299.99',
        description: 'Introduced along-side the Gibson Flying V in 1958, the Gibson Explorer traveled where no man had gone before and past every guitar design that came before it. Over 60 years later the Gibson Explorer is utilized by artists of all genres making it one of the true classics of the guitar world. The Antique Natural finish, all mahogany set-neck construction, rosewood fingerboard and slim taper neck provide incredible classic looks, sound and playability. A special set of calibrated Burstbucker 2 (neck) and Burstbucker 3 (bridge) pickups provide that perfect mix of volume, tone and power.'
        
    },
    {
        type:'guitars',
        key:6,
        img:gibsonLp,
        name:'Les Paul Modern',
        fabricant: 'Gibson',
        price: '2799.99',
        description: 'The new Gibson Les Paul™ Modern incorporates many contemporary updates that players have embraced such as a lighter-weight body and innovative SlimTaper™ neck with asymmetrical profile. The Modern fingerboard is crafted with genuine ebony and a compound radius for lower, and cleaner action. The neck/body joint features the new Modern contoured heel for effortless access to the highest frets as well as maximum sustain and stability. Hardware upgrades include Grover® locking Rotomatic® tuners, clear top hat knobs and BurstBucker Pro™ and BurstBucker Pro + pickups.'
        
    },
    {
        type:'guitars',
        key:7,
        img:gibsonSg,
        name:'SG Standard - Heritage Cherry',
        fabricant: 'Gibson',
        price: '1499.00',
        description: 'The Gibson SG Standard rocks the classic looks and features associated with the late 60\'s style SG models sought after by many. A rounded profile mahogany neck, bound rosewood fingerboard, long tenon 19th fret neck joint, and a solid mahogany body provide the backbone for singing sustain. The 490R and 490T Alnico II pickups provide the power to drive. A black, 5-ply, full-face pickguard set this SG Standard apart from others... a truly versatile classic.'
        
    },
    {
        type:'amplifiers',
        key:8,
        img:orangemTm,
        name:'TREMLORD 30',
        fabricant: 'Orange',
        price: '1299.00',
        description: 'The TremLord 30 is our very British take on a 1950s-style guitar amplifier. With valve Tremolo, valve Reverb and a quartet of EL84s pushing 30 Watts, it’s every retro sound you need in a compact 1×12 package. The beautifully simple, non-master volume design is straight out of the golden age of Rock ‘n’ Roll but 15W, 2W and 1W settings allow that coveted “sweet spot” to be enjoyed at more civilised volumes.'
    },
    {
        type:'amplifiers',
        key:9,
        img:orangeRt,
        name: '25RT 1X10',
        fabricant: 'Orange',
        price:'459.00',
        description:'The fully-loaded Orange Crush 35RT brings you gut-punching tones with highly responsive overdrive and mind-blowing levels of detailed saturation. Featuring two footswitchable channels, the Crush 35RT\'s 4-stage preamp provides you with enormous, wide-ranging tones that will take you back to the heady days of no-nonsense, old school analog guitar amplifiers. You also get Orange\'s innovative CabSim circuit that faithfully emulates the muscle of an Orange 4 x 12" cabinet through the Crush 35RT\'s headphone/line output, as well as an onboard tuner and reverb'
    },
    {
        type:'amplifiers',
        key:10,
        img:marshalSc,
        name: 'SC20C',
        fabricant: 'Marshall',
        price:'720.00',
        description:'The Studio Classic SC20C combo effortlessly replicates that definitive Marshall JCM800 2203 roar, all packed into a portable 20W for today’s player. Originally introduced in the 80’s, the JCM800 2203 established itself by uniting iconic Marshall design with that genre defining heavy rock crunch. Already played by guitar heroes the world over, but now remastered for the modern day with power reduction from 20W to 5W, letting you take your tone to the home.'
    },
    {
        type:'string packs',
        key:11,
        img:dadario9,
        name: 'XL 9|40',
        width: 'w-3/5',
        fabricant: 'Daddario',
        price:'5.00',
        description:'EXL120 is a super light gauge set with maximum flexibility and biting tone. XL Nickel Wound electric guitar strings, long recognized as the industry standard, are ideal for a wide range of musical styles.'
    },
    {
        type:'string packs',
        key:12,
        img:dadario10,
        width: 'w-3/5',
        name: 'XL 10|46',
        fabricant: 'Daddario',
        price:'5.00',
        description:'EXL120 is a super light gauge set with maximum flexibility and biting tone. XL Nickel Wound electric guitar strings, long recognized as the industry standard, are ideal for a wide range of musical styles.'
    },

]



export default products;