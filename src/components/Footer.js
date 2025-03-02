import React from "react";
import './Footer.css'
function Footer(){
    return(
        <footer>
                <section className="footer-content">
                    <div><h1>Legal</h1>
                     <li>
                        <ul>Terms of service</ul>
                        <ul>Security</ul>
                     </li>
                    </div>
                    <div><h1>Connect</h1>
                    <li>
                        <ul><a href="https://www.facebook.com/">facebook</a></ul>
                        <ul><a href="http://www.twitter.com/">Twitter</a></ul>
                    </li>
                    </div>
                </section>
            <p>"Fun fact: React was created by facebook!"</p>
            <p>©{new Date().getFullYear()}My Blog. All rights reserved</p>
        </footer>
    );
}
export default Footer;