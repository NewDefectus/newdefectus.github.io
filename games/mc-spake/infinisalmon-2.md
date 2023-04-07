---
layout: mc-map
title: InfiniSalmon II - Arrival of the Guardians
short-title: InfiniSalmon II
categories: games mc-spake
index: 2

publish-date: 2015-08-23
mc-version: 1.10.2
planet-mc: https://www.planetminecraft.com/project/map-infinisalmon-ii---arrival-of-the-guardians/
---

{% include mcmap-imgpath.html %}

*InfiniSalmon 2* is the second adventure map I released. The map is a continuation of the story of [*InfiniSalmon*]({% link games/mc-spake/infinisalmon.md %}), and it's also a technical step-up from the first map, with a longer story, larger map area, and other more advanced mechanics.

In *InfiniSalmon 2* you play as the same night guard as in the first map, this time equipped with the InfiniSalmon as you hunt down Fog, the leader of the Guardians, who are plotting to take over the valley.

{% assign images = "hut.png desert.png scorpion.png jungle.png cave.png guardian-lair.png" | split: " " %}
{% include gallery.html %}

*InfiniSalmon 2* introduces several new characters to the InfiniSalmon series, including TheMint - SpakeMiner's brother, based off of the player character of my real-life brother; Alfred - a defector Guardian who acts as a [Wheatley](https://en.wikipedia.org/wiki/Wheatley_(Portal))-like companion for the player in the second half of the map; and Fog, the Elder Guardian antagonist of the series.

{% assign images = "themint.png alfred.png fog.png" | split: " " %}
{% include gallery.html %}

There are also a lot of Easter eggs in this map - like, *a lot*. Here's a few screenshots of them:

{% assign images = "" %}
{% for i in (1..6) %}
    {% assign image_name = "easteregg-" | append: i | append: ".png " %}
    {% assign images = images | append: image_name %}
{% endfor %}
{% assign images = images | split: " " %}
{% include gallery.html %}

I guess I had a phase of intense loving of Easter eggs after playing [The Talos Principle](http://www.croteam.com/talosprinciple/), a fantastic philosophical puzzle game with a knack for hiding silly, pop-cultury Easter eggs pretty much everywhere. There's actually an Easter egg in *InfiniSalmon 2* that's a direct adaptation of a secret room in The Talos Principle:

<img src="{{ image_dir }}/ttp-easteregg.png" style="width: 49%">
<img src="{{ image_dir }}/ttp-origin.png" style="width: 49%">