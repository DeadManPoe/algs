var nodes = ['1','2','3','4'];
var edges = [{
  cost : 1,
  nodes : {
    first : '1',
    second : '2'
    }
  },
  {
    cost : 3,
    nodes : {
      first : '2',
      second : '3'
    }
  },
  {
    cost : 5,
    nodes : {
      first : '3',
      second : '4'
    }
  },
  {
    cost : 2,
    nodes : {
      first : '4',
      second : '2'
    }
  },
  {
    cost : 2,
    nodes : {
      first : '1',
      second : '3'
    }
  },
  {
    cost : 4,
    nodes : {
      first : '1',
      second : '4'
    }
  }
];
//The result must be an array that is the one below or a one with
//the same objects but in different order:
//[{first: 1, second: 2},{first: 2, second: 4},{first: 1, second: 3}]
