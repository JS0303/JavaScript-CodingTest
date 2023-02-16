// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
