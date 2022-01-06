import React from 'react'
import {Link} from 'react-router-dom'


function Footer() {
    return (
        <footer className="mt-6 border-primary border-t-2 border-b-2 pb-6">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full px-3 text-center md:text-left" >
                    <div className="">
                        <Link to="/" className="ml-3 text-4xl text-white font-bold">The2ndage<span className="text-primary"></span></Link>
                    </div>
                    <p className="text-white ml-3 mt-1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="w-full pt-6 text-center flex justify-center">
                    <ul className="text-white">
                        <li> <Link className="hover:text-primary  transition duration-500 " to="/"> Home </Link> </li>
                        <li> <Link className="hover:text-primary  transition duration-500 " to="/shop">  Shop</Link> </li>
                        <li> <Link className="hover:text-primary  transition duration-500 " to="/contact">  Contact</Link> </li>
                    </ul>
                </div>
                <div className="w-full pt-6 text-center md:text-right flex md:flex-row justify-center">
                    <ul className="text-white">
                        <li><Link className="hover:text-primary transition duration-500 " to="#">  mailto:contact@the2ndage.com <i className="fa fa-envelope" aria-hidden="true"></i></Link></li>
                  
                        <li><a className="hover:text-primary  transition duration-500 " href="https://github.com/mrzaid" target="_blank" >  mrzaidahmed <i className="fa fa-github" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
