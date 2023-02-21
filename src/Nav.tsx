import { useState } from 'react';
import './styles/App.scss';

export function Nav() {
    return(
        <nav className="gnav anders">
            <ul className="gnav-unit flex">
                <li>
                    <a href="#top">TOP</a>
                </li>
                <li>
                    <a href="#top">WHO WE ARE</a>
                </li>
                <li>
                    <a href="#top">WORKS</a>
                </li>
                <li>
                    <a href="#top">CREATER</a>
                </li>
                <li>
                    <a href="#top">NEWS</a>
                </li>
                <li>
                    <a href="#top">CONTACT</a>
                </li>
            </ul>
        </nav>
    );
}



export function Menu() {
    const [active, setActive] = useState(false);
    const classToggle = () => {
        setActive(!active)
    }
    return(
        <>
            <div id="menu-icon">
                <button onClick={classToggle} className={active ? "hamburger hamburger--arrow-r is-active" : "hamburger hamburger--arrow"}>
                    <span className="humburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div id="menu" className={active ? "open" : ""}>
                <div className="menu-wrapper">
                    <ul className="anders">
                        <li>
                            <a href="#top" className="aligin-r">TOP</a>
                        </li>
                        <li>
                            <a href="#top">WHO WE ARE</a>
                        </li>
                        <li>
                            <a href="#top">WORKS</a>
                        </li>
                        <li>
                            <a href="#top">CREATER</a>
                        </li>
                        <li>
                            <a href="#top">NEWS</a>
                        </li>
                        <li>
                            <a href="#top">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    );
}