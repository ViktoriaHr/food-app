import './Footer.css' 

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="socials-c">
                    <div class="logo-fitness"><a href="/">Fitness</a></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div class="social-media">
                        <ul>
                            <li>
                                <p>Follow Us:</p>
                            </li>
                            <li><a href="#" class="social-logo fb">Facebook</a></li>
                            <li><a href="#" class="social-logo tw">Twitter</a></li>
                            <li><a href="#" class="social-logo in">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div class="blogs">
                    <p>Blogs</p>
                    <div class="blog first-blog">
                        <img src="css/images/blog-img-1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing</p>
                    </div>
                    <div class="blog second-blog">
                        <img src="css/images/blog-img-2.png" alt="" />
                        <p>Consectetur adipiscing elit,
                            sed do eiusmod tempor</p>
                    </div>
                    <div class="blog third-blog">
                        <img src="css/images/blog-img-3.png" alt="" />
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing</p>
                    </div>
                </div>
            </div>
            <p class="copy">&copy; 2021 Copyrights</p>
    </footer>
    )
}

export default Footer;