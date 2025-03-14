//<li><img src="/cricketlogo.png" alt="cricket Logo" width="30" height="30"></img></li>
import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header>
            <h1>My Awesome Blog Portal</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/blog-posts'>Blog Posts</Link></li>
                    <li><Link to='/fetch-demo'>FetchDemo</Link></li>
                    <li><button className="login-button" onClick={() =>alert("not yet designed")}>login</button></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;