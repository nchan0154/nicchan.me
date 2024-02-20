---
title: The types information available on the internet and why AI is bad for all of them
date: "2024-02-20"
description: "Warning, the outlook is not positive."
tags:
  - accessibility
  - thoughts
---

The Merriam-Webster dictionary defin- no, don’t worry, this post isn’t going to start that way! However, I do need to get some terminology out of the way lest the reply-guys come for me. What’s colloquially known as Artificial Intelligence (AI) generally refers to large language models (LLMs), used to generate text. This post only discusses the effects of these LLM based tools and not other applications of AI such as image or video generation, machine learning, and etc. Additionally, this post doesn’t even begin to touch on the ethical and environmental issues of LLMs, a topic that is covered at length by many other more knowledgeable folks.

<hr>

Those who know me probably know that I spend a disproportionate amount of time thinking about the state of the Internet. You don’t have to be chronically online to know that it feels harder than ever to get the information you’re looking for. LLM-generated content is not the sole reason behind this recent phenomenon, but it certainly plays a key role in the sharp downward trend in the quality of information available these days. This article aims to cover the key kinds of information that we as internet users tend to seek out, and how AI is ruining all of it.

## “Anecdata”, Opinions and Reviews

I’m definitely the kind of person that needs to thoroughly research any significant potential purchases before I make them. I have a list of sources I feel I can trust for different kinds of purchases, but I also seek out reviews from complete strangers, often from niche online communities. Although I don’t tend to take any single review as the sole reason why I should or shouldn’t buy something, this kind of anecdata often provides a different kind of information that’s not always evident in a product’s claims.

For example, if I’m looking to buy an ergonomic chair and I read a review that says “I’m a 6’3” man and this chair is absolutely perfect for my size,” this anecdote provides helpful information to me in a way that simply reading the measurements does not.

I shouldn’t need to explain why LLM-generated reviews, testimonials, recipes etc. are worse than useless. The main value from this kind of information comes from the fact that another living, breathing human has tried it. You may not necessarily agree with their take, but a made-up review is essentially garbage that litters the landscape of information.

[Fake reviews were already a problem](https://www.bbc.com/news/technology-65881800) when you needed a human to write them, and now that you’ve cut out another step in the process of generating fake reviews, the problem is worse than ever. A significant amount of time will be spent trying to fight and filter out the bad actors who have no problem with polluting the internet for a quick buck.

## Factual Information

I’ve been around long enough to know that the line between ‘objective truth’ and ‘subjective’ is a lot blurrier than some might realize, but for the purposes of this section, I’m calling what is generally agreed upon by the vast majority of people to be ‘factual information.’

Questions like “what time is this flight departing” and “are grapes safe for humans to consume” may differ slightly in terms of how many people can come to an agreement, but there is some general consensus that can be reached.

Sometimes, people just want information presented to them as quickly and as accurately as possible. At first glance, it may seem like LLMs are great for this. We’ve all seen cases where asking a LLM a question returns information that is both accurate and detailed. I have no doubts in my mind that LLMs are capable of providing information that is useful to users, some of the time.

What concerns me the most is when things go wrong. People often understand LLMs to be all-knowing, and it doesn’t help that they are often marketed this way. What some people do not know is that content summarized by AI may contain ‘hallucinations’, AKA factual inaccuracies, dressed up in a cutesy term to make their existence less egregious.

The rate of hallucinations appears to be far higher than some might believe. Vectara, an AI company (take this with a grain of salt!), has created a [hallucination evaluation model](https://github.com/vectara/hallucination-leaderboard/) which aims to test the rate of hallucinations across popular models. To summarize their methodology very briefly, they used different LLMs on their most precise setting to summarize a specific set of documents. The hallucination rates ranged from **3% - 16%**, which doesn’t sound too horrible in terms of raw numbers, but should not be an acceptable margin of error on factual information.

Josh Collinsworth sums it up really well in his blog post, [I worry our Copilot is leaving some passengers behind](https://joshcollinsworth.com/blog/copilot).

> Why do we accept a product that not only misfires regularly, but sometimes catastrophically?
>
> Let’s say you went out and bought the new, revolutionary vacuum of the future. It’s so amazing, it lets you clean your whole house in half the time! (Or so the vacuum’s marketing department claims, at least.)
>
> Let’s say you got this vacuum home, and sure enough: it’s amazing. It cleans with speed and smarts you’ve never seen before.
>
> But then, you start to realize: a lot of the time, the vacuum isn’t actually doing a very good job.
>
> You realize you spend a lot of time following it around and either redoing what it’s done, or sending it back for another pass.
>
> In fact, sometimes, it even does the exact opposite of what it’s supposed to do, and instead of sucking up dirt and debris, it spews them out across the floor.
>
> You would find that entirely unacceptable. You would take that vacuum back to the store.

If I had a watch that told me the incorrect time 3% of the time, that watch would be useless to me. If I used a travel agent and they gave me incorrect information, resulting in me having to pay more for my flight tickets, I would never use them again. The fact that Air Canada’s AI chatbot has made this very error on [their own website](https://vancouversun.com/news/local-news/air-canada-told-it-is-responsible-for-errors-by-its-website-chatbot) and they refused to take responsibility for this mistake is ludicrous.

We as consumers should not accept companies rushing to implement AI chatbots in order to save on labor costs, and we especially should not accept those same companies refusing to take responsibility for the incorrect information that chatbot spews.

While there has been progress in cutting down on hallucinations, the remainder of the work is an uphill battle. You see, LLMs have an element of ‘randomness’ built in. To simplify a complex concept that is [better explained by others](https://medium.com/@mariealice.blete/llms-determinism-randomness-36d3f3f1f793), LLMs are not deterministic. Putting the same input into an LLM will result in slightly different outputs each time. This is part of the appeal, as it allows people to mass-generate content that is ‘unique’ each time, but results in a non-zero percentage chance for error.

I genuinely fear that one day, someone in a moment of crisis is going to rely on LLM-generated content for a life-or-death question such as ‘how should I help my drunk friend who passed out’ or ‘what should I do when someone is having a seizure’ and get inaccurate results. Even people who would normally think critically about a piece of information may be vulnerable to incorrect information in a moment of crisis. Letting something that cannot be fully verified or controlled run loose to spew misinformation seems [counter to our jobs as designers, designing for people.](https://medium.com/net-magazine/designing-for-crisis-9cab10b4c519)

## Interpretive information

LLMs have a really bad time with information that has inpretive intent behind it. For example, blind people rely on alt text, a written description of an image, so that their screen readers can read it out to them in lieu of being able to see the image. Certainly, some alt text is better than no alt text, but AI-generated alt text typically lacks the context behind why an image is included in a site.

For example, take [this image from Shutterstock](https://www.shutterstock.com/image-photo/group-asian-people-enjoy-fun-outdoor-2217373711). (I’m linking it so as to avoid paying to include the image on this site, sorry!) The included description for this image is as follows.

> Group of Asian people enjoy and fun outdoor lifestyle hiking and camping together on summer travel vacation. Man and woman friends having breakfast drinking brewed coffee near the tent in the morning.

Certainly, this is a valid description for this image. I have no idea if this was human-written or AI-generated, but I would say it is perfectly serviceable for the context of a stock photo website. However, this description does not necessarily represent the reasons why people might include this image in their own content.

- A site selling this particular coffee setup might say: “A group of friends use the portable Coffee Maker 3000 with our kettle in brushed steel in the great outdoors.”
- If this image were posted to social media, it might say: “Me and my best friends John, David and Beth enjoying our coffee while glamping at the local wetland camping reserve.”
- If an extreme anti-camping environmentalist site were to post this image, it might say “Group of people engaging in the environmentally harmful practice of camping on federally-protected nature reserve.”

There are as many ways to describe this image as there are ways to use it in context. Even if AI-generated alt text is accurate, it lacks context. Things like memes and jokes are especially ‘hard’ for LLMs to understand (written with irony here, given that they don’t actually have a consciousness!). To illustrate this point, I asked Copilot to explain the first joke I could find on the /r/Jokes subreddit.

> Me:
>
> Explain this joke:
> My teeth were stained, so the dentist asked me, “Do you smoke or drink coffee?” I told him I drink it.
>
> Copilot:
> Okay, I can try to explain the joke to you. The joke is based on the ambiguity of the word “it” in the sentence “I drink it”. The dentist is asking the person if they smoke or drink coffee, because both of these habits can stain the teeth. The person replies that they drink it, which could mean either coffee or smoke. The joke is that the person is implying that they drink smoke, which is absurd and nonsensical. The joke is meant to be funny because of the unexpected and ridiculous answer. I hope this helps you understand the joke better.

Copilot’s explanation is partially correct. It correctly states that the joke is based on the dentist’s wording being ambiguously interpreted as either smoking or drinking **coffee**. However, it misses the mark in saying the person is implying they drink smoke.

I hope the joke example clarifies why **interpretation** is so important when it comes to understanding information. Sadly, I know there are entire masses of people out there who are excited to give even less of a shit about disabled people than they already do. They are excited to automate this alt text problem away so they don’t have to spend a single second thinking about what they as a sighted user do not benefit from. They don’t realize that crafting alt text is an art, I’m not ready to hand over art to the robots just yet.

## Educational content

There’s a type of content that I’m having a hard time describing in a short phrase. Essentially, by ‘educational content’, I’m referring to content that does have factual elements, but the primary value of the content is that it’s presented in a way that really enhances a reader’s understanding of the material. It’s not necessarily content that comes from educational instutions. The author may have put their own spin or understanding on it in a way that reading a summary of the information misses out on a lot of the value it brings.

I consider [Ahmad Shadeed’s piece on Designing better target sizes](https://ishadeed.com/article/target-size) to be an absolute masterpiece in this genre. The article is chocked full of interactive examples, techniques and caveats that is helpful to a wide audience, regardless of background. The language is simple enough for a reader with no prior knowledge to understand, but the information is detailed enough that experienced readers can pick up a new insight or two. It’s what I aspire to with my technical writing.

As someone who’s dabbled in writing educational content, it’s not easy to create content like this, with good articles taking days, weeks or even months to finish. The thing is, it’s already really difficult to find people willing to pay for this content. Inside the tech bubble I work in, with the exclusion of paid software, there’s often not enough money going around to pay technical writers. Although technical writers must be both technical enough to understand the subject matter on a deep level, and good enough of a writer to be able to communicate that knoweldge, it’s simply [really hard to get the same rates](https://whopaystechnicalwriters.com/) you would for writing about code as you would for writing actual code.

From what I’ve seen, LLMs aren’t good enough to create something as helpful as a good piece of human-authored technical writing, period. The problem is that people believe that it can, thus shrinking the already tiny pool of jobs for good technical writers. Even MDN, a resource that I’d wager every single web developer has looked at at one point, felt that [AI was worth implementing on their docs](https://www.theregister.com/2023/07/06/mozilla_ai_explain_shift/), though it was met with much public outcry. In an age where documentation is being replaced with discord servers, it feels like the trajectory of software development is moving towards reviewing the code output of AI, and when the aforementioned code doesn’t run, ask the AI chatbot for help. Pretty bleak.

## Conclusion

Unfortunately, the cat (or the Bullshit Generator) is already out of the bag on this one. We can’t really take it back at this point, and the message from the technocrats is clear, adopt or fall behind. The personal impact of failing to adapt can be devastating when your entire livelihood depends on meeting a certain level of producitvity. My only bit of advice is to push back in your own way. Whether it be fighting unethical use of AI at your workplace, occasionally writing a blog post, curating a list of human-authored content, or logging off, my hope is that we all do what we can to stem the rising tide.

## Related Reading

- The exact scope and scale of the problem is difficult to determine, but if [these Amazon listings](https://www.theverge.com/2024/1/12/24036156/openai-policy-amazon-ai-listings) are anything to go by, we are in a world of trouble.
- [Josh Dzieza](https://www.theverge.com/c/23194235/ai-fiction-writing-amazon-kindle-sudowrite-jasper) dives into the world of AI-generated fiction
- AI isn’t explicitly mentioned in this piece entitled ‘[How Google is killing independent sites like ours](https://housefresh.com/david-vs-digital-goliaths/)’, but if the quality of the content doesn’t matter, it’s only a matter of time
- Headnodding along to [this piece by Nicolas Magand](https://thejollyteapot.com/2024/02/7/what-bothers-me-about-chatgpt-and-a-I)
- This mastodon post by [Heather Buchel](https://hachyderm.io/@hbuchel/111938325310418356) is short, but apt.
- Dave Rupert has [A dozen short thoughts about AI](https://daverupert.com/2024/02/robo-barf/)
- I actually came across [this post by Joe Dolson about AI-generated alt text](https://www.joedolson.com/2023/06/accessibility-and-artificial-intelligence/) after I wrote the section on it, it adds a lot of valuable Wordpress development context.
- [Andy Bell](https://piccalil.li/blog/a-global-documentation-platform/) digs into the problem of MDN
