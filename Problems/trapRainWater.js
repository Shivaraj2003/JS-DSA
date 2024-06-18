
// function trap(arr)
// {

//     let water=0;

//     for(let i =1;i<arr.length; i++)
//     {
//         let left = Math.max(...arr.slice(0,i+1));
//         let right = Math.max(...arr.slice(i));
//         water += Math.min(left,right)-arr[i];
//     }
//     return water;
// }

function trap2(arr)
{

    let water=0;
    let left = 0;
    let right = arr.length-1;

    while(left<right)
    {
        if(arr[left]<=arr[right])
        {
            left++;
        }
        else{
            right--;
        }
        
    }

    for(let i =1;i<arr.length; i++)
    {
        let left = Math.max(...arr.slice(0,i+1));
        let right = Math.max(...arr.slice(i));
        water += Math.min(left,right)-arr[i];
    }
    return water;
}




let height= [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap2(height));

let height1 =[4,2,0,3,2,5];
console.log(trap2(height1));
