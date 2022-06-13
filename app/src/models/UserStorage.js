"use strict";

class UserStorage{
  static #users = {
    id : ["a1","b1","c1"],
    passwd : ["1234","2345","3456"],
    name : ["A양","B군","C양"],
  };

  static getUsers(...fields){
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    
    return newUsers;
  }
  static getUserInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // => [id, passwd, name]
    const userInfo = userKeys.reduce((newUsers,info)=>{
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});
    return userInfo;
  }
}
 
module.exports = UserStorage;