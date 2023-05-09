import { Outlet, Link } from "react-router-dom";
import "../styles/LayoutStyle.css"

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Strona główna</Link>
                    </li>
                    <li>
                        <Link to="/podpis">Podpisz dokument</Link>
                    </li>
                    <li>
                        <Link to="/weryfikacja">Zweryfikuj podpis</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
