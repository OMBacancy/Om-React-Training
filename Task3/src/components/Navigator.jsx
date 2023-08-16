import {Link} from 'react-router-dom';

export default function Navigator() {
    return <nav style={{justifyContent:"space-between"}}>
        <Link to="/">Home</Link><br/>
        <Link to="/add-user">Add User</Link><br/>
        <Link to="/user">User</Link>

    </nav>
}