// A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and by a given probability it will decide if a mutation will occur.

// A mutation is the change from 0 to 1 or from 1 to 0.

// Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.






const mutate = (chromosome, p) => {
    let res = []
//     console.log(typeof (chromosome));
//     // res += Math.round(Math.random())
    for(let i = 0; i < chromosome.length; i++){
        if ( p === 0){
            res += chromosome[i]
        } 
        if ( p > 0.5){
            if(chromosome[i] === '0'){
                res += '1'
            }
            else res += '0'
        }
        if (p < 0.5 && p > 0){
            if(chromosome[i] === '0'){
                res += '1'
            }
            else res += '0'
        }

        if (p === 0.5){
            res += Math.round(Math.random()) 
        }      
    }
    

console.log(res)
return res
  
};




const zero = Array(10).join('0');
const one  = Array(10).join('1');

mutate(zero, 0.5)  //some(x => x == '1'));


// pažymėtas kaip geresnis sprendimas bet su 0.07 išveda klaidą ::))))


const mutates = (chromosome, p) => {
    let mutation = ''
    for (let i = 0; i < chromosome.length; i++) {
      mutation += Math.random() <= p ? chromosome[i] ^ 1 : chromosome[i]
    }
    
    return mutation
  }


