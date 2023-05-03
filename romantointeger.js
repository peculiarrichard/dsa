function romanToInt(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let currentValue = map[s[i]];
        let nextValue = map[s[i + 1]] || 0;
        if (currentValue < nextValue) {
            result += nextValue -currentValue;
            i++
        } else {
            result += currentValue;
        }
    }

    return result;
}

let r = "MCMXCIV"
let v = romanToInt(r)
console.log(v)