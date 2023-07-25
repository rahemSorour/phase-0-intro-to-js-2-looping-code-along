
function writeCards(name,event){
    let ary=[]
    for (let i=0;i<name.length;i++){
        ary.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
  return ary
}

let listnames=["Guadalupe", "Ollie", "Aki"]
console.log(writeCards(listnames, 'surprise'))

function countDown(intg){
    while(intg>=0){
        console.log(intg--)
       
    }
}

countDown(10)