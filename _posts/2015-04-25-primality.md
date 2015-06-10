---
layout: "default"
category: "projects"
title: "HTML5 and JavaScript Primality Game"
thumbnail: "https://res.cloudinary.com/chrisvogt/image/upload/v1433759656/chrisvogt-me/thumb/primality.png"
excerpt: "Brower-based HTML/JavaScript experiment at creating a free, online mathematics game. Tests skills at identifying prime numbers."
source: "https://github.com/chrisvogt/JS-Primality-Experiment"
---

<img src="https://cdn.rawgit.com/chrisvogt/JS-Primality-Experiment/develop/screenshot.gif" width="340" alt="JS Primality Experiment Screenshot" class="img img-thumbnail pull-right" /> A browser-based numbers game in HTML5 and JavaScript. Tests your skill at identifying prime numbers in a given range.

It works by generating a container and filling it with elements for each number in a randomly generated range. Animate.css <a href="http://daneden.github.io/animate.css/" title="Animate.css on GitHub" target="_blank"><i class="pw-icon-link-ext"></i></a> is used to user interaction feedback by animated the elements in response to correct or incorrect selections.

When the user clicks on an element the contents are passed to a function that verifies whether the number is prime or not and attaches the appropriate animation to that element. Future updates might include keeping track of the available primes, counting down as they are discovered, and regenerating the list after all have been identified.
