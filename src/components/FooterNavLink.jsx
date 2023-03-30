const { Link } = require("react-router-dom")

const FooterNavLink = ({ text }) => {
    return (
        <li>
            <Link to="#">
                <p>{ text }</p>
            </Link>
        </li>
    )
}

export default FooterNavLink