function gasStation(gas, cost)
{
    let net = [];
    let n = gas.length;
    

    for(let i in gas)
    {
        net[i] = gas[i]- cost[i];
    }

    for(let i in net)
    {
        let sum =0;
        if(net[i]<0)
        {
          console.log('Negative sum');
        }
        else{
            
            let start = i-'0';
            do{
                sum+=net[start];
                start = (start+1)%n;
            }while(start!=i);
        
        if(sum>=0)
            
        return i-'0';
    }
    }
    return -1;
}

let gas = [1,2,3,4,5];
let cost = [3,4,5,1,2];
console.log(gasStation(gas,cost));

console.log(gasStation([5,1,2,3,4],[4,4,1,5,1]

))