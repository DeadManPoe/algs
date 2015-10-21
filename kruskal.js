//Kruskal’s algorithm javascript

/**
  Produces an array of edges ordered by cost
  @param edges_with_cost The set of edges that we want
  to order by cost. Note that the following
  structure of edges_with_cost is supposed:
  [
    {
      cost: the edge's cost,
      nodes: {
        first: the first node the edge is incident to
        second: the second node the edge is incident to
      }

    },
    .
    .
    .
  ]
  the fact that we use first and second in the nodes object does not mean that
  we are considering a directed graph, is just a simple way to write things.
  @return An array of edges sorted by cost
  @see Array.prototype.sort (complexity in the order of nlogn)
  @complexity Order of m*logm, with m = edges_with_cost.length
**/
var sort_edges_by_cost = function(edges_with_cost){
  return edges_with_cost.sort(function(a,b){
    if(a.cost >= b.cost){
      return 1;
    }
    else {
      return -1;
    }
  });
}

/**
  Detects if the given couple of nodes produces a cicle if added to components_container.
  We suppose that the couples of nodes inside components_container and the given
  couple of nodes represent connected nodes, so that the cycle detection has sense
  @param components_container A set of couples of nodes
  @param nodes_couple A couple of nodes that that maybe produce a cycle in components_container
  given what stated above
  @return true If the given couple of nodes will produce a cycle for the given set of couples of nodes,
  otherwise false
  @complexity  Order of n, with n number of nodes of the starting graph
**/
var cycleDetect = function(components_container,nodes_couple){
  var flag;
  for(var i=0; i<components_container.length; i++){
    //If the second node of the couple is present in another couple as the
    //second node we are alerted that a cycle is present by looking at the value of
    //flag, otherwise we set properly the value of flag. The same is valid
    //if the first node of the couple is present in another couple as the first node
    if(nodes_couple.second === components_container[i].first){
      if(flag === 2){
        return true;
      }
      flag = 1;
    }
    if(nodes_couple.first === components_container[i].second){
      if(flag === 1){
        return true
      }
      flag = 2;
    }
  }
  return false;
}
/**
  Produces a minimal cost spanning tree using the kruskal algorithm given
  a connected undirect graph
  @param nodes The set of nodes of the considered connected undirected graph
  @param edges_with_cost The set of edges of the considered connected undirected graph
  This set of edges must be in following form:
  [
    {
      cost: the edge's cost,
      nodes: {
        first: the first node the edge is incident to
        second: the second node the edge is incident to
      }

    },
    .
    .
    .
  ]
  @return a set of couples of nodes representing the minimum cost spanning tree
  @complexity order of (m*logm + n^2)
**/
var kruskal = function(nodes,edges_with_cost){
  var sorted_edges_by_cost = sort_edges_by_cost(edges_with_cost);
  var components = [];
  var nodes_length = nodes.length;
  var nodes_couple;
  for(var i=0; i<nodes_length-1; i++){
    nodes_couple = sorted_edges_by_cost[i].nodes;
    //If the adding will produce a cycle of not
    if(!cycleDetect(components,nodes_couple)){
      components.push(nodes_couple);
    }
  }
  return components;

}
