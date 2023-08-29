function test(){ //호이스팅 지원
    console.log('test() 함수 호출됨');
}

let add=function(){ //호이스팅 불가
    console.log('더하기 기능 처리');
}

let minus=function(){
    console.log('빼기 기능 처리');
}