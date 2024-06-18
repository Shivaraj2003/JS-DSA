
function countWays(n)
{
    let dp = [];
    dp[1] = 1; 
    dp[2] = 2;
    for (let i = 3; i <=n; i++)
    {
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[n];
}


   
    let n=4;
    console.log("Number of ways = " + countWays(n));
