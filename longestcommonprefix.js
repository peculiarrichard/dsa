function longestCommonPrefix (strs){
    if (strs.length === 0){
        return "";
    }

    let prefix = strs[0]
    for (let i=0; i< strs.length; i++){
        while (strs[i].indexOf(prefix) !==0){
            prefix = prefix.substring(0, prefix.length-1);
            if (prefix === 0){
                return ""
            }
        }
    }
    return prefix;
}

let strs = ["bed", "bedbug", "bedowned"];
console.log(longestCommonPrefix(strs))

// another solution

function longCommonPrefix (str){
    if (str.length === 0){
        return "";
    }

    let prf = str[0];
    for(let i = 0; i< str.length; i++){
        if (!str[i].startsWith(prf)){
            prf = prf.slice(0, -1)
        }else{
            i++
        }
    }
    return prf;
}

let str = ["bed", "good", "bedowned"];
console.log(longestCommonPrefix(str))