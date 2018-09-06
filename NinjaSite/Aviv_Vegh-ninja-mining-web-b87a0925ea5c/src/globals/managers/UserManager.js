import axios from 'axios'

class UserManager {
    constructor() {
        password = "1";
        email = "";
    }

    login(name, pass) {
        email = name;
        password = pass;
        console.log(pass)

        axios.post('https://stormy-mountain-48556.herokuapp.com/auth/login', {
            email: email,
            password: password
        }).then((response) => {
            return axios.get('https://stormy-mountain-48556.herokuapp.com/api/user/'+ email)
        }).then((response) => {
            console.log('Response', response);
        });
    }
}

var password = "1";
var email = ""
const instance = new UserManager();
Object.freeze(instance);

export default instance;