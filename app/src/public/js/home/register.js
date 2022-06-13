"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  passwd = document.querySelector("#passwd"),
  confirmPasswd = document.querySelector("#confirm-passwd"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", register);

function register(){
  const req = {
    id : id.value,
    name : name.value,
    passwd : passwd.value,
    confirmPasswd : confirmPasswd.value,
  };
  console.log(req);
  console.log(JSON.stringify(req));

  fetch("/register", {
    method : "POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res)=> {
    if(res.success){
      location.href = "/login";
    }else{
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error(new Error("회원가입 중 에러 발생"));
  });
};

