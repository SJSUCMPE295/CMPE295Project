import {useHistory} from 'react-router-dom';

const session = () => {
    const history = useHistory();
    if(localStorage.getItem('token') != '') {
        history.push('/app/dashboard', { replace: true });
    } else if(localStorage.getItem('token') == undefined) {
        history.push('/login', { replace: true });
    }
}

export default session;