---
layout: posts
title: "Hacking together auto posting to dev.to from my blog"
date: "2021-02-10"
type: "baked"
---

In order to increase my online presence, I decided to create a dev.to account. I've never posted on medium before so I can't compare the experience from one platform to another, but dev.to was pretty intuitive. However, I already have somewhat of a content creation flow right here on my blog, and I tried manually cross posting, but I didn't really like the whole doing one thing twice. Hence I decided to hack up some auto posting script. With some luck, you'll be reading this post itself on dev.to!

## Existing blog setup

I'm a very very lazy dev, and my blog really is for me to throw things together, so don't expect a production ready system here. I've tinkered around with it a bit, so I don't fully remember what came out of the box when I started this gatsby blog, but I'll list out things that are relevant to this task.

- Blog:
  - Starter for a blog powered by Gatsby and Markdown from [Kyle Mathews](https://twitter.com/kylemathews)
  - gatsby-plugin-feed (default configs)
  - hosted on digital ocean
- Digital ocean server
  - Nginx reverse proxy-ing a few web apps and some simple nodejs scripts
  - cron job that pulls my latest build from my gatsby blog (a hacked imitation of CI, ideally you will use github's webhooks to push to the server and have the server run the build script, but I ran into issues building on my lowest tier DO server, but hey, if it works it works)
  - nodejs script that automates some tasks for me
    - Fetches my RSS feed from my blog every 5 mins and caches the response in memory
    - Tweets for me if there's a new blog post since the last cache

## Changes made

I won't provide the code snippets for this project as I'm not confident it will work as of writing this blog, but I will layout the steps I did and hopefully this will help someone out there.

### Get my api key from dev to

Following the [docs](https://docs.dev.to/api/), I went to my settings > account > generate api key. I entered this key into my .env for my nodejs script.

### Modify RSS feeds to include raw markdown

Initially I had the default settings of gatsby-plugin-feed. I copied the configuration from [https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/). Comparing this output with my existing output, I found that it was exactly the same, so I was confident I wouldn't break anything that's currently working. Checking my graphql queries locally, I found that I could directly query `rawMarkdownBody` I added that into the query in the config, as well as `{"content:raw": edge.node.rawMarkdownBody}` to `custom_elements`. I then checked by building my site locally.

### Modify nodejs script

I knew that the script was already capable of tweeting when I posted a new post and I could get any information from my blog as long as it was in the RSS feed, so I wrote a function that sends a POST request to the `https://dev.to/api/articles` endpoint and added my `api-key` to my header. I then called this function where I implemented my twitter bot, passing in the title, canonical url, and content.

That's it! hopefully everything worked. I'll probably update this if it didn't.

### Improvements

Assuming everything worked as planed, there are still a few changes I would want to make. The images being used will reference a relative url, so it will definitely not work in the dev.to article. I would also add tags and series to my front matter on my blog and pass it into the rss feed, and also the dev.to api.