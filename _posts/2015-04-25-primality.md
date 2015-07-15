---
layout: "default"
category: "projects"
title: "HTML5 and JavaScript Primality Game"
thumbnail: "https://res.cloudinary.com/chrisvogt/image/upload/v1433759656/chrisvogt-me/thumb/primality.png"
excerpt: "Brower-based HTML/JavaScript experiment at creating a free, online mathematics game. Tests skills at identifying prime numbers."
demo: "http://chrisvogt.github.io/primality/"
source: "https://github.com/chrisvogt/JS-Primality-Experiment"
---

<div class="col-xs-12 col-md-4 pull-right">
  <img src="https://cdn.rawgit.com/chrisvogt/JS-Primality-Experiment/develop/screenshot.gif" class="img img-responsive" alt="JS Primality Experiment Screenshot">
</div>

[![GitHub release](https://img.shields.io/github/release/chrisvogt/primality.svg?style=flat-square)](https://github.com/chrisvogt/primality/releases)
[![GitHub license](https://img.shields.io/github/license/chrisvogt/primality.svg?style=flat-square)](https://github.com/chrisvogt/primality/blob/develop/LICENSE)
[![Travis](https://img.shields.io/travis/chrisvogt/primality.svg?style=flat-square)](https://travis-ci.org/chrisvogt/primality)

A browser-based numbers game in HTML5 and JavaScript. Tests your skill at identifying prime numbers in a given range.

It works by generating a container and filling it with elements for each number in a randomly generated range. Animate.css <a href="https://daneden.github.io/animate.css/" title="Animate.css on GitHub" target="_blank"><i class="pw-icon-link-ext"></i></a> is used to user interaction feedback by animated the elements in response to correct or incorrect selections.

When the user clicks on an element the contents are passed to a function that verifies whether the number is prime or not and attaches the appropriate animation to that element. Future updates might include keeping track of the available primes, counting down as they are discovered, and regenerating the list after all have been identified.
