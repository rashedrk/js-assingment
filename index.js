// problem 1
// function that take number as input and return after multiply by 3 ,addition by 10, division by 2 , subtraction by 5
function mindGame(number) {
    if (typeof number == 'number') {
        const result = (((number*3)+10)/2)-5;
        return result
    } 
    else {
        return "ERROR!!! please enter a number."
    }
}

// problem 2 
// function takes a string as input and return if is even or odd
function evenOdd(string) {
    if (typeof string == 'string') {
        if (string.length % 2 == 0) {
            return "even"
        }
        else 
            return "odd"
    } else {
        return "ERROR!!! please enter a string."
    }
}

// problem 3 
// function takes a number as input and find difference from 7, and if it is less than 7 then it returns the difference , otherwise returns double of the input
function isLGSeven(number) {
    if (typeof number == 'number') {
        let difference = number - 7;
        if(difference < 7){
            return difference;
        }
        else {
            return number * 2
        }
    } else {
        return "ERROR!!! please enter a number."
    }
}

// problem 4 
// function takes array of numbers as input and returns negative number it has
function findingBadData(array) {
    if (Array.isArray(array) == true) {
        let count = 0;
    
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(element<0){
                count++;
            }
        }
        return count
    } else {
        return "ERROR!!! please enter a array."
    }
}

// problem 5
// function that takes 3 persons gem as input and convert them to diamond 
function gemsToDiamond(firstFriendsGems, secondFriendsGems, thirdFriendsGems) {
    if (typeof firstFriendsGems == 'number' && typeof secondFriendsGems == 'number' && typeof thirdFriendsGems == 'number') {
        let totalDiamond = (firstFriendsGems*21) + (secondFriendsGems*32) + (thirdFriendsGems*43);
        if (totalDiamond > 2*1000) {
            return totalDiamond - 2000
        } else {
            return totalDiamond
        }
    } else {
        return "ERROR!!! please enter a number."
    }
}
