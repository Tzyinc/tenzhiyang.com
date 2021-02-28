---
layout: posts
title: "No matching adjacent chars"
date: "2021-02-28"
type: "baked"
---

**This may or may not be the optimal solution, DO NOT blindly memorize my solutions**

From [Cassidy's](https://twitter.com/cassidoo) weekly [newsletter](https://buttondown.email/cassidoo/archive/2c66408b-dffb-4767-b754-0aad2d289226).

Target audience: beginners in js (please feedback!)

> Given a string str containing only the characters x and y, change it into a string such that there are no matching adjacent characters. You’re allowed to delete zero or more characters in the string. Find the minimum number of required deletions.

Example:
```js
$ everyOther('xxyxxy')
$ 2 // str becomes ‘xyxy’

$ everyOther('yyyyy')
$ 4 // str becomes ‘y’
```

This one came to me very quick. I would think that a optimal solution would not be any faster than O(n). If we look at the problem, we notice that essentially, the `matching adjacent characters` would mean looking at both side of all the characters. eg. in `123` we would look at the right of `1`, check that `2` is not the same and then do the same for `2`. We don't have to check `2` back with `1` again as that would be a double count. This means that every character needs to be accessed at least once.

Let's write a loop, were we start from 0 and end at str.length - 2

```js
const everyOther = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
  }
};
```

we then need to check the current letter with the next

```js
const everyOther = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    const curr = str[i];
    const next = str[i + 1];
    if (curr === next) {
      // do something here
    }
  }
};
```

And if we look at the question again, notice that it only asks for a count, not the string after we're done with it. So let's add a counter.

```js
const everyOther = (str) => {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    const curr = str[i];
    const next = str[i + 1];
    if (curr === next) {
      count++;
    }
  }
  return count;
};
```

And that's it! Short one this week, but there's no short of amazing solutions, particularly [the one by Sophie](https://twitter.com/sophiebits/status/1363939556119048192) stands out to me, I never would have thought of using regex, and there are plenty of interesting solutions which actually make use of the fact that the question specified that the entire expected input is only 2 different types of characters. It's interesting to look at all the different ways people "brand" their code in in [the thread](https://twitter.com/cassidoo/status/1363745457361592320). 
