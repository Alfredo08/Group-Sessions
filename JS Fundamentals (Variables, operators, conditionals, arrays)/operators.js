/*
    1) ()
    2) !
    3) * / %
    4) + -
    5) > < >= <= === !==
    6) || &&
    7) ++ -- 
    8) = += -=
*/
// weather === "rain" && haveACar === true
// true && true 
//     true

let result = !((4 * 5 - 7) / 3 >= 10)
//            !((20 - 7)) / >= 10)
//              !(13 / 3 >= 10)
//               !(4.33 >= 10)
//                 !false
//                  true

console.log(result);

/*
    OR - ||
    true  || true  => true
    true  || false => true
    false || true  => true
    false || false => false
    
    AND - &&
    true  && true  => true
    true  && false => false
    false && true  => false
    false && false => false
*/