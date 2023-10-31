// ! 자바스크립트 개발 환경

// 1. 코드 작성 및 확인
//  VSCode 설치, 구글 크롬 - 개발자도구 (Console창 - 콘솔창) / f12, ctrl + shift + i

// 콘솔 창 출력
// 간단한 코드와 결과값을 알고 싶은 경우 콘솔창 사용
// | 에러 확인

console.log('Hello World!');

alert('Hello World!');

// ! 자바스크립트 표준 스타일

// 자바스크립트 코딩 규칙 = 스타일 가이드(코딩 컨벤션, 코딩 스타일, 표준 스타일)

// 구글, 에어비엔비에서 배포한 것을 기준으로 작성

// ? 1. 코드 들여쓰기
// : 탭(tab)의 경우 시스템 환경 마다 다르게 출력
// : 주로 space로 공백 2칸, 4칸 들여쓰기 권장
// (최근 공백 2칸 주로 사용)
// 설정(ctrl + ,) > 설정 검색 > tab size 설정: 2

//  ? 2. 세미콜론(;)으로 문장 구분
//  : 세미콜론 없이도 실행 가능하지만 반드시 작성 권장
//  : 문장과 문장의 구분(명확하게 표시)
//  : 소스 코드는 한 줄에 한 문장만 사용 권장
console.log('Hello World!');
console.log('Hello World!');

/// ?3. 공백을 사용 (가독성)
//  : 예약어, 연산자, 값 사이에는 공백을 넣어
//  : 소스 코드의 가독성 향상을 권장
let num = 1;
let sum = num + 10;
console.log(sum);

//?4. 주석 작성
//// 해당 주석은 사용하지 않는 주석
/*
  여러 줄 주석 안에 또 다른 주석 x
*/

//? 5. 식별자 규칙
// 변수 수업 이후 진행!