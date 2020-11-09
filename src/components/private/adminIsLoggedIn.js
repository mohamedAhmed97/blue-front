import Cookies from 'universal-cookie';
const cookies = new Cookies();
const adminIsLoggedIn = () => {
    if (cookies.get('adminToken') != null)
        return true;

    return false;
};
export default adminIsLoggedIn;