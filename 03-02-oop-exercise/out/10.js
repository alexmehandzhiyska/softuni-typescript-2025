"use strict";
class User {
    _username;
    constructor(username) {
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length < 3) {
            throw new Error('Username must be minimum 3 characters!');
        }
        this._username = newUsername;
    }
}
const user1 = new User('pen4o');
console.log(user1.username);
user1.username = 'Min4o';
//# sourceMappingURL=10.js.map