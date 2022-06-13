"use strict";

const output = {
    home : (req,res)=>{
      res.render("home/index");
  },
    login : (req,res)=>{
      res.render("home/login");
  },
};

const users = {
  id : ["a1","b1","c1"],
  passwd : ["1234","2345","3456"],
};

const process = {
  login : (req,res) => {
    const id = req.body.id,
      passwd = req.body.passwd;
    
    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);
      if(users.passwd[idx] === passwd){
        return res.json({
          success : true,
        })
      }
    }

    return res.json({
      success : false,
      msg : "로그인에 실패",
    })
  }
}

module.exports = {
    output,
    process,
};