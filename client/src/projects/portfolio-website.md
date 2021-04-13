---
title: Portfolio Website
path: portfolio-website
date: 2021-04-13T06:42:52.225Z
summary: "I built my portfolio website and blog with Gatsby using the JAMstack
  architecture. "
featuredImage: /assets/2021-04-13-14_46_22-mail.png
---
## Design

I designed this website using Adobe XD. I started by choosing colors and fonts to make a theme and color palette and then built the pages out. One thing I realized after the design process was that the font sizes I chose were too big since the design window was smaller than the actual size of the browser window. 

## Development

This was my first time using React, so there was a lot I needed to learn from components to JSX. I chose Gatsby because many people recommended it and other static site generators for simple websites that could be compiled at build time, which is easier to learn and faster to load. Two obstacles I encountered were internationalization and the blog section.

### Internationalization

I used the [React I18next plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/) to implement internationalization and add chinese translations to my website. While the plugin was relatively straightforward, it still took me a bit to understand how it worked. In the code block underneath I created a small example using the `useTranslation` hook.

`gist:willmas-here/4504e930af36ef716d4698a326dae2a3#page.js`

In `gatsby-config.js` the following block needs to be put into the plugins list.

`gist:willmas-here/4504e930af36ef716d4698a326dae2a3#config.js`

### Blog