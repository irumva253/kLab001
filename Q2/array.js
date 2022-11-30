
const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ]

//1st subquestion 
const a=item.sort((a, b) => a.price - b.price)[0];
console.log(a)

//2nd subquestion
const b=item.sort((a, b) => b.price - a.price)[0];
console.log(b)
//3rd subquestion
let amount=0;
item.forEach(i=>{
    amount+=i.price
})
console.log(amount)

//4th supquestion
let amount2=0
item.forEach(i=>{
    if(i.price>5){
        amount2+=i.price
    }
})
console.log(amount2)