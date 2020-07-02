// import {UserList} from './Views/UserList';
// import {Collection} from './Models/Collection';
// import {UserProps, User} from './Models/User';

// const users = new Collection('http://localhost:3000/users', 
//     (json:UserProps) => {
//         return User.buildUser(json);
//     }
// );

// users.on('change', () => {
//     const root = document.getElementById('root');
//     if (root) {
//        new UserList(root, users).render;
//     }
// }); 

// users.fetch();





import {User} from './Models/User';
import { UserEdit } from './Views/UserEdit';


const user = User.buildUser({name: 'NewName', age: 9});
const root = document.getElementById('root');
if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render(); 

    console.log(userEdit);
}else {
    throw new Error ('Root element not found')
    
}

//marionette js && Backbone.js