function Prim(){
  this.exampleGraph = [
    {
      edges : [0,2,Infinity,3],
      marked : false
    },
    {
      edges : [2,0,4,5],
      marked : false
    },
    {
      edges : [Infinity,4,0,4],
      marked : false
    },
    {
      edges : [3,5,4,0],
      marked : false
    }
  ]
  /**
    Executes the Prim's alg on the given graph, considering as the root node, the one
    with the indicated index
    @param graph The graph upon which apply the Prim's alg. The graph structure has to be
    like the one of this.exampleGraph -> each node
    @param startingIndex The index of the graph's node to use as root node in the mst
    that results from the Prim's alg
  **/
  this.exec = function(graph,startingIndex){
    var graph = arguments[0] || this.exampleNodes;
    visitedNodes = [];
    visitedNodes.push(startingIndex);
    costs = [graph.length];
    previousNodes = [graph.length];
    for(var i=0; i<graph.length; i++){
        previousNodes[i] = startingIndex;
        if(i === startingIndex){
          costs[i] = 0;
        }
        else{
            costs[i] = graph[startingIndex][i];
        }
    }
    while(visitedNodes.length != graph.length){
        k = Infinity;
        min = Infinity;
        for(var i=0; i<costs.length; i++){
          if(graph[i].marked == false && costs[i] < min){
            min = costs[i];
            k = i;
          }
        }
        graph[k].marked = true;
        visitedNodes.push(k);
        for(var i=0; i<previousNodes.length; i++){
          if(visitedNodes.indexOf(i) === -1){
            if(costs[i] > graph[k][i]){
              costs[i] = graph[k][i];
              previousNodes[i] = k;
            }
          }
        }
    }
    console.log(costs);
    console.log(visitedNodes);
    console.log(previousNodes);

  }
}
