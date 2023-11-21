import { Outlet, Link } from "react-router-dom";
import image from '../images/cover_image.jpg';

function Header() {
    return (
        <div style={{textAlign: 'center' }}>
            <h2>Internet Banking</h2>
            <button>
                <Link to='/Transfer'>Transfer</Link>
            </button>
            <button>
                <Link to='/Payment'>Payment</Link>
            </button>
            <button>
                <Link to='/Logout'>Logout</Link>            
            </button>
        </div>
    )
}

function NavMenu() {
    return (
        <div style={{ alignItems: 'center' }}>
        </div>
    )
}

function Content() {
    return (
        <div style={{ width: '90%', float: 'left' }}>
            <Outlet />
        </div>
    )
}


function Footer() {
    return (
        <div style={{ width: '100%', marginTop: '80px', float: 'center', textAlign: 'center' }}>
            <h2>  
                2023 Bank of Asia Ltd
            </h2>
        </div>
    )
}

export default function Layout() {
    return (
        <>
            <div className="row" style={{ width: '100%' }}>
                <Header />
            </div>
            <div className="row" style={{ width: '112%' }}>
                <NavMenu />
                <Content />
            </div>
            <div className="row" style={{ width: '100%' }}>
                <Footer />
            </div>
        </>
    )
};