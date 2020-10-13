---
layout: posts
title: "Music in browser basics"
date: "2020-09-30"
type: "post"
---

I've recently started a tech in music interest group within Shopee that will run for 8 weeks, and I want to have some content out for the first week as we will be doing mostly introductions. So this shall be my welcome and beginner starting kit to my 3 amigos Adriel, Stanley and James.

This post will try to provide an non technical explanation for some of the magic behind the web audio api so that we know what to google and research on our own. **This article is suitable for people comfortable with working in JS, with minimal to no signal processing background knowledge**

[reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

# Web audio api

The web audio api is powerful in that you should be able to build anything you need to relating sound, but as I found out, it's not very easy to use without some background in signal processing. All of our operations will revolve around the [Audio Context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext), which is essentially a graph built from modular [Audio Node](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode)s One audio context can have multiple Audio nodes. An audio node can be an audio source, an audio destination or some audio processing module. These nodes are routed to each other (eg, source -> processing -> destination) and form a graph. There can be multiple input and output nodes.

### Audio sampling

Because it's not very feasible to store a continuous audio input, we usually `sample` [the continuous signal into a discrete representation](https://en.wikipedia.org/wiki/Discrete_time_and_continuous_time), in the form of X values at Y time

## Audio Sources

After creating an audio context, we usually want to take an input, known as an audio source. Audio sources can be in the form of:
- sound generated from js (eg. creating a signal via `oscillator`)
- raw audio data known as [PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation) (eg. `AudioBuffer`)
- HTML elements like `<audio>` or `<video>`
- or some `MediaStream` like your microphone

## Effects

A lot of cool interactions we want to do involves adding effects to audio sources. We usually use the term `connect` to apply these effects onto an audio context Some things we can do is:
- `GainNode` change the volume. We can add gain to an input to increase the loudness 
- `ConvolverNode` gives reverb effects
- `WaveShaper` applies a non-liner distorter, can be used to change the tone of the sound.
- `DynamicsCompressorNode` lowers volume of loudest parts in the signal to help reduce clipping and distortion

## Destination (Output)

We can use `AudioDestinationNode` to select the audio source, usually for speakers of the device. Alternatively we can have `MediaStreamAudioDestinationNode` it uses `WebRTC` `MediaStream` under the hood. An interesting thing we can do with audio output is to have [spatialization effects](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) to simulate where the sound is coming from.

## Analysis

The [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) allows us to take numerical representations of the audio context. This is usually used for [visualizations] (https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
