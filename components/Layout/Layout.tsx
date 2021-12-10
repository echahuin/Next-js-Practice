import React from 'react'
import NavBar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <NavBar />
                {children}
            {/* <footer>this is mi footer</footer> // crear un componente footer */}
            {/* <Footer /> */}
        </>
    )
}

export default Layout
