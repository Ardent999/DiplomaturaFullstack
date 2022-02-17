import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <header>
            <div className="holder" id="jsc">
                <Link to="/"><img src="img/logo.jpg" width="100" alt="Logo" id="jsci" /></Link>
                <Link to="/">
                    <h1 class="introscroll" id="jsch">Research Lab</h1>
                </Link>
            </div>
        </header>

    );
}

export default Header;