var listofNums = [1,2,3,4,5]
function test(nums) {
    return nums.map(function(n) {
        return n + 1;
    }).filter(function(n) {
        return n % 2 === 0
    })
}

var findEvens = test(listOfNums);





// ===============================










var myCoWorkers = ['Jeremy', 'Brack', 'Todd', 'Todd','Brack', 'Tyler', 'Missy', 'Krissy', 'Daniel', 'Aa-ron', 'Krissy'];


function removeDuplicates() {
    for (var i = 0 ; i < myCoWorkers.length; i++) {
        for (var j = 0; j < myCoWorkers.length; j++) {
            if (myCoWorkers[i] === myCoWorkers[j]) {
                myCoWorkers.splice(i, 1);
            } else {
                return myCoWorkers;
            }
        }
    }
}

var fixedList = removeDuplicates();

