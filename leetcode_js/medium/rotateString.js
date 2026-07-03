/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    if (s.length === 0) return true;

    const text = s + s;
    return kmpSearch(text, goal);

};


function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else if (len > 0) {
            len = lps[len - 1];
        } else {
            lps[i] = 0;
            i++;
        }
    }
    return lps;
}

    function kmpSearch(text, pattern) {
        const lps = buildLPS(pattern);
        let i = 0;
        let j = 0;

        while (i < text.length) {
            if (text[i] === pattern[j]) {
                i++;
                j++;
                if (j === pattern.length) return true;
            } else if (j > 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
        return false;
    }