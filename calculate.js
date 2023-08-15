class Calculate {
    constructor(arr){
        this.array = arr
    }

    mean(){
        let arr = this.array;
        let total = 0;
        let count = 0;
    
        for (let a of arr){
            total += a;
            count++;
        }
    
        return total/count
    }

    median(){
        let arr = this.array;
        let length = arr.length;
        let endIndex = length - 1;
        let firstIndex = (endIndex / 2) - 0.5;
        let secondIndex = (endIndex / 2) + 0.5;
        let middleIndex = (endIndex / 2);
        let total = 0;
        if(length % 2 == 0){
            for (let i=0; i<length; i++){
                if(i == firstIndex || i == secondIndex){
                    total += arr[i]
                    console.log(total)
                }
            }
            return total/2;
        }
        else{
            for (let i=0; i<length; i++){
                if(i == middleIndex){
                    return arr[i]
                }
            }
        }
    }

    mode(){
        let arr = this.array;
        let allNums = {};
        let max;
        let maxNums = [];
        
        for (let a of arr){
            if(allNums[a]){
                allNums[a] += 1
            }
            else {
                allNums[a] = 1
            }
        }
        
        for (let num in allNums){
            if (!max && max != 0){
                max = allNums[num]
            }
            else if (allNums[num] > max){
                max = allNums[num]
            }
        }
    
        for (let num in allNums){
            if (allNums[num] == max){
                maxNums.push(Number(num))
            }
        }
    
        return maxNums;
    }
}

module.exports = Calculate