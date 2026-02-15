---
layout: default
title: Open Artifacts 11ty Starter
eleventyNavigation:
  key: home
permalink: /index.html
---
{%- set needsDoing = etw.needsDoing -%}

{% from "macros/hero.njk" import hero %}
{% set options = {
  dark: true,
  titleText: "Don't just change the world. <span class=\"text-secondary-600\">Evolve it.</span>",
  subtitleText: "<span class=\"text-primary-300\">The secret to a good life:</span> help us build a world in which we all thrive. Use your hard-won experience, knowledge and skills to help us re-imagine the world for a better future.",
  buttonText: "Start your Creative Practice",
  buttonLink: "/project/how-to-contribute/"
} %}
{{ hero(options) }}

{% section %}

## Evolution for Revolution

If Project 2025 taught us anything it’s that if you want ideas to be adopted in a time of crisis (real or not), you have to make sure those ideas are developed and ready to go when they’re needed. We create and develop open artifacts projects so that when an emergency occurs, we’re ready to supply a well-designed solution that moves the world forward.

It makes sense that we would look for readily available solutions in an emergency. Quick action is needed and there is no time for R&D. Buckminster Fuller realized that this reality could be used strategically to bring about change. He called it “emergence through emergency:” we work to design the next generation artifacts so they can replace the older, problematic ones. 

“Evolution for Revolution” is another way to look at it. Let’s evolve solutions that can drive the design revolution. 

## Getting Started

A creative practice is a simple set of steps that you can take to start using your best experience, knowledge and skills to improve the world. Here's how you can get started:

- Learn what it means to [begin your creative practice](https://www.jimapplegate.com/your-creative-practice/) with this article. I wrote this a few years ago and it remains one of the clearest explanations available of what we're trying to do and why we're trying to do it.
- Join our online community, [The Tensegrity](https://www.hylo.com/groups/tensegrity/join/rlwJ9x1qM7), even if you're just thinking about starting a creative practice. It's free and you can always delete your account later if you want.
- Check out our [Project Roadmap](/project/oa-roadmap/) section to see what projects you might be interested in. You're coming into this on the ground floor, as they say, so your unique experience, knowledge and skills are integral to making this work.
- Start your own creative practice by creating, contributing to or adapting an open artifacts project. Help spread the word so the community grows and there are more collaborative opportunities.

## Projects We're Working On

These are projects that are directly related to our goal of building up the infrastructure needed to create a thriving evolutionary design movement. We invite you to look at the work that needs to doing and see what might be yours to do.

### Evolve the World

[EvolveTheWorld.org](https://evolvetheworld.org) | [View on Github](https://github.com/jimappleg8/evolve-the-world)

Yes, this website and project. We have a lot of plans for how this project can be more effective, but we need your help to make it happen.

### Open Artifacts Initiative

[OpenArtifacts.org](https://openartifacts.org) | [View on Github](https://github.com/jimappleg8/openartifacts-org)

The Open Artifacts Initiative will define what open artifacts are, provide information on licenses, and otherwise promote the creation and use of open artifacts. We want this to be a place people can go to learn about open artifacts because we think they will have a lot of questions. We could use a lot of help moving this from an idea to a useful website.

### Open Artifacts Hub

[OpenArtifacts.com](https://openartifacts.com) | [View on Github](https://github.com/jimappleg8/open-artifacts-hub)

This project builds and maintains a website listing open artifacts projects so that cultural creators can more easily find work that needs doing as part of their creative practice. We need help with both building a flat-file database system and populating that database with information about existing open artifacts projects.

### Evolutionary Design Group Manual

[View on Github](https://github.com/jimappleg8/evolutionary-design-groups)

Evolutionary design groups are where the rubber meets the road in evolutionary design. Our creative practices and open artifacts are just playing with ideas until we actually implement them in the real world. In an evolutionary design group, members agree to use part of their creative practice learning about the needs of their local community and adapting open artifacts projects (or creating new ones) to meet those needs. This project intends to create a resource manual to help these groups form and thrive.

{% endsection %}