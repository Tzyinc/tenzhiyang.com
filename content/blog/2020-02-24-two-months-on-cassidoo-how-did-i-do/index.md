---
layout: posts
title: "Two months on rendezvous with @cassidoo , how did I do?"
date: "2020-02-03"
type: "baked"
---

In case you don't already know, [@cassidoo](https://twitter.com/cassidoo) has a really fun weekly [newsletter](https://cassidoo.co/newsletter/). In it, she shares things she did that week, web links, an interview question and a joke of the week. It's definitely a lot of work to be so consistent (132 issues!), so I figured why not show my appreciation by attempting the interview questions every week? 

I've been attempting the questions if I felt that I had an interesting take on the question, so I had a rough idea on the difficulty and how varied these questions are, but being consistent is much harder for me. I decided to see if I could last two months of every problem before I write a retrospective on some sort. To make sure everything is in one place, and also easily referenced,  I would only use codepen to do it. So here's my review on the questions:

## [2020 Issue 1: Array.filter](https://codepen.io/Tzyinc/pen/LYEeqOO)
- Implement array.filter() by hand (or whatever your language of choice uses to do this functionality).

This one was not very difficult technically, but I had to reference the polyfill on how to implement it. This question really tested my understanding on how my everyday tools work behind the abstraction, and sadly, I only had a rough understanding on the general case.

Educational rating: 10/10

## [2020 Issue 2: N palindromes](https://codepen.io/Tzyinc/pen/JjoZREZ)
- Given a number n, find the sum of all n-digit palindromes.

Deceptively difficult, this problem probably has a better solution out there. I didn't want to do a simple check if x to xxx is palindromic, so I tried to find a way to get the next palindrome given the current value. I managed to break it down into 3 generic cases, which was good enough for me. Really happy with how this solution came out.

Deceptiveness rating: 10/10

## [2020 Issue 3: is N factorial ](https://codepen.io/Tzyinc/pen/YzPRgzb)
- Given a number, return true if the input is a factorial of any natural number.

A very classic style of question I would expect in university, I had an inkling there was a significantly better solution. I thought that O(n) was good enough, but [@sophiebits](https://twitter.com/sophiebits/status/1219395327142219776)'s solution blew my mind out of the water! As my colleague said: it's sophie, else what did you expect?

Classic-ness rating: 10/10

## [2020 Issue 4: Helo wrd](https://codepen.io/Tzyinc/pen/QWwPWPE)
- Write a function that prints "Hello, world!" but doesn't repeat any characters in the program. The program should not use *any* character more than once (except whitespace, I'll allow that)!

I'm not sure if there's a proper solution in javascript for this. I don't think it's possible without the quotes or an external file. I did look around for inspiration but not before I already tried atob. I had to use some greek letters to at least keep the alphabet to one character each

Impossible-ness rating: 10/10

## [2020 Issue 5: Even Word](https://codepen.io/Tzyinc/pen/eYNOpvx?editors=0010)
- Given that an "even word" is a word in which each character appears an even number of times, write a function that takes in a string and returns the minimum number of letters to be removed to make that string an even word.

I found this question easy, but I was wondering if my solution was correct as I made the assumption that it's equivalent to "how many letters are odd?" it seems like that's the same question phrased differently, so I wonder why the original question was phrased as such.

Odd rating: 10/10

## [2020 Issue 6: Point in Triangle](https://codepen.io/Tzyinc/pen/RwPPQJJ?editors=0011)
- Given an array of points that represent the 3 vertices of a triangle, and a point K, return true if K is inside the triangle.

Such a simple yet difficult question. I'm not sure if my solution is entirely correct, but I can't think of a counter example and I'm too lazy to proof it. While looking for better solutions, I found that this was not a simple problem at all, especially when dealing with more than two dimensions.

The most intuitive solution was to check if the point is on the "correct" side of each line in the triangle. To do that, you calculate the vector from the side to the point, and do it for all 3 sides. if all the vectors point towards each other, the point is on the inside.

The more efficient and supposedly best solution is the [Barycentric coordinate method](https://en.wikipedia.org/wiki/Barycentric_coordinate_system). I'm not very good at explaining (and understanding) math, so I'll leave it to the wiki to explain.

Tri-facta rating: 3/3

## [2020 Issue 7: Speed Typing](https://codepen.io/Tzyinc/pen/poJbRzq?editors=1010)
- Build a typing speed test/game.

My work was ramping up at this time, so I didn't really want to do a whole game loop like I did with snake last year. I did, however feel that my dynamic programming skills were rusty, so to record 'live' errors like you would on any speed typing game, I wrote an implementation of the levenshtein distance algorithm from memory. Having written it from scratch also allowed me to easily return an array that corresponds to (one of) the most efficient path and use that to change the color of wrong characters.

Speed rating: 10/10

## [2020 Issue 8: Event Emitters](https://codepen.io/Tzyinc/pen/poJbRzq?editors=1010)
- Write an event emitter that has three methods: on, emit, and removeListener. The `on` function takes in an event name and a callback function, the `emit` function takes in an event name and data (which will be passed to the associated callback), and `removeListener` takes in an event name and a callback to remove from that event.

At the time of writing this post I haven't had feedback whether I'm on the right path or not, but I assume it's something like an event listener style data structure, so I wrote my own old-school javascript class, and see if I could call my own `tick` event. I decided to store the callbacks in an array as the question requires that `removeListener` takes in the callback itself, so it made sense for there to be more then one callback, and remove the callback by filtering.

Eventfulness rating: 10/10