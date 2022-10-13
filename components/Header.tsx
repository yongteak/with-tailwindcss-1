import {
    MagnifyingGlassIcon, BellIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'


function Header() {

    const [isScrolled, serIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                serIsScrolled(true);
            } else {
                serIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[])

    return (
        <header className={`${isScrolled && 'bg-red-500'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    // src="https://rb.gy/ulxxee"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    width={100}
                    height={100}
                    className="object-contain cursor-pointer"
                />


                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">Tv Show</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>

            <div className='flex items-center space-x-4 text-sm font-light'>
                <MagnifyingGlassIcon className="hidden w-6 h-6 sm:inline" />
                <p className='hidden lg:inline'>Kids</p>
                <BellIcon className='w-6 h-6' />
                <Link href="/account">
                    <img
                        // src="https://rb.gy/g1pwyx"
                        src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                        alt=""
                        className="rounded cursor-pointer"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header