---
layout: mc-map
title: Arrendor
categories: games mc-defectus
tags: star
index: 2

publish-date: 2017-06-07
mc-version: 1.11.2
planet-mc: https://www.planetminecraft.com/project/arrendor/
mc-maps: https://www.minecraftmaps.com/adventure-maps/arrendor
---

{% include mcmap-imgpath.html %}

*Arrendor* is the second map I made as Defectus. It's the longest and biggest map I've ever made, at 771 megabytes (unpacked), 8 months of development time, and about an hour and a half of gameplay.

{% assign images = "stadium.png city.png park.png" | split: " " %}
{% include gallery.html %}

*Arrendor*'s plot is comprised of two interwoven storylines: the first is a trade war between two phone companies, Andresite (a spoof of Android/Google) and Sappling (Apple), fighting over advertisement in the South Pole; and the second is an exploration of Arrendor, a city in Antarctica hidden from the rest of civilization.

In *Arrendor* you play as Erin Carabeen, a teenager recruited by the Andresite Agency Organization to sell phones in Antarctica and defeat the evil Sappling (whose ultimate motives involve mind-controlling the world). As part of her mission, a man named Bill (the unnamed "BDM" character from [*What It's Like*]({% link games/mc-defectus/what-its-like.md %})) finds her and brings her to Arrendor, where he looks after her and introduces her to various foreign concepts, including yanuers (from Latin [*iānuae*](https://en.wiktionary.org/wiki/ianua#Latin) "gates") - vertical teleporters which function like elevators - and voliants (from Latin [*volitans*](https://en.wiktionary.org/wiki/volitans) "flying") - floating disks that are used as transportation in the city.

{% assign images = "furnex.png furnex-av.png plane.png antarctica.png bill.png city-2.png cave.png stadium-2.png park-2.png snowglobe.png" | split: " " %}
{% include gallery.html %}

Arrendor was quite a challenge to make. As I said, it was the biggest map I'd made by a long shot, taking approximately 8 months to create. Throughout development I used many [MCEdit](https://www.mcedit.net/) filters - and even wrote some of my own in Python. For example, the city of Arrendor and the city shown in the beginning of the map were generated with a modified variant of [Adrian Brightmoore's GFX filter](http://www.brightmoore.net/mcedit-filters-1/gfx). I also made a filter to create the Snowglobe and the antenna shown in the Builder app.

<img src="{{ image_dir }}/mcedit.png">

In addition, I used [WorldPainter](https://www.worldpainter.net/) to create the valley in the beginning and Antarctica itself, for which I calculated, in respect to the cloud height, how big the continent should actually be. It ended up being about a 2 kilometre to 1 block ratio, with the continent being a circle of diameter 2048 blocks (4,500 km in real life) and the tallest hills reaching a height of 10 blocks (the tallest Antarctic mountain in real life being 4,892 metres high). The final product was, frankly, an utterly boring depiction of Antarctica; I guess that's what you get when you're going for realism. Luckily we only see a few glimpses of it in the map itself.

<img src="{{ image_dir }}/antarctica-2.png">

The Furnex 5X phone, as well as its "Agent Variant" the Furnex AV, were based off the now-discontinued [Nexus 5X](https://en.wikipedia.org/wiki/Nexus_5X) phone, among the last phones Google sold before their Pixel lineup. It was the phone I had at the time I was making the map, and so I could very accurately measure its various features like the screen size, the placement of the speaker and flashlight, etc. As a result, it ended up looking extremely faithful to the Nexus 5X, almost uncannily so. Just to get the point across, here's a comparison I whipped up using the original models:

<img src="{{ image_dir }}/phone-nexus.png" style="width: 49%">
<img src="{{ image_dir }}/phone-furnex.png" style="width: 49%">

The map became so long that to ease playtesting, I had to implement a mechanic that let me artificially skip the first half of the map and plop in in the middle. There are some other behind-the-scenes shenanigans that had to happen to make the map work - for instance, if you remember from [*What It's Like*]({% link games/mc-defectus/what-its-like.md %}), I'd come up with a system to organize the command blocks into a tape of rows, with a pointer moving across the tape and activating each row in succession:

<img src="{{ image_dir }}/cmd-blocks-wil.png">

For *Arrendor* I wanted to use the same system, however midway through development I found an issue with it. Because *Arrendor* was so much longer than *What It's Like* and had so much more dialogue than it, the tape became so long that it actually flowed out of the rendered chunks area, meaning some of the tape wasn't loaded and thus couldn't be activated. To handle this, I changed the system up a little bit by moving the part of the tape that wasn't loaded in front of the original tape, so that it now became 2 strips placed one in front of the other. Later the second strip ran out of space, and I had to create a new strip, and another one, and so on. It ended up looking like this (this is a screenshot from the development phase):

<img src="{{ image_dir }}/cmd-blocks-middev.png">

Eventually the strips themselves began flowing out of the rendered area as well, in that if I added another strip it would be too far away from the redstone area to be loaded. So to remedy this I ended up making the tapes more compact by "folding" them upwards, so that each tape was only 2 blocks wide and thus they could be fitted closer together. Here's the final result:

<img src="{{ image_dir }}/cmd-blocks-arrendor.png">

In retrospect, I think *Arrendor* works best technically and in way of worldbuilding. The mechanics and textures are very clean, and the conceptual idea of the lost city of Arrendor with all its foreign technology, though not practically plausible, is pretty interesting and imaginative. Like all of my maps, though, it still has major flaws - the dialogue is not that great, there are some glaring plot holes, and Bill's walking is at times atrociously slow. The city of Arrendor also feels very barren; I think it would've been a lot more believable if we saw more people other than Bill.

That being said, I'm still quite proud of the map, especially given that I'd made it when I was 12/13 years old. Of all the Minecraft maps I made, both as SpakeMiner and Defectus, *Arrendor* definitely stands out as the best, and it's the one I have the most fun revisiting.