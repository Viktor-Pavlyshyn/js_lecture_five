/*
 1.	Correct the error.
Here’s the code with Apple extending Fruit.
Unfortunately, Apple objects can’t be created. What’s wrong? Fix it.
class Fruit {
  constructor(name) {
    this.name = name;
  }
}
class Apple extends Fruit {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}
*/

class Fruit {
    constructor(name) {
        this.name = name;
    }
}
class Apple extends Fruit {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}
