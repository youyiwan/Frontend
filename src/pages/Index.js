import image from '../images/cover_image.jpg';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Clock({ time }) {
    return (
        <h3>{time}</h3>
    )
}


export default function Index() {
    
    const [time, setTime] = useState(0);

    useEffect(
        () => {
            setTimeout(() => {
                setTime((new Date()).toTimeString())
            }, 1000);
        }
    )
    
    
    
    return (
        <>
            {/* <h2>Temp header</h2> */}
            <div style={{ textAlign: 'center' }}>
            <Clock time={time} />
            </div>
            {/* <div style={{ textAlign: 'center' }}>
                <h2>Internet Banking</h2>
            </div> */}
            <div style={{ textAlign: 'center' }}>
            </div>

            <div style={{ textAlign: 'center' }}>
                 <img src={image} height={'20%'} width={'35%'} alt={'cover image'} />
            </div>
        </>
    );
};

