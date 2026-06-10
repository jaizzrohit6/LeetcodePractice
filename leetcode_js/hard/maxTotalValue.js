/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    //brute force
    //let n = nums.length
    // let values = []
    // for(l = 0 ;l<n;l++){
    //     let mx = nums[l]
    //     let mn = nums[l]
    //     for(let r = l ; r<n;r++){
    //         mx = Math.max(mx,nums[r])
    //         mn = Math.min(mn,nums[r])
    //         values.push(mx - mn)
    //     }
    // }
    // values.sort( (a,b) => b-a)
    // let total = 0
    // for(let i = 0 ; i< k;i++){
    //     total+=values[i]
    // }
    // return total

    //optimize solution    

    const n = nums.length
    const N = (BigInt(n) * BigInt(n+1)) /2n
    const T = sumAllValues(nums)
    const kB = BigInt(k)
    if (kB >= N) return Number(T);

    let gmax = nums[0]
    let gmin= nums[0]
    for(const x of nums){
        if(x>gmax) gmax = x
        if(x<gmin) gmin = x
    }      
    let lo = 0
    let hi = gmax - gmin
    let vstar = 0
    while(lo <= hi){
        const mid = Math.floor((lo + hi)/2)
        if(N - lessPass(nums,mid).countLess >= kB){
            vstar = mid
            lo = mid + 1
        }
        else hi = mid - 1
    }
    const strict = lessPass(nums,vstar + 1)
    const c = N - strict.countLess
    const S = T - strict.sumLess
    return Number(S + (kB - c) * BigInt(vstar));
};

function lessPass(nums, w) {
  const n = nums.length;
  const mxV = [], mxL = []; let mxH = 0, mxT = 0; 
  const mnV = [], mnL = []; let mnH = 0, mnT = 0; 
  let sumMax = 0n, sumMin = 0n, lo = 0;
  let countLess = 0n, sumLess = 0n;

  for (let r = 0; r < n; r++) {
    const a = nums[r];

    let len = 1; let drop = 0n;
    while (mxT > mxH && mxV[mxT - 1] <= a) { mxT--; len += mxL[mxT]; drop += BigInt(mxV[mxT]) * BigInt(mxL[mxT]); }
    sumMax += BigInt(a) * BigInt(len) - drop;
    mxV[mxT] = a; mxL[mxT] = len; mxT++;

    len = 1; drop = 0n;
    while (mnT > mnH && mnV[mnT - 1] >= a) { mnT--; len += mnL[mnT]; drop += BigInt(mnV[mnT]) * BigInt(mnL[mnT]); }
    sumMin += BigInt(a) * BigInt(len) - drop;
    mnV[mnT] = a; mnL[mnT] = len; mnT++;

    while (lo <= r && mxV[mxH] - mnV[mnH] >= w) {
      sumMax -= BigInt(mxV[mxH]); if (--mxL[mxH] === 0) mxH++;
      sumMin -= BigInt(mnV[mnH]); if (--mnL[mnH] === 0) mnH++;
      lo++;
    }

    countLess += BigInt(r - lo + 1);
    sumLess += sumMax - sumMin;
  }
  return { countLess, sumLess };
}

function sumAllValues(nums) { return monoSubSum(nums, true) - monoSubSum(nums, false); }

function monoSubSum(nums, isMax) {
  const n = nums.length, stack = [], dp = new Array(n);
  let total = 0n;
  for (let i = 0; i < n; i++) {
    while (stack.length) {
      const j = stack[stack.length - 1];
      if (!(isMax ? nums[j] <= nums[i] : nums[j] >= nums[i])) break;
      stack.pop();
    }
    const prev = stack.length ? stack[stack.length - 1] : -1;
    dp[i] = (prev === -1 ? 0n : dp[prev]) + BigInt(nums[i]) * BigInt(i - prev);
    stack.push(i);
    total += dp[i];
  }
  return total;
}