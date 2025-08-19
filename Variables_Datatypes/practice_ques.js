
// ques 1 : amazon product
const product = {
    productName: "Parker Jotter",
    productType : " Standard CT Ball Pen",
    color       : "Black",
    ratings     : 4,
    idDeal      : false,
    price       : 270,
    offer       : 5
}

console.log(product);


// ques 2 : instagram profile
const profile = {
    profileName : "shradhakhapra",
    userName    : " Shradha Khapra",
    thread      : "@Shradhakhapra",
    isFollow    : false,
    followers   : 569000,
    following   : 4,
    posts       : 195,
    descriiption : "Entreprenuer",
    experience    : " Apna College |Ex-Microsoft, DRDO",
    bio           : "To educate someone is the highest privilege"

}

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["posts"]);
console.log(typeof profile.bio); 
console.log(typeof profile.isFollow);