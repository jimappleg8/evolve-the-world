---
layout: sidebar-page
title: '🌍 Wall of Cultural Creators'
description: 'A list of people who are committed to building a world that we can all thrive in.'
eleventyNavigation:
  key: Wall of Cultural Creators
  parent: project
  order: 3
tags: project
navKey: project-section
---
{% set signers = etw.signers %}

{% section %}

# The Cultural Creator's Wall

This page is still under development.

Thank you for your patience.

{#

These are just some of the people who’ve taken the Cultural Creator’s Pledge:

{% for signer in signers %}
- {{ signer.name }}
{% endfor %}

===

Want to join them? [Sign the Pledge](/etw/project/sign-the-wall.html)
#}

{% endsection %}