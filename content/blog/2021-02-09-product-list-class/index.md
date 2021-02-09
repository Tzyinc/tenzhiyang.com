---
layout: posts
title: "Weekly solutions: product list class"
date: "2021-02-09"
type: "baked"
---

I decided since I've been solving the interview questions on [Cassidy's](https://twitter.com/cassidoo) weekly [newsletter](https://buttondown.email/cassidoo/archive/cc677716-37b2-4cfd-a691-bc6e87d7abce) I might as well put a little bit more effort into writing my thought processes down, in the scenario where people are looking for a way to solve these. That's my goal for this year. I'm not confident I can be consistent, but it doesn't hurt to try!

**This may or may not be the optimal solution, DO NOT blindly memorize my solutions**

Target audience: beginners in js (please feedback!)

>This week’s question:
Implement a ProductList class that has two methods, add(n) (which pushes the value n to the back of the list) and product(m) (which returns the product of the last m numbers in the list). David made an awesome template for submitting your solutions, if you’d like to use it!

> Usage:
```
ProductList p = new ProductList();
p.add(7);         // [7]
p.add(0);         // [7,0]
p.add(2);         // [7,0,2]
p.add(5);         // [7,0,2,5]
p.add(4);         // [7,0,2,5,4]
p.product(3);     // return 40 because 2 * 5 * 4
```

As someone who's been writing nothing but JS for a while, the first thing that comes to mind is to make use of [lexical scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) of JS functions to store the array. I can't say I'm super familiar with the Scope and Closure terminologies, but I'm fairly aware of what they do and how to make use of them.

so let's create a list in a function.

```
function ProductList() {
  this.list = [];
}
```

So to look at what's happening with the array, we can write some driver code

```
let p = new ProductList();
let p2 = new ProductList();
console.log(p.list, p2.list); // [] []
p.list.push(1);
p.list.push(2);
console.log(p.list, p2.list); // [1, 2] []
```

so far so good, we know that using the [new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) essentially creates an object with the `this` context from the function.  

The next step we want to do is to add elements to the list from a function provided by ProductList instead of using the one from the array. We will return this function in a JSON object, as well as the list array (if not the list will be undefined, see link to new operator above)

```
function ProductList() {
  this.list = [];

  function add(num) {
    this.list.push(num);
  }
  return { add, list: this.list };
}
```

If we change the `p.list.push(1)` in the driver code above to `p.add(1)` we should have the same result.

Finally we need a product function to multiply all the elements in the list. We want the last `n` numbers, so we can have a for loop that increments up to `n` and create an index that starts from the back and gets smaller up till `n`. Plugging in the given driver code, we should get the correct solution.

```
function ProductList() {
  this.list = [];

  function add(num) {
    this.list.push(num);
  }

  function product(n) {
    let result = null;
    for (let i = 0; i < n; i++) {
      const index = this.list.length - 1 - i;
      if (result === null) {
        result = this.list[index];
      } else {
        result *= this.list[index];
      }
    }
    return result;
  }
  return { add, list: this.list, product };
}

let p = new ProductList();

p.add(7); // [7]
p.add(0); // [7,0]
p.add(2); // [7,0,2]
p.add(5); // [7,0,2,5]
p.add(4); // [7,0,2,5,4]
console.log(p.product(3)); // return 40 because 2 * 5 * 4
```

## Bonus: O(1) product but with O(n) add

This sprang to mind as an optimization upon deeper thinking it doesn't really work, as it makes the add function slower. 

If we look at the problem, we realise there's no need to remove items from the list, therefore there's no need to keep the original values. How about calculating the product on insertion and then returning the results directly?

```
function ProductList() {
  this.list = [];

  function add(num) {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i] *= num;
    }
    this.list.push(num);
  }

  function product(n) {
    let index = this.list.length - n;
    return this.list[index];
  }
  return { add, list: this.list, product };
}
```

## codepen:

<iframe height="265" style="width: 100%;" scrolling="no" title="cassidoo newsletter 2021/6" src="https://codepen.io/Tzyinc/embed/bGBeMmW?height=296&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Tzyinc/pen/bGBeMmW'>cassidoo newsletter 2021/6</a> by Ten Zhi Yang
  (<a href='https://codepen.io/Tzyinc'>@Tzyinc</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>