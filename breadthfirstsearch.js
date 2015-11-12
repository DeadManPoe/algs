function Queue(collection){
  this.collection = collection;
  this.collectionLength = collection.length;
  this.queue = function(element){
    this.collection.push(element);
    this.collectionLength++;
  }
  this.dequeue = function(){
    var tmp = this.collection[this.collectionLength-1];
    this.collection.splice(this.collectionLength-1,1);
    this.collectionLength--;
    return tmp;
  }
}
var inQueue = function(queue, element){
  for(var i=0; i<queue.length; i++){
    if(element === queue[i]){
      return true;
    }
  }
  return false;
}
var queue = new Queue([]);
var reachableNodes = [];
var nodes = ["Node1", "Node2", "Node3","Node4","Node5"];

var graph = [
  [1,2],
  [0,2],
  [0,1,4],
  [],
  [2]
];
var checkReachable = function(graph,startingIndex){
  var node;
  reachableNodes.push(startingIndex);
  for(var i=0; i<graph[startingIndex].length; i++){
    queue.queue(graph[startingIndex][i]);
  }
  while(queue.collectionLength !== 0){
      console.log(queue.collection);
      node = queue.dequeue();
      reachableNodes.push(node);
      for(var i=0; i<graph[node].length; i++){
        if(!inQueue(reachableNodes,graph[node][i])){
          queue.queue(graph[node][i]);
        }
      }

  }
}
