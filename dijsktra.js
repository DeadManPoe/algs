var nodes = [
  [0,3,5,Infinity,Infinity],
  [Infinity,0,Infinity,Infinity,3],
  [Infinity,4,0,1,Infinity],
  [Infinity,Infinity,Infinity,Infinity],
  [Infinity,Infinity,2,0]
]

var disjktra = function(nodes,si){
    S = [];
    S.push(si);
    C = [nodes.length];
    pred = [nodes.length];
    for(var i=0; i<nodes.length; i++){
        pred[i] = si;
        if(i === si){
          C[i] = 0;
        }
        else{
            C[i] = nodes[si][i];
        }
    }
    while(S.length != nodes.length){
        k = Infinity;
        min = Infinity;
        for(var i=0; i<C.length; i++){
          if((S.indexOf(i)===-1)&& C[i] < min){
            min = C[i];
            k = i;
          }
        }
        S.push(k);
        for(var i=0; i<pred.length; i++){
          if(S.indexOf(i) === -1){
            if(C[i] > C[k]+nodes[k][i]){
              C[i] = C[k]+nodes[k][i];
              pred[i] = k;
            }
          }
        }
    }
    console.log(C);
    console.log(S);
    console.log(pred);
  }
