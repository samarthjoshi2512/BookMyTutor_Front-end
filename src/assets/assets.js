import schedule_img from './schedule_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpeg'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import Mathematics from './Mathematics.webp'
import Socialscience from './Socialscience.png'
import Hindi from './Hindi.png'
import Kannada from './Kannada.png'
import English from './English.png'
import Science from './Science.png'
import teac1 from './teac1.jpg'
import teac2 from './teac2.jpg'
import teac3 from './teac3.jpg'
import teac4 from './teac4.jpg'
import teac5 from './teac5.jpg'
import teac6 from './teac6.jpg'
import teac7 from './teac7.jpg'
import teac8 from './teac8.jpg'
import teac9 from './teac9.jpg'
import teac10 from './teac10.jpg'
import teac11 from './teac11.jpg'
import teac12 from './teac12.jpg'
import teac13 from './teac13.jpg'
import teac14 from './teac14.jpg'
import teac15 from './teac15.jpg'



export const assets = {
    schedule_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    Mathematics,
    Socialscience,
    Hindi,
    Kannada,
    English,
    Science,
    teac1,
    teac2,
    teac3,
    teac4,
    teac5,
    teac6,
    teac7,
    teac8,
    teac9,
    teac10,
    teac11,
    teac12,
    teac13,
    teac14,
    teac15,
}

export const subjectsData = [
    {
        subject: 'Mathematics',
        image: Mathematics
    },
    {
        subject: 'Social Science',
        image: Socialscience
    },
    {
        subject: 'Science',
        image: Science
    },
    {
        subject: 'Kannada',
        image: Kannada
    },
    {
        subject: 'Hindi',
        image: Hindi
    },
    {
        subject: 'English',
        image: English
    },
]

export const teachers = [
    {
        _id: 'teac1',
        name: 'Richard James',
        image: teac1,
        subject: 'Mathematics',
        degree: 'MSc ',
        experience: '4 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac2',
        name: 'Emily Larson',
        image: teac2,
        subject: 'Social Science',
        degree: 'BEd',
        experience: '3 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac3',
        name: 'Sarah Patel',
        image: teac3,
        subject: 'Science',
        degree: 'BEd',
        experience: '1 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac4',
        name: 'Christopher Lee',
        image: teac4,
        subject: 'Kannada',
        degree: 'BEd',
        experience: '2 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac5',
        name: 'Jennifer Garcia',
        image: teac5,
        subject: 'Hindi',
        degree: 'MSc',
        experience: '4 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac6',
        name: 'Andrew Williams',
        image: teac6,
        subject: 'English',
        degree: 'Msc',
        experience: '4 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac7',
        name: 'Christopher Davis',
        image: teac7,
        subject: 'Mathematics',
        degree: 'Phd',
        experience: '4 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac8',
        name: 'Timothy White',
        image: teac8,
        subject: 'Social Science',
        degree: 'Msc',
        experience: '3 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac9',
        name: 'Ava Mitchell',
        image: teac9,
        subject: 'Science',
        degree: 'Msc',
        experience: '1 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac10',
        name: 'Jeffrey King',
        image: teac10,
        subject: 'Kannada',
        degree: 'Msc',
        experience: '2 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac11',
        name: 'Alexa',
        image: teac11,
        subject: 'Hindi',
        degree: 'Msc',
        experience: '4 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac12',
        name: 'Patrick Harris',
        image: teac12,
        subject: 'English',
        degree: 'Msc',
        experience: '4 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac13',
        name: 'Chloe Evans',
        image: teac13,
        subject: 'Mathematics',
        degree: 'BEd',
        experience: '4 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac14',
        name: 'Ryan Martinez',
        image: teac14,
        subject: 'Social Science',
        degree: 'Msc',
        experience: '3 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'teac15',
        name: 'Amelia Hill',
        image: teac15,
        subject: 'Science',
        degree: 'BEd',
        experience: '1 Years',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum ad consequuntur maiores impedit porro, quod voluptatibus rerum praesentium id repellat repellendus adipisci facilis voluptatem delectus atque facere iste magnam.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]