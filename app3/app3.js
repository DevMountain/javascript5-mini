var listOfNums = [1,2,3,4,5,6,7,8,9,10];

function findFavNum(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            alert('Found it!')
        } 
    }
}
findFavNum('9', listOfNums);

