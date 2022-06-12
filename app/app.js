// const http = require("http"); // 내장모듈이라 npm으로 다운받을 필요 x
// const app = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});

//     if(req.url === '/'){// 한글 다 깨짐. express를 쓰는 이유...글고 코드가 지저분함
//         res.end("여기는 루트 입니다.");
//     }else if(req.url === "/login"){
//         res.end("여기는 로그인 화면 입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버.");
// });
//-----------------------------------------------------------------
"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home")// ./는 현재 폴더

//npm install express -s 로 설치
//npm install ejs -s 로 설치
//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //미들웨어를 등록하는 메서드.

module.exports = app;

//npm init 으로 엔터
