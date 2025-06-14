import { Navbar }from "./Navbar.jsx"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='flex px-[10vh] justify-center items-center md:gap-8 lg:gap-[18vh] relative'>
            <div className='w-[300px] md:w-[390px] lg:w-[480px] min-h-[150px] flex flex-col justify-center items-center'>
                <Link to="/">
                    <img
                        src={`${import.meta.env.BASE_URL}images/largelogo.png`}
                        className="h-auto max-w-[300px] md:max-w-[390px] lg:max-w-[480px] object-contain"
                        alt="APTSMS logo"
                    />
                </Link>
            </div>
            <Navbar />
        </div>
    )
}

export default Header;