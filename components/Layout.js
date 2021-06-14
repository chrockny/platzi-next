import React from 'react';
import Navbar from './Navbar';


const Layout = ({children}) =>{
    return(
        <div>
            <Navbar/>
            {children}
            <footer className="container">
                Este es un footer
            </footer>

            <style jsx>{`
            .container{
                background:salmon;

            }
            `}</style>
        </div>
    )
}

export default Layout;