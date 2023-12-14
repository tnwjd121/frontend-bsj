// B_module.ts에서 정의된 add, subtract 함수를 사용
// : 내보내기 파일의 기능명과 동일하게 사용
import { add, subtract } from "../B_module";
// import 시 중괄호를 제외하는 경우 default 기능임을 자동으로 인식
// : default 기능은 이름을 사용하는 파일에서 임의지정이 가능
import Calc from "../B_module";

console.log(add(5, 3)); //8
console.log(subtract(5, 3)); //2

const calculate = new Calc();
console.log(calculate.add(5, 6)); //11

//? 네임스페이스
// : 논리적으로 그룹화하고, 이름 충돌을 방지하는 방법

// 장점
// - 코드 그룹화
//  : 관련된 기능들을 네임스페이스 안에 그룹화
// - 충돌 방지
//  : 전역 스코프에서의 이름 충동을 예방

// 스코프를 하나 만들어서 이름을 붙이는 것과 같다
namespace MyMath {
  export function add(x: number, y: number): number {
    return x + y;
  }
}

console.log(MyMath.add(4, 8));

//? 모듈 VS 네임스페이스
// 모듈: 파일 단위로 코드를 분리, ES6 모듈 시스템을 따름.
// 네임스페이스: 주로 전역 변수의 오염을 방지하기 위해 사용, 하나의 파일내에서 사용
