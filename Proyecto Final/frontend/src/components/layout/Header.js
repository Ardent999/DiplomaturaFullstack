import '../../styles/components/layout/Header.css'

import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <header>
            <div className="holder" id="jsc">
                <Link to="/"><img src="img/logo.jpg" width="100" alt="Logo" id="jsci" /></Link>
                <Link to="/">
                    <h1 className="introscroll" id="jsch">Research Lab</h1>
                </Link>
            </div>
        </header>

    );
}

// window.onscroll = function () { scrollFunction() };

//         function scrollFunction() {
//             if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//                 document.getElementById("jsc").style.fontSize = "0.75em";
//                 document.getElementById("jsch").style.height = "7em";
//                 document.getElementById("jsc").style.height = "7em";
//                 document.getElementById("jsch").style.bottom = "25px";
//                 document.getElementById("jsci").style.width = "75px";
//                 document.getElementById("jscn").style.top = "6.5em";
//                 document.getElementById("jscn").style.bottom = "-2em";

//             } else {
//                 document.getElementById("jsc").style.fontSize = "1em";
//                 document.getElementById("jsci").style.width = "100px";
//                 document.getElementById("jsch").style.bottom = "40px";
//             }
//         }


export default Header;