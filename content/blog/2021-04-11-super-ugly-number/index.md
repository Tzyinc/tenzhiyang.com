---
layout: posts
title: "Super ugly number"
date: "2021-04-11"
type: "baked"
---

**This may or may not be the optimal solution, DO NOT blindly memorize my solutions**

From [Cassidy's](https://twitter.com/cassidoo) weekly [newsletter](https://buttondown.email/cassidoo/archive/8db4e69f-1ffd-40ef-8f35-1d327eb63ddf).

Target audience: people comfortable in js (please feedback!)

# This week’s question:
> Given an integer n and a sorted array of prime integers called primes, return the nth “super ugly number”. A “super ugly number” is a positive number whose all prime factors are in the array primes.

## Example:

```
$ superUgly(1, [2,3,5])
$ 1
$ superUgly(11, [2,7,13,19])
$ 28
```

I haven't seen this problem before and it was a bit confusing why the first example returned a 1 when 1's prime was not in the list, but after looking it up, I found that 1 is the first result by convention. Now the first thing that came to mind is why we needed 1 by convention, I think this led me to think that maybe we can build up the list of super ugly numbers starting from 1, and then using the primes given.

Let's work out the second example on paper

```
super ugg nums = [1]

super ugg nums = [1, 1*2]

super ugg nums = [1, 1*2, 1*2*2]
// [1,2,4]

super ugg nums = [1, 1*2, 1*2*2, 1*7, 1*2*2*2]
// [1,2,4,7,8]

super ugg nums = [1, 1*2, 1*2*2, 1*7, 1*2*2*2, 1*13, 1*2*7, 1*2*2*2*2]
// [1,2,4,7,8,13,14,16]

super ugg nums = [1, 1*2, 1*2*2, 1*7, 1*2*2*2, 1*13, 1*2*7, 1*2*2*2*2, 1*19]
// [1,2,4,7,8,13,14,16,19]

super ugg nums = [1, 1*2, 1*2*2, 1*7, 1*2*2*2, 1*13, 1*2*7, 1*2*2*2*2, 1*19, 1*2*13]
// [1,2,4,7,8,13,14,16,19,26]

super ugg nums = [1, 1*2, 1*2*2, 1*7, 1*2*2*2, 1*13, 1*2*7, 1*2*2*2*2, 1*19, 1*2*13, 1*2*2*7]
// [1,2,4,7,8,13,14,16,19,26,28]
```

Looking at how we calculated this, I felt that there's 2 things I had to keep note of. I always need to know when to start using the next prime, and I also need to check where's the last time I used the previous prime, i.e when calculating 1*2*2*7, I need to use the 7 prime with the last time I calculated 2*2.

Thus to build the next, number, all I have to do is to loop through the list of primes, multiply then by some past super ugly number and then pick the smallest one. Let's figure out the past ugly number later, and write something down first

```js
const superUgly = (n, primes) => {
  let ugly = [1];
  for (let i = 0; i < n; i++) {
    const options = primes.map((item) => item * ugly[ugly.length - 1]);
    const next = Math.min(...options);
    ugly.push(next);
  }
  return ugly;
};
```

This gives us `[1,2,4,8,16,32,64,128,256,512,1024,2048]` what's happening here is that we will **always** reference the previous time we used the 2 prime, and we will always use the 2 prime for the next iteration as it always gives us the small number. This solution looks extremely wrong, but it actually gives us a few things that work towards the final answer. We are calculating the next number by using the min of all of the primes * some previous iteration. We just haven't figured out which previous iteration to use. 1,2,4 makes sense but we didn't start using the 7, as by the time we were ready to use 7, we were returning min(1*2*2*2, 1*2*2*7) and inserted an 8 instead.

So maybe what we can do is to reference in the ugly list, some number that 7 needs to multiply by. let's keep track of the index of the previous iteration, by using an array, since we only need to keep track of one index per prime.

```js
const superUgly = (n, primes) => {
  let ugly = [1];
  let prevIndices = new Array(primes.length).fill(0);
  for (let i = 0; i < n; i++) {
    const options = primes.map((item, index) => item * ugly[prevIndices[index]]);
    const next = Math.min(...options);
    ugly.push(next);
  }
  return ugly;
};
```

This gives us `[1,2,2,2,2,2,2,2,2,2,2,2]`, which makes sense, because we never moved the prevIndices when we select the min, so let's increment the prevIndices every time we pick that result for our next

```js
const superUgly = (n, primes) => {
  let ugly = [1];
  let prevIndices = new Array(primes.length).fill(0);
  for (let i = 0; i < n; i++) {
    const options = primes.map(
      (item, index) => item * ugly[prevIndices[index]]
    );
    const next = Math.min(...options);
    const updateIndex = options.findIndex((item) => item === next);
    prevIndices[updateIndex]++;
    ugly.push(next);
    // console.log(
    //   prevIndices,
    //   prevIndices.map((num) => ugly[num])
    // );
  }
  return ugly;
};
```

At this point, if you're lost you can un-comment the console log to see what the prevIndices is doing, basically it lets us know when was the previous time we used this particular prime to insert into ugly. Our return value for this function is `[1,2,4,7,8,13,14,14,16,19,26,26]` which is really, really close to what we want! However, it seems like we cut off early, due to having multiple branches to calculate 14 and 26, this stops our loop prematurely. We could insert the ugly values into the set, but then we'd lose the use of our `prevIndices`, what we **could** do is to write a different terminating condition, one where we terminate once we reach n unique solutions, giving us this:

```js
const superUgly = (n, primes) => {
  let ugly = [1];
  let prevIndices = new Array(primes.length).fill(0);
  while (new Set(ugly).size < n) {
    const options = primes.map(
      (item, index) => item * ugly[prevIndices[index]]
    );
    const next = Math.min(...options);
    const updateIndex = options.findIndex((item) => item === next);
    prevIndices[updateIndex]++;
    ugly.push(next);
  }
  return ugly;
};
```

This gives us the correct answer with `[1,2,4,7,8,13,14,14,16,19,26,26,28]` ! now change `return ugly` to `return ugly.pop()` and we're done!

This question is not particularly easy, I think I happened to figure out the answer while finding out more information about the question itself,  since I wasn't too familiar with primes and factors, let alone prime factors, so I probably had a spark of inspiration from other problem descriptions and would not have come to the answer so quickly if I didn't look up this question from other places.

Don't falter if you can't figure it out on your own, mathematical problems like this that require some kind of trick doesn't usually come intuitively, so it's just a matter of practice and knowing other questions like this that can help solve future similar questions!
