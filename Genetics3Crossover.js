const crossover = (chromo1, chromo2, index) => {
    let res = '';
        resa = '';
        resArr = [];

    res = chromo1.slice(0,index)
    res += chromo2.slice(index,chromo2.length)
    resArr.push(res)

    resa = chromo2.slice(0,index)
    resa += chromo1.slice(index,chromo1.length)


    resArr.push(resa)


    console.log(resArr);
};


crossover('00000000','11111111',7)


// šitas sprendimas manau buvo geriausias

const crossovers = (chromosome1, chromosome2, index) => {
    return [
      chromosome1.substring(0, index) + chromosome2.substring(index),
      chromosome2.substring(0, index) + chromosome1.substring(index)
    ]
  };