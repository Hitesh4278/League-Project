import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import { Navbar } from '../components/Navbar';
export const FollowPage = () => {
    const navbarHeight = 50
    const backgroundStyle = {
        height: `calc(100vh - ${navbarHeight}px)`,
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:'url("https://img.freepik.com/free-vector/gradient-red-particles-background_23-2148331056.jpg?w=1060&t=st=1708235102~exp=1708235702~hmac=8edfb7fa9a2d30d0a5df1ec47d911df9ff107aeda8ae272716fc6c6ad7cec5d1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <>
            <Navbar />
        <div style={backgroundStyle}>
            <div style={{ display: 'flex', justifyContent: 'center' , marginTop:'30px' , gap:'50px', overflow: 'hidden'}}>
                <InstagramEmbed url="https://www.instagram.com/p/C3c2Db7tKop/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C3c2Db7tKop/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C3c2Db7tKop/" width={328} />
            </div>
        </div>

        </>
    )
}
