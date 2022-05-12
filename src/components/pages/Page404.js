import Error from '../../helpers/error';
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <Error/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '20px', 'marginTop': '30px'}} to="/">&#8592; Back to main page</Link>
        </div>
    )
}

export default Page404;
