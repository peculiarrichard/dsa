function TreeConstructor(strArr) { 
  let nodes = {};
  let parents ={};

  for (let i = 0; i < strArr.length; i++){
    let pair = strArr[i].replace(/[()]/g,'').split(',');
    let child =pair[0];
    let parent = pair[1];

    if(parents[child] !== undefined){
      return false;
    }

    parents[child] = parent;
    if (nodes[parent] === undefined){
      nodes[parent] = [child];
    
    }else{
      nodes[parent].push(child);
      if (nodes[parent].length > 2){
        return false;
      }
    }
  }
    return true;
}