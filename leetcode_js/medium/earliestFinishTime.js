/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
     let minLandFinish = 100000000
    let minWaterFinish = 100000000
    let best=100000000
    for(let i = 0; i<landStartTime.length;i++){
        minLandFinish = Math.min(minLandFinish,landStartTime[i] + landDuration[i] )
    }
    for(let j = 0; j<waterStartTime.length;j++){
        minWaterFinish = Math.min(minWaterFinish,waterStartTime[j] + waterDuration[j] )
    }
    for(let i = 0; i<landStartTime.length;i++){
        best = Math.min(best,Math.max(minWaterFinish,landStartTime[i]) + landDuration[i] )
    }
    for(let j = 0; j<waterStartTime.length;j++){
        best = Math.min(best,Math.max(minLandFinish,waterStartTime[j]) + waterDuration[j] )
    }
    return best
};