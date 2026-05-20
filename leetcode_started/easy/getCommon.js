var getCommon = function(nums1, nums2) {
    let setB = new Set(nums2)
    let common =  nums1.filter(x=> setB.has(x))
    if (!common.length) return -1;
    return common.reduce((min, x) => x < min ? x : min, common[0]);
};