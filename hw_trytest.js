// check ages
function categPeople(age){
    if (age <= 0 || age > 123 ){return 'This age does not exist'};
    if (age > 0 && age <= 1){return 'You are infant'};
    if (age > 1 && age <= 3){return 'You are toddler'};
    if (age > 3 && age <= 13){return 'You are child'};
    if (age > 13 && age <= 19){return 'You are adolescent'};
    if (age > 19 && age <= 65){return 'You are adult'};
    if (age > 65 && age <= 114){return 'You are senior'};
    if (age > 114 && age <= 123){return 'Congrats, you are centenarian!'};
}
// console.log(categPeople(17))
module.exports = categPeople;