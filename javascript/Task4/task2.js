new Promise(function(resolve, reject) {
    // должно через 3 секунды передать дальше значение - 10
    setTimeout(() => resolve(10), 3000);
  }).then((result) => {
    // должно вывести в console значение полученное и передать дальше
    // увеличенное на 2
    console.log(result);
    return result += 2;
  }).then((result) => {
    // должно вывести в console значение полученное и передать дальше
    // увеличенное на 2 через 2 секунды
    console.log(result);
      return new Promise((resolve) => {
        setTimeout(() =>  { 
            result += 2;
            resolve(result);
        }, 2000);
      });
  }).then((result) => {
    // должно вывести конечный результат
    console.log(result);
  });
  