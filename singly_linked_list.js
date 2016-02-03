//Singly Linked Implentation in Javascript
function node(val){
  this.val = val;
  this.next = null;
}
function sll(node){
  this.head = node;
  this.length = 1;
}
//SLL Find
sll.prototype.find = function(val) {
  if(this.head.val===val){
    return this.head;
  } else {
    var current = this.head;
    while(current.next!==null){
      current = current.next;
    }
    return current;
  }
};
//SLL Insert
sll.prototype.insert = function(new_node_val){
  var new_node = new node(new_node_val);
  if(this.head.val===null){
    this.head = new_node;
    this.length += 1;
  } else {
    var current = this.head;
    while(current.next!==null){
      current = current.next
    }
    current.next = new_node;
    this.length += 1;
  }
}
//SLL Display
sll.prototype.display = function() {
    var current = this.head
    console.log(current.val);
    while(current.next!==null){
      console.log(current.next.val);
      current = current.next;
    };
};
//SLL Find Previous
sll.prototype.find_previous = function(val){
  var current = this.head;
  while(current.next!==val && current.next!==null){
    current = current.next
  };
  return current;
};
//SLL Remove
sll.prototype.remove = function(val) {
  var prev_node = this.find_previous(val);
  if(prev_node!==val){
    prev_node.next = prev_node.next.next;
  };
};

var bob = new sll(new node(5));
bob.insert(7);
bob.insert(13);
bob.insert(19);
console.log(bob.display());