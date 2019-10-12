---
layout: posts
title: "Project Dawn (From Old Portfolio)"
date: "2017-10-11"
---

My first foray into Internet Of Things, this was quite a leap of faith for me. A friend (Hi Wei Lun!) asked me "is it possible to feel what it is like to be in another persons shoes?" This would be the start of my involvement in Project Dawn.

Project Dawn aimed to present a novel and innovative experiential approach to learning about the stigma surrounding mental illnesses. Essentially, Project dawn was an interactive exhibition. Powered by an Arduino Mega (clone), I had android phones connected via tcp sockets to my computer which was acting as the command center of the whole set up. The android phones would play a narration, asking participants to interact with various objects and would pause until they did the required action, after which the mobile app would continue playing the narration

For Interaction with the objects, I used RFID tags and Sensors. When the object was picked up, the Sensor would stop reading signal from the RFID. The mega would then listen for when the object was placed back on again.

To track which room the participants were in, I set up laser pointers wired to be permanently on, and put LDRs on the other side. This crude set up was due to my failure at implementing an Indoor Positioning System with Bluetooth, and running out of time. I could have used better forms of Proximity sensors, but waiting for delivery would have been too long. I intend to come back to IPS one day.

Unfortunately I was not wise enough to take pictures of the set up, but here are a couple of pictures of the event:

![dawn](./dawn1.jpg)
![dawn](./dawn2.jpg)
