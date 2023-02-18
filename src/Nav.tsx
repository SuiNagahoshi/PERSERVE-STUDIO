import './styles/App.scss'

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