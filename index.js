(function() {

  window.addEventListener('load',draw);

  function draw() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");


    for(let i = 0; i < 5 ; ++i){
      context.fillStyle = `rgb(${255 - (i*30)},0,0)`;
      context.fillRect(i * 60 + 10, 10, 50 , 50);
    }

 // ${} 안에 있는거는 자바스크립트 부문으로 취급한다.

    for (let i = 0; i < 5; i++) {
      context.fillStyle = `rgb(0, ${255 - (i * 30)}, 0)`;
      context.beginPath();

      context.moveTo(i * 60 + 25 + 10 , 70);
      context.lineTo(i * 60 + 10, 120);
      context.lineTo((i + 1) * 60, 120);
      context.fill();
    }


    for (let i = 0; i < 5; i++) {
      context.strokeStyle = `rgb(0, 0, ${255 - (i * 30)})`;
      context.lineWidth = i + 1;
      context.beginPath();
      context.arc(i * 60 + 25 + 10 , 155 , 25 , 0 ,Math.PI * (i + 1) * 0.3);
      context.stroke();
    }



  }
})();


// let slime = new Object();
// slime.hp = 10;
// slime.name = "MySlime"

// let slime = {
//   hp: 10,
//   name: "MySlime"
// }

// 기본 오브젝트 Object , Array , Srting , Number , Boolean , Date, Math , Function


// let slime = new Slime();
//
// console.log(slime.hp);



























//let arr = new Array(1,2,3);

//let arr = new Array(10);    ==    let arr = [];    arr.length = 10;

//new ~~~~()    <=  인스턴스
//arr.prototype

// let arr = [1,2,3]
// let arr2 = [4,5,6]
//
// let filtered = arr.filter(obj => obj > 1);
// console.log(filtered);
//
// let mapped = arr.map(n => n*n)
// console.log(mapped);
//
// console.log(arr.indexOf(2));
// console.log(arr.find(n => n===2));










// var numbers = [1,2,3,4,5,6,7,8,9];
//
// for (var i in numbers) {
//   for (var j in numbers) {
//     console.log(numbers[i]+"*"+numbers[j]+"="+numbers[i]*numbers[j])
//   }
// }
//
//
//
//
//
// for (var x of numbers) {
//   for (var y of numbers) {
//     console.log(`${x} x ${y} = ${x * y}`)
//   }
// }

// html`
//     여기 안에 코드는 html코드
// <html>
// `

// console.log("5"+1);
// console.log("5"-1);

/*
false
0
NULL // 초기화되지 않은 객체
undefined // 정의되지 않은 객체
NaN // Not - a - Numer  / Infinity
""
*/
