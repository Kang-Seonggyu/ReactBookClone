function increase (number) {
    const promise = new Promise((resolve, reject) =>{
        //resolve 는 성공 , reject는 실패
        setTimeout(() => {
            const result = number + 10;
            if (result > 50) {
                //50보다 높으면 에러 발생
                const e = new Error('Number is Too Big');
                return reject(e);
            }
            resolve(result); // number 값에 +10 후 성공처리
        }, 1000);
    });
    return promise;
}

increase(0)
    .then(number => {
        // Promise에서 resolve된 값은 .then 을 통해 받아 올 수 있음.
        console.log(number);
        return increase(number); // Promise를 리턴하면
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .catch(e => {
        // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음.
        console.log(e);
    });
