console.log('number' + 3 + 3);          //  number33 Цифри 3 перетворились на стрінг
console.log(5 && "qwerty");             //  5qwerty 
console.log(+'40' + +'2' + "hillel");   //  42hillel 40+2=42 а потім перетворення в стрінг + hillel
console.log('10' - 5 === 6);            //  False різний тип данних 
console.log(true + false);              // ? я думав буде True але вивело 1
console.log('4px' - 3);                 //  NAN
console.log('4' - 3);                   //  1
console.log('6' + 3 ** 0);              // ? Я Думав що 3**0=0 і виведе 60 АЛЕ 3**0=1 і виведе 61 цього я не поняв)
console.log(12 / '6');                  //  2
console.log('10' + (5 === 6));          //  '10' + false = 10false
console.log(null == '');                // ? Я думав буде True але вивело False
console.log(3 ** (9 / 3));              //  27 степень
console.log(!!'false' == !!'true');     //  true
console.log(0 || '0' && 1);             // ?
console.log((+null == false) < 1);      // ?
console.log(false && true || true);     //  True
console.log(false && (false || true));  //  False 
console.log((+null == false) < 1 ** 5); //  False , true не меньше 1
