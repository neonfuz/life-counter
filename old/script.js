function Player(life, parent) {
  var createDOM = function(parent) {
    this.dom = document.createElement("div");
    this.dom.innerHTML = "<p class=life></p>";

    updateDOM();

    if(parent)
      parent.appendChild(this.dom);

    return this.dom;
  }
  
  var updateDOM = function() {
    this.dom.getElementsByClassName("life")[0].innerHTML = this.life;
  }

  this.updateDOM = updateDOM;

  this.increment = function(ammount) {
    this.life += ammount ? ammount : 1;
    updateDOM();
  }

  this.decrement = function(ammount) {
    this.increment(-ammount);
    updateDOM();
  }

  this.setLife = function(ammount) {
    this.life = ammount ? ammount : 20;
    updateDOM();
  }

  this.append = function(parent) {
    parent.appendChild(this.dom);
  }

  createDOM();
  this.setLife(life);
  this.append(parent);
}

var p1 = new Player(20, document.body);
//p1.decrement(5);
