import React from "react";
import "./Footer.scss"
import PropTypes from "prop-types";



const Footer = (props) => {
    const {link, href, text} = props;
    return (
        <footer className='footer'>
            <span className="footer__copyright">© <a href={href} className="link footer__link">{link}</a> {text}</span>
        </footer>
    )
};

export default Footer;

Footer.propTypes = {
    link: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.string,
};

Footer.defaultProps = {
    link: 'abz.agency',
    href: 'https://abz.agency/',
    text: 'specially for the test task'
};