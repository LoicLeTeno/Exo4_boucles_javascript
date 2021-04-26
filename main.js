// ## EXO 1
// let compteur = 5;

// for (let i = 1; i <= compteur; i++) {
//     console.log(`Loïc, tour ${i}`);
// }


// ## EXO 2
// let array = ["Mihai", "Tania", "Dr. Hashimoto"];

// for (let i = 0; i < array.length; i++) {
//     console.log(`Bonjour ${array[i]}`);
// }


// ## EXO 3 (mélange)
// # 1
// let number = prompt("Donnez un nombre maximal");

// for (let i = 0; i <= number; i+=2) {
//     console.log(`${i}`);
// }

// # 2
// let number = prompt("Donnez un nombre maximal");

// for (let i = 0; i <= number; i++) {
//     if (i % 2 == 0 && i != 0) {
//         console.log(`Le nombre ${i} est pair`);
//     } else {
//         console.log(`${i}`);
//     }
// }

// # 3
// let coding13 = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];
// let pair = [];
// let impair = [];

// for (let i = 0; i < coding13.length; i++) {
//     if (i % 2 == 0) {
//         console.log(`${coding13[i]} son index est pair`);
//     } else {
//         console.log(`${coding13[i]} son index est impair`);
//     }
// }

// coding13.forEach(i => {
//     if (coding13.indexOf(i) % 2 == 0) {
//         pair.push(i);
//     } else {
//         impair.push(i);
//     }
// });

// console.log(pair, impair);


// ## EXO 4 partie 1
// let array = ["Mihai", "Ilyas", "Alexis", "Loic", "Oussama", "Tania", "William", "Farad", "Yassin"];

// array.forEach(e => {
//     console.log(e);
//     console.log(e[e, 0]);
//     console.log(e[e, 1]);
//     console.log(e[e, 0].concat("Bonjour"));
//     if (array.indexOf(e) % 2 == 0) {
//         console.log(`${e} est pair`);
//     }
// });


// ## EXO 4 partie 2
// let array = ["mihai", "ilyas", "alexis", "loic", "oussama", "tania", "william", "farad", "yassin"];

// array.forEach(e => {
//     if (array.indexOf(e) % 2 == 0) {
//         console.log(e.substring(0, 1).toUpperCase() + e.substring(1));

//     } else {
//         console.log(e.toUpperCase());
//     }
// });

// array.forEach(e => {
//     if (array.indexOf(e) % 2 == 0 && e.length > 4) {
//         console.log(e.substring(0, 1).toUpperCase());

//     } else if (e.length > 4) {
//         console.log(e);

//     } else {
//         console.log(e.toUpperCase());
//     }
// });

// array.forEach(e => {
//     if ((e.substr(0, 1) == "a" || e.substr(0, 1) == "e" || e.substr(0, 1) == "m" || e.substr(0, 1) == "f" || e.substr(0, 1) == "y" || e.substr(0, 1) == "n") && e.length > 5) {
//         console.log(e);
//     }
// });


// ## EXO 4 partie 3
// let array = ["mihai", "ilyas", "alexis", "loic", "oussama", "tania", "william", "farad", "yassin"];
// let boite = [];

// array.forEach((e, i) => {
    // if ((e.substr(0, 1) == "a" || e.substr(0, 1) == "e" || e.substr(0, 1) == "m" || e.substr(0, 1) == "f" || e.substr(0, 1) == "y" || e.substr(0, 1) == "n") && e.length < 5) {
    //     console.log(e.substring(0, 1).toUpperCase() + e.substring(1));

    // } else if ((e.substr(0, 1) == "k" || e.substr(0, 1) == "c" || e.substr(0, 1) == "m" || e.substr(0, 1) == "f" || e.substr(0, 1) == "y" || e.substr(0, 1) == "n" || e.substr(0, 1) == "a" || e.substr(0, 1) == "e" || e.substr(0, 1) == "p" || e.substr(0, 1) == "o") && e.length > 4) {
    //     console.log(e);

    // } else if ((e.substr(0, 1) == "k" || e.substr(0, 1) == "c" || e.substr(0, 1) == "m" || e.substr(0, 1) == "f" || e.substr(0, 1) == "y" || e.substr(0, 1) == "n" || e.substr(0, 1) == "a" || e.substr(0, 1) == "e" || e.substr(0, 1) == "p" || e.substr(0, 1) == "o") && i % 2 == 0 && e.length > 5) {
    //     console.log(e.substr(0, 1) + e.substr(1, 1).toUpperCase() + e.substring(2, e.length-1) + e.substr(e.length-1).toUpperCase());
    // }

//     if ((e.substr(0, 1) == "k" || e.substr(0, 1) == "m" ||e.substr(0, 1) == "f" || e.substr(0, 1) == "y" || e.charAt(0).toLowerCase() == "n" || e.substr(0, 1) == "a" || e.substr(0, 1) == "e" || e.substr(0, 1) == "o") && i % 2 == 1 && e.length < 7) {
        
//         boite.push(e.substr(0, 1).toUpperCase() + e.substr(1, 1).toLowerCase());
//         console.log(boite);
//     }
// });

// console.log(boite.join(""));