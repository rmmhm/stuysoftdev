// Team lauma v2 :: Pak Ming Lau, Ryan Ma
// SoftDev pd1
// K23 -- JS Functionality
// 2021-04-19
// --------------------------------------------------

var gcd = (a, b) => {
    var small;
    var gcd;
    if(b > a) {
        small = a;
    }else {
        small = b;
    }
    for(var i = 1; i <= small; i++) {
        if((a % i == 0) && (b % i == 0)) {
            gcd = i
        }
    }
    return gcd
}

var randomStudent = (list) => {
    return list[Math.floor(Math.random() * list.length)]
}