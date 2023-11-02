//! JavaScript (ES6) code snippet
// 코드 스니펫
// 추가 내용 적어야됨


// 연산자(Operator)
// 산술 / 할당 / 비교 / 논리

//! 산술 연산자
// : 수학적 계산을 수행하는데 사용
// 덧셈(+)
// 뺄셈(-)
// 곱셈(*)
// 나눗셈-몫(/)
// 나눗셈-나머지(%)
// 증가(++)
// 감소(--)

let x = 10;
let y = 3;

console.log(x + y); //13
console.log(x - y); //7
console.log(x * y); //30
console.log(x / y); //3.33333
console.log(x % y); //1 반올림 됨

console.log(x++); //10
console.log(x);//11

console.log(--x); //10

// 증감 연산자
// : 숫자에 직접 적용 x
console.log(3 - 1);
// console.log(3++); --SyntaxError(문법적 오류)

// 후위 연산자
// : x++(변수 뒤에 연산자를 사용)
// : 해당 브라우저 식에서 바로 값을 변화 x
// : 그 다음 해당 변수를 불렀을 때 값을 계산

// 전위 연산자
//  : --x (변수 앞에 연산자를 사용)
//  : 브라우저가 변수를 먼저 증가/감소 시키고 값을 변환

//! 할당(대입) 연산자
// : 변수에 값을 할당하는데 사용
// 할당(=)
// 더하기 후 할당 (+=)
// 빼기 후 할당(-=)
// 곱하기 후 할당(*=)
// 나누기 후 할당(/=)
// 나머지 후 할당(%=)

let a = 10; // 10을 a에 할당

a += 5; // a = a + 5; >> 15 = 10 + 5;
console.log(a);

a -= 2; //a = a - 2;
console.log(a);

a*= 2; // a = a *2;
console.log(a);

a/= 2; // a = a /2;
console.log(a);

//! 비교 연산자
// : 두 값을 비교하고, 그 결과를 boolean의 값으로 반환
// 동등(==), 부등(!=)
// : 값이 동일하지 테스트(데이터 유형 고려x)

// 일치(===), 불일치(!==)
// : 엄격한 값과 값의 데이터 유형의 완전한 동일성을 모두 테스트

// 크다(>), 작다(<)
// 크거나 같다(>=), 크거나 작다(<=)

let num1 = 10;
let num2 = '10';
console.log(num1==num2); //true (타입x)
console.log(num1!=num2); //false (타입x)
console.log(num1===num2); //fasle(타입o)
console.log(num1!==num2); //true (타입o)

console.log(num1 > num2); // false
console.log(num1 < num2); // false
console.log(num1 >= num2); // true (타입x)
console.log(num1 <= num2); // ture (타입x)

//! 논리 연산자
// : boolean 값을 연산하는데 사용 
// and(논리곱): && 
// -false 값이 하나라도 있으면 무조건 false
// or(논리합): ||
// -false 값이 하나라도 있으면 무조건 true
// not(부정논리): !

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); //fasle
console.log(bool1 || bool2); //true
console.log(!bool1); //fasle
console.log(!bool2); //true