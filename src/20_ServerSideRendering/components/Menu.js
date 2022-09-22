import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/red">Red</Link>
            </li>
            <li>
                <Link to="/Blue">BLue</Link>
            </li>
        </ul>
    )
}

export default Menu;