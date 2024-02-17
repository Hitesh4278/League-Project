import React from 'react';
import { Carousel } from 'antd';

export const Home = () => {
    const contentStyle: React.CSSProperties = {
        height: '95vh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>
            <Carousel autoplay>
                <div>
                   <img src="https://picsum.photos/500/1000" style={{width:'100%' , height:'auto' ,backgroundSize:'100%'}} alt="" />
                </div>
            </Carousel>
        </>
    );
};
