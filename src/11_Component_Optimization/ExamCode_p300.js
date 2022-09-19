const array = [1,2,3,4,5];

const nextArrayBad = array; // 배열을 복사하는 것이 아니라 똑같은 배열을 가리킴
nextArrayBad[0] = 100;
console.log(array === nextArrayBad); // 완전히 같은 배열 이기 때문에 true

const nextArrayGood = [...array]; // 배열 내부의 값을 모두 복사
nextArrayGood[0] = 100;
console.log(array === nextArrayGood);