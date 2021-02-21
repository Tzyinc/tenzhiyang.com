---
layout: posts
title: "Weekly solutions: PPAP wildcard matching"
date: "2021-02-21"
type: "baked"
---

**This may or may not be the optimal solution, DO NOT blindly memorize my solutions**

Another one of [Cassidy's](https://twitter.com/cassidoo) weekly [newsletter](https://buttondown.email/cassidoo/archive/31041425-e593-454a-b0a5-13dfb94966a7). I did a cursory google search and it seems like it's a leet code hard, so I'm not intending to get the optimal solution, at least on first try.

Target audience: beginners in js (please feedback!)

> This week’s question:
Given a string str and a dictionary dict containing a list of non-empty words, add spaces in str to construct a “sentence” where each word is a valid word in dict. Return all possible sentences. You are allowed to reuse the words in dict.

> Example:

```
str = “penpineapplepenapple”
dict = [“apple”, “pen”, “applepen”, “pine”, “pineapple”]

$ makeSentence(str, dict)
$ [
    “pen pine apple pen apple”,
    “pen pineapple pen apple”,
    “pen pine applepen apple”
  ]
```

Here's where my mind is at from the start, I can make use of a global replace to match words to a symbol. I can reconstruct the sentence by replacing the symbol back into the words, with spaces. To get the different variations of sentences, I can change the order of the dictionary such that we replace matched strings in different order.

This seems like it would be difficult to reason about as there are many loose parts, but using the same idea, let's try to use a recursive solution.

We can start by breaking up the first match-able strings of the sentence, adding a space and then throwing the output back into the function again.

We want this function to exit. For now, we can clone the input array, and then check if the new array and the original input have the same length, that can be our exit condition.

```js
const str = "penpineapplepenapple";
const dict = ["apple", "pen", "applepen", "pine", "pineapple"];

const makeSentence = (str, dict) => {
  return breakFirstWord([str], dict);
};

const breakFirstWord = (strArr, dict) => {
  const newStrArr = new Array();
  return newStrArr.length === 0
    ? strArr
    : breakFirstWord(newStrArr, dict);
};

console.log(makeSentence(str, dict));
```

Now to attack the breaking up problem. In the first loop, it's straight forward, we will just break the word from index 0, that is, with input `penpineapplepenapple` we will break into `pen pineapplepenapple`. following which, we will want to break from the most recent space.

Keep in mind if it started with `applepen` it could be either `applepen` itself or `apple pen`, so there could be one or more most recent space.

breakFirstWord now looks like this.

```js
const breakFirstWord = (strArr, dict) => {
  const newStrArr = new Array();
  for (let i = 0; i < strArr.length; i++) {
    const currTestStr = strArr[i];
    let mostRecentSpace = currTestStr.lastIndexOf(" ");
    if (mostRecentSpace === -1) {
      mostRecentSpace = 0;
    }
    // TODO: do something with mostRecentspace and currTestStr here
  }
  return newStrArr.length === 0
    ? strArr
    : breakFirstWord(newStrArr, dict);
};
```

We want to match with every word in the dictionary, at where we left the TODO, let's write something that takes a substring of the same length as the dictionary words

```js
for (let j = 0; j < dict.length; j++) {
  const currDictTest = dict[j];
  const testSubStr = currTestStr.substring(
    mostRecentSpace,
    mostRecentSpace + currDictTest.length
  );
  console.log(testSubStr);
}

// first iter returns
// "penpi"
// "pen"
// "penpinea"
// "penp"
// "penpineap"
```

This looks correct, but at the back of my mind, we might need to handle the fact that the first input of the substring function may not work like expected due to us taking the index of the space, when we might need the index of the first character after the space. We will cross that bridge when it comes back.

For now, we want to break the word if there's a match and then push it into the next newStrArr.


```js
for (let j = 0; j < dict.length; j++) {
  const currDictTest = dict[j];
  const testSubStr = currTestStr.substring(
    mostRecentSpace,
    mostRecentSpace + currDictTest.length
  );

  console.log(testSubStr);
  if (testSubStr === currDictTest) {
    const newStr =
      currTestStr.substring(0, mostRecentSpace) +
      testSubStr +
      " " +
      currTestStr.substring(mostRecentSpace + currDictTest.length);
    newStrArr.push(newStr);
  }
}
```

sure enough, in our second iteration, testSubStr is messing up, let's increment mostRecentSpace by 1, consequently, this also means a no-match of spaces is also 0.

so let's change

```js
let mostRecentSpace = currTestStr.lastIndexOf(" ");
if (mostRecentSpace === -1) {
  mostRecentSpace = 0;
}
```

into

```js
let mostRecentSpace = currTestStr.lastIndexOf(" ") + 1;
```

we're very close! the final output only returns a single element of `["pen pine apple pen apple "]`. Looking at this result, I can see that the last word has a space to it, this leads me to guess that this array is running one time more than it needs to. console logging before every return confirms my assumption.

```
["pen pine apple pen apple", "pen pine applepen apple ", "pen pineapple pen apple "] ["pen pine apple penapple", "pen pine applepen apple", "pen pineapple pen apple"]

["pen pine apple pen apple "] ["pen pine apple pen apple", "pen pine applepen apple ", "pen pineapple pen apple "]

[] ["pen pine apple pen apple "]
```

The idea that comes straight to mind is, before pushing into the new array, I can trim the string, therefore the last iteration will not include the last space. However, this results in an infinite loop at the last step.

Alternatively having a space at the end also guarantees that I've gone through the dictionary down to the last word, this means that something like `penasdf` should not have any output. I think a way we can handle this is to automatically push all input where there's an empty space at the end to `newStrArr`, so that we will not lose any results that are computed early, (eg. `pen applepen ` will always resolve one loop earlier than `pen apple pen `) but we can also check that all elements in `newStrArr` contains a space at the end, this can be our new break condition. Let's also trim the results in the `makeSentence` function

Here's the full code:

```js
const str = "penpineapplepenapple";
const dict = ["apple", "pen", "applepen", "pine", "pineapple"];

const makeSentence = (str, dict) => {
  return breakFirstWord([str], dict).map((item) => item.trim());
};

const breakFirstWord = (strArr, dict) => {
  const newStrArr = new Array();
  for (let i = 0; i < strArr.length; i++) {
    const currTestStr = strArr[i];
    let mostRecentSpace = currTestStr.lastIndexOf(" ") + 1;
    if (mostRecentSpace === currTestStr.length) {
      newStrArr.push(currTestStr);
    } else {
      for (let j = 0; j < dict.length; j++) {
        const currDictTest = dict[j];
        const testSubStr = currTestStr.substring(
          mostRecentSpace,
          mostRecentSpace + currDictTest.length
        );

        if (testSubStr === currDictTest) {
          const newStr =
            currTestStr.substring(0, mostRecentSpace) +
            testSubStr +
            " " +
            currTestStr.substring(mostRecentSpace + currDictTest.length);
          newStrArr.push(newStr);
        }
      }
    }
  }
  return newStrArr.every((item) => item[item.length - 1] === " ")
    ? newStrArr
    : breakFirstWord(newStrArr, dict);
};

console.log(makeSentence(str, dict));
```

codepen:

<iframe height="265" style="width: 100%;" scrolling="no" title="cassidoo newsletter 2021/7" src="https://codepen.io/Tzyinc/embed/VwmzORx?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Tzyinc/pen/VwmzORx'>cassidoo newsletter 2021/7</a> by Ten Zhi Yang
  (<a href='https://codepen.io/Tzyinc'>@Tzyinc</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
