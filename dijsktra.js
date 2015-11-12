function dkstra(){
  //an example of graph
  //the elements of exampleGraph are nodes. We suppose that a node is connected
  //with every other node of the graph and we store the costs of these connection,
  //if the cost is Infinity then the connection does not acctually exists
  //We use a marker foreach node to tell us if is in the current cut
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
    Executes the Dijsktra's alg on the given graph, considering as the root node, the one
    with the indicated index
    @param graph The graph upon which apply the Dijsktra's alg. The graph structure has to be
    like the one of this.exampleGraph
    @param startingIndex The index of the graph's node to use as root node in the mst
    that results from the Dijsktra's alg
    @complexity order(number of graph.length^2)
  **/
  this.exec = function(graph,startingIndex){
    visitedNodes = [];
    visitedNodes.push(startingIndex);
    costs = [graph.length];
    previousNodes = [graph.length];
    //costs and previousNodes arrays init. costs after the init will contain the cost
    //of each edge connecting the node of startingIndex with the other nodes of
    //the graph(a cost of Infinity means that there's no edge). previousNodes after
    //the init will contain the node of startingIndex.
    //At the end of the execution costs[i] will be the cost of the shortest path between
    //the root node and the node i
    //At the end of the execution previousNodes[i] will be the previous node of node i in the shortest path
    //between the root node and node i
    for(var i=0; i<graph.length; i++){
        previousNodes[i] = startingIndex;
        if(i === startingIndex){
          costs[i] = 0;
        }
        else{
            costs[i] = graph[startingIndex].edges[i];
        }
    }
    //main cycle
    //complexity of order(number of nodes of graph)
    while(visitedNodes.length != graph.length){
        k = Infinity;
        min = Infinity;
        //Find the minimum cost edge belonging to the cut induced by visitedNodes
        //complexity of order(number of nodes of graph)
        for(var i=0; i<costs.length; i++){
          if(graph[i].marked == false && costs[i] < min){
            min = costs[i];
            k = i;
          }
        }
        //A marker is used to denote a node in the considered cut
        graph[k].marked = true;
        visitedNodes.push(k);
        //costs and previousNodes update
        //complexity of order(number of nodes of graph)
        for(var i=0; i<previousNodes.length; i++){
          if(graph[i].marked == false){
            if(costs[i] > graph[k].edges[i]){
              costs[i] = cost[k]+graph[k].edges[i];
              previousNodes[i] = k;
            }
          }
        }
    }
    //Print the resulting minimum spanning tree
    //in terms of costs and previousNodes
    console.log(costs);
    console.log(previousNodes);
  }
}
