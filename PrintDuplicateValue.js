//Declaring an array
let arr = [56,78,90,23,90,76,43,56];

//nested for loop for printing duplicate values in the array
for(let i=0;i<=arr.length;i++)
    {
     for(let j=i+1;j<=arr.length;j++)
        {
            if(arr[i]===arr[j]){
                console.log(arr[i])
            }
     }

    }   
