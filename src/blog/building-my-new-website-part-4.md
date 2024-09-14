---
title: "Building my new website: An adventurer's log, part 4"
date: "2024-03-06"
description: "Finally making headway"
tags:
  - css
  - portfolio
draft: true
---

This is a post in a series about building my new website, check out [the previous post in this series.](/blog/building-my-new-website-part-3/)

## Blog page

Whenever I'm feeling like progress has stalled on a progress, I try to work on things that I know are quick wins. In this case, it's making new pages! I throw together the main blog and blog tag pages really quick with components and layout primitives that have already been built. Finally, I feel like I'm at the point where things just flow together based on previous work.

I have added a component for the [a11y-webring.club](https://a11y-webring.club/). I'm not presently a member but would like to join once I get my new site running. Membership requires a public accessibility statement, so I make a mental note to draft one at some point.

## Theming

I do a whole bunch of work with the color variables to flesh out the light and dark themes a bit more. I probably should have waited till I built out a functioning light and dark theme, but I use the tried-and-true method of commenting out all the variables I do not need until I get to a point where I'm happy with.

## Code styles

I was delighted to find that Astro comes with code syntax highlighting out of the box, but unfortunately, none of those out of the box themes met contrast requirements. Making accessible coding themes is very difficult, as you want the colors to have enough contrast between each other, as well as the background, but also, not be so jarring that it's hard to read. I found this [online tool for making VSCode themes](https://themes.vscode.one/your-themes) and I just quickly slapped some of my website colors together so that I could at least have something that worked for the blog.

## Blog post styling

Back to the more difficult task of sorting out the blog post content. I have a few things that I need to sort out when migrating my blog post content. First up, I have some small HTML pieces I need to style. This isn't too bad either way, just a matter of adding CSS to those classes, phew.

I also need to convert my Cloudinary image Nunjucks snippet into an other format. I consider it necessary for performance to serve responsive, optimized images to the end user, and I used to rely on my Cloudinary Nunjucks snippet to do so. Although Astro does support optimizing your local images automagically in markdown, and the documentation currently implies that it does also do this for remote image, an Astro team member has informed me that it is currently not the case.

Astro does support MDX out of the box, which let me use components (framework or web) in my post, but I had noticed that it would make it an order of magnitude more complicated to [output the full post in your RSS feed if you used MDX.](https://scottwillsey.com/rss-pt2/) In short, Astro exposes a method to get the HTML from a post if you're using vanilla markdown, but not MDX. This is the first time I've hit major limitations with Astro, which is not unexpected (every framework has limitations!), but it definitely took the wind out of my sails.

Further complicating matters, a small handful of my posts have some minor scripting. This is small things, like a button to slow down videos, and a transcript that has timestamps that link to the player. The use of View Transitions and Svelte hydration means that making this all work is much more difficult than dropping 20 lines of script into a blogpost. I tinker around a bit with adding event listeners for component mounting and page swapping, but the Youtube player example is especially finicky due to requiring an external script event as well. In the end, I decide to ditch the linked transcript numbers, and opt for converting the little demo videos into a Web Component for greater portability in the future.
