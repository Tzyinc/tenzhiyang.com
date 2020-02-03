---
layout: posts
title: "Pitch me a scale"
date: "2020-02-03"
type: "baked"
---

So I recently bought an electric guitar because... I'm impulsive. I've never played guitar before in my life, I can play very simple four chord songs on an ukulele, but guitar always seemed like such a step up from ukulele. In the end I justified to myself that since there are so much resources on guitar playing and in so many different styles, I could learn to be average at the guitar and then transfer those skills back into the ukulele.

After practicing on the C major scale for a couple of weeks, as well as the "four chords" (C G Am F on ukulele, G, D, E, C on guitar) I decided it was time to actually practice more scales. I already casually watch [@adamneelybass](https://twitter.com/adamneelybass) on [youtube](https://www.youtube.com/channel/UCnkp4xDOwqqJD7sSM3xdUiQ) and have left his 5 hour practice video in the background while working.

So I needed to find a way to learn and practice scales. I also bad at identifying tones or even notes on the neck. Splitting this problem up, I need 2 things:

- Identify what note I am playing
- Display what notes to play

Of course I would have liked to write some solution that identifies chords, but after some research, I found that multi tonal pitch detection is a very difficult problem to solve, and JS likely isn't the best tool for that job (I like writing "serverless" apps). I stumbled across this really [short and sweet repo for guitar tuning](https://github.com/cwilso/PitchDetect) by [@cwilso](https:twitter.com/cwilso) and found that it was really well written and easy to re-purpose.

Playing around with it, I found that when playing a note on a guitar, it was fairly consistent in pitch, although the attack and decay might be messed up. My solution to remove noise from deliberate notes is to have a queue that I constantly check. If the entire queue is of that same note, I can assume that that's a deliberate note. The next thing is generating scales. For this I wrote a [helper function](https://codepen.io/Tzyinc/pen/QWweQXa) to generate scales from a root note and a step pattern like `4-H-W-4-H` where W is a whole step and H is a half step (and numbers are just the number of steps).

Here's my [https://app.tenzhiyang.com/tuner/](scale practicing prototype)