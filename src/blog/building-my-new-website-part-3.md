---
title: "Building my new website: An adventurer's log, part 3"
date: "2024-02-06"
description: ""
tags:
  - animation
  - css
  - portfolio
---

This is a post in a series about building my new website, check out [the previous post in this series.](/blog/building-my-new-website-part-2/)

## Day 5:

<figure>
{% cloudinaryImage 'personal-4.png', "The homepage, now in dark mode. There's some more copy there, and an early version of the close icon for each window.", 1024, 768, "(min-width: 62em) 38.25rem, 90vw", "lazy", "" %}
</figure>

It's been quite a while! Towards the end of 2023, I got sucked into project work. I felt a bit mixed on this, I was grateful to not be struggling at a time when the industry faced mass layoffs, but at the same time, it really pulled me away from all the 'extracurricular' work I like to do. Nevertheless, 4 months later, I'm finally out of the woods and back on track.

At some point, I managed to get a deploy going on Netlify so I could be sure that the whole thing actually builds. I'm not exactly sure when this occurred, but I am very proud of my past self. I'd much rather debug a build as the process goes along, plus it gives me something to show people.

I spent a significant amount of time working on the windows. There are slightly different behaviors for the windows based on things like it's state (whether it's minimized, maximized, or in its default mode), the size of the viewport and whether or not there are other windows present on the screen. Plus, each window accepts a wide variety of positioning and sizing props, which still need to work responsively. Getting all those combinations right is gonna take up even more time than I thought. I make a mental note to check in with some accessibility friends about the expected focus management behavior.

I suddenly remember that I want to switch over to [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values). I know I'm a little behind the curve on this one. I do often work on projects that involve Chinese, a language that can also be displayed vertically 

I build out the testimonials section in the style of a chat interface. After spending so long tinkering on little things, it's nice to do some CSS work where the little things fall into place! Note to self, go ask more recent clients for a testimonial.

I'm at a point where I'm starting to work on the styles for my long-form content. I spend way, way more time on this than I want to, but I am really picky about these things. It's all little things like tweaking the heading colors, the list styles, things like that. I love a good personal site where the text content just feels super polished and thought out. I'm only partially through this effort, but
