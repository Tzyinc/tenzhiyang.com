---
layout: posts
title: "SVGs are good butt can you style them"
date: "2020-02-26"
type: "baked"
---
<video width="320" height="240" controls>
  <source src="./pechakuchafix.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

# Script for the above slides

Hi everyone I'm Ten Zhi Yang, Front end Engineer at Shopee. For my talk today, I really want everyone to know that Butt is a valid css value. That’s it. That’s the whole talk. Thank you.

Just kidding. The title of this presentation was inspired by the tweet above from Chris coyer. Unfortunately, I can't make a full presentation talking about butts in css, so I’ll have to make do with talking about SVGs using CSS, to produce effects like with the farting cat below.

Apart from the usual rotate and transform techniques that we normally use with images, we actually have a list of css properties and values that are unique to vector images, and SVGs. You can read for more details in the css docs

For most of the examples, I drew these fart lines using vectr.com. We can see that the lines in this SVG are essentially represented by waypoints, shown as circles here. To get your hands on SVGs and play around, you can also draw your own like I did,

Or with some of my examples, from freesvg. Programmes like figma and sketch allow you to export shapes as SVGs, and there are many libraries that either provides svgs, or even allow you to draw SVGs with the JS canvas syntax

If we peek into the SVG content, we see that it is mostly a series of paths. Although not in this example, other representations can be in the form of some basic shapes or fill strategies. Do take note of the property pathLength equals to one here 

Being a vector based representation gives us some benefits. We can have crisp and sharp images at all sizes. If we declare the SVGs in our markup itself, we don’t have to send another HTTP request for each image, We can easily scale not just the whole thing but parts of our image, and vector representation of images are generally small.

Basic SVG support is already in all browsers, even mini browsers! If anyone out there’s still using PNG for gifs for their icons, I suggest to immediately switch to svgs just based on those benefits themselves

We don’t have to draw paths as lines. We can also do fun things like make text follow a path. Or make shapes from paths. Or make other paths follow a path. Or make other Paths follow a Path that follows another path. 

Some common CSS uses that we have are things like stroke, fill, and stroke width. These are normally used in our daily development to change colors of icons, we can also add stroke width on hover to show a highlighted effect.

The namesake of this presentation is just a value for the linecap properties, which represents the ends of the lines. In the first line, you can see that the line ends or caps are round. For the Butt line, they stop with a flat edge. Square value looks very similar to butt, except that it extends a square beyond where the path. You can see the effect a little bit, where the line with square caps starts a little before the other two lines.

Other properties that we can play around with are the dash array and dash offset. I mentioned Pathlength = 1 about a minute ago. This allows us to use float values from 0 to 1 as a ratio to the total path length when setting these values. In the second example, I removed the property, so I have to use pixel values instead. In the last example, I changed the offset, the dash line starts further to the right.

All these examples are kinda boring, unlike the farting cat animation shown pretty much at the start of the presentation. So using these concepts, what can we abuse these properties for weird animation effects?

We can use css animations to shift dash offset at certain intervals. This is a single-lined spiral that I just found on freesvg, without any prior knowledge of the path itself, I can create this spiral effect by changing the dash offset

Alternatively we can change multiple things together to achieve other effects. By changing the color for dark blue to a vibrant blue color and then making the stroke width larger, I can create a glowing neon sign effect

We can also animate color fills like the one here. With CSS animations, we only need to write out color stops, like keyframes, and the fading from color to color will be automagically handled for us.

A very common use of svg is to create a sketching effect. Here I added the pathLength = 1 to every path, and adjusted the dash offset from 0 to 1, repeating back and forth. I could stagger the start timing of each animations to make look more like it’s being drawn, but I’m lazy

But we don’t have to use CSS alone to create this effect. As U said earlier, I’m lazy, so lazy that I didn’t want to manually add PathLength to the 20 or so paths that make up this image, so I wrote a loop to iteratively set all path lengths. 

We can also use the markup itself in our css rules. All I had to do was to copy the path from the svg wholesale and paste it into this path-offset property. By changing the offset-distance percentage, I can make it move back and forth on the path.

There are lots of libraries out there that use these same few concepts under the hood to achieve animations and interactions with SVGs. A general idea for things that are easy to play around with are simple line art drawings without fills. That’s all for my talk, you can access this talk and my weird programming hijinks from these links
