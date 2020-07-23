// Write a function that checks if all the letters in the second 
// string are present in the first one at least once, 
// regardless of how many times they appear:


// letterCheck(["THE EYES", "they see"]), true

function letterCheck(arr) {
    let exmpl = arr[0].toLowerCase();
        testStr = arr[1].toLowerCase();
        count = 0;

    for (let i of testStr){
        for (let j of exmpl){
            if (j === i){
                count++
                break
                        }
        }
    }
    if (count === testStr.length){
        return true
    }
    else return false

}





console.log(letterCheck(["assert", "staring"]));