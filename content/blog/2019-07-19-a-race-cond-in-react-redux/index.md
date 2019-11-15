---
layout: posts
title: "A race condition in react-redux"
date: "2019-07-19"
---

**TLDR: file that used to be on code base became an API, listen to value changes on redux and send another fetch if neccessary** 

Recently I faced some problems with a component not appearing on live, despite no changes in the component's code for maybe months! It was very frustrating as this bug only happened in live, and not in staging, not in test, not in UAT. In fact even when I ran the code locally using live data, I could only reproduce the bug maybe once every ten tries. Now this blog post is something I'm trying so maybe it will be too vague because I can't reveal company code, but I want to try to explain big picture concept without too much details.

The major problem I had was due to a site-wide refactor. We had a list of constants that we would use to decide what to show, depending on which locale it was in. Super useful! Naturally, in order to turn some features on and off, we had to change that constant via some tool, and then re-deploy to production. It works, there's no need to touch the code base,  and now we don't need software engineers to turn on and off features. Natural progression led us to improve this design. Of course, we want to turn features on and off without waiting for another deployment, so therefore this file should just be deployed as an api! We can fetch this file as and when we need it! Brilliant!

Except we just created a race condition. Turns out, some logic requires us to alter our fetch in some way due to said toggles. This resulted in my component not displaying anything. Now there were several problems in the component design, either due to legacy reasons, or maybe lack of experience. If we had the time and (mostly QA) resources, we might have wrote this component some other way, but that's not really the root problem. We need a fix quickly, and then maybe down the road we can fix the architectural problems.

Some issues with the implementation:
- we used the fetch parameters as keys in our redux store so that we could store multiple results from the same api
- fetch parameters was generated using the value from the file, which became the API
- the result from the file value would go through some util and would fail gracefully, when the params were to go into the fetch, we would assume nothing is wrong
- the generated fetch key and the key used for display were calculated at the point and time where they were needed

The best solution I could come up with in a short period of time was to send another fetch when the value retrieved from the util changed. What this means is that if we sent the fetch on an `UNSAFE_componentWillMount()` (on legacy code) we should check the prop changes in `UNSAFE_componentWillReceiveProps()`, and then send another fetch based on the next props, compared to the current props.

In cases where we use `getDerivedStateFromProps()`, we don't have access to the current props. In this scenario, I had to make a copy of the what I need to listen to into the current state, and on next `getDerivedStateFromProps()` I would have a copy of the current props to compare with.

I think fundamentally the issue I'm facing is probably an architecture problem, but the way I solved it is probably the fastest and easiest way I know how. Do tweet at me if you have a better quick solution though!