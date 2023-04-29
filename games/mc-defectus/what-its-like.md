---
layout: mc-map
title: What It's Like
categories: games mc-defectus
index: 1

publish-date: 2016-10-24
mc-version: 1.11.2
planet-mc: https://www.planetminecraft.com/project/what-its-like-3830359/
mc-maps: https://www.minecraftmaps.com/adventure-maps/what-its-like
---

{% include mcmap-imgpath.html %}

*What It's Like* is the first map I released under the name Defectus. It's a semi-short walking simulator where the player traverses a series of descending "floors," where each floor simulates (in a very abstract sense) an affliction of some kind - these being, in order: blindness, deafness, muteness, depression, and death.

{% assign images = "blindness.png deafness.png muteness.png depression.png death.png" | split: " " %}
{% include gallery.html %}

The first 3 levels are mostly experimental, I was just curious to see what it would look like to simulate different disabilities in Minecraft. The fourth level was inspired by experiences I went through during the last few months I went by the name SpakeMiner.

Both tonally and conceptually, I think *What It's Like* is quite jarringly different from anything seen in the [SpakeMiner maps]({% link games/mc-spake/index.md %}) that I published before. This was intentional, as I wanted to distance myself from the SpakeMiner works both in style and in subject matter. To that end, I also wanted the behind-the-scenes layout of the map to be completely unrecognizable from the behind-the-scenes look of the SpakeMiner maps - which was often very messy. For example, here is a screenshot of the command block system in [*Focused Location 3*]({% link games/mc-spake/focused-location-3.md %}):

<img src="{{ image_dir }}/cmd-blocks-fl3.png">

Very messy, very ugly, very SpakeMiner-y. So for *What It's Like* I wanted to build it differently. I came up with a tape-like system where command blocks were laid out in straight lines, with a marker entity moving across these lines, activating them in succession with a scoreboard timer to create delays between events. The result is what you see here:

<img src="{{ image_dir }}/cmd-blocks-wil.png">

This system also ended up being used in [*Arrendor*]({% link games/mc-defectus/arrendor.md %}), though with some modifications.

In hindsight, there was one detail that remained from the SpakeMiner maps which I neglected to lose (or maybe just couldn't handle losing): the inclusion of music from the excellent [soundtrack](https://dualryan.bandcamp.com/album/the-beginners-guide-soundtrack) of [The Beginner's Guide](https://thebeginnersgui.de/), of which I was, and remain to this day, a huge fan (both the OST and the game itself). This map makes use of the track "Shutter," and I believe [*Focused Location*]({% link games/mc-spake/focused-location.md %}) used the track "Va" near the beginning.

On the subject of The Beginner's Guide, *What It's Like* also lifts a design element directly from the game's third chapter for the corridors:

<img src="{{ image_dir }}/corridor-example.png" style="width: 49%">
<img src="{{ image_dir }}/corridor-example-tbg.png" style="width: 49%">

*What It's Like* also contains the first appearance of the NPC that would later be nicknamed "Bill" in *Arrendor*. Internally this NPC is referred to as BDM (the initials of the first 3 levels - Blindness, Deafness, Muteness). The original idea was for the character to appear in every Defectus map, each time with a different role, and he would act like a kind of benevolent G-Man, linking the maps somehow. This idea kind of fell apart with [*Internal Admiration*]({% link games/mc-defectus/internal-admiration.md %}), though.

<img src="{{ image_dir }}/bdm.png">