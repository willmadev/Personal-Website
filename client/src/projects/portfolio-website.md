---
title: Portfolio Website
path: portfolio-website
date: 2021-04-13T06:42:52.225Z
summary: "I built my portfolio website and blog with Gatsby using the JAMstack
  architecture. "
featuredImage: /assets/2021-04-13-14_46_22-mail.png
---
While I previously had a personal website using a wordpress theme, it ran rather slow and didn't look very nice. I also wanted to learn React, and decided to redo my website using Gatsby. It was a good learning experience that taught me the basics of React well.

## Design

I designed this website using Adobe XD. I started by choosing colors and fonts to make a theme and color palette and then built the pages out. One thing I realized after the design process was that the font sizes I chose were too big since the design window was smaller than the actual size of the browser window. 

## Development

This was my first time using React, so there was a lot I needed to learn from components to JSX. I chose Gatsby because many people recommended it and other static site generators for simple websites that could be compiled at build time, which is easier to learn and faster to load. Two obstacles I encountered were internationalization and the blog section.

### Internationalization

I used the [React I18next plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/) to implement internationalization and add Chinese translations to my website. While the plugin was relatively straightforward, it still took me a bit to understand how it worked. However, once I figured it out, it was really easy to implement. 

In `gatsby-config.js` the following block needs to be put into the plugins list.

`gist:willmas-here/4504e930af36ef716d4698a326dae2a3#gatsby-config.js`

Next, create a folder `locales` in the `src` folder. This folder will house all of the translations. In the `locales` folder, create a folder for each language, and create JSON files that will house the actual translations. I created a JSON file for each page and a common JSON file for everything that was reused (headers, links, etc). Finally, I implemented the translations into the components. In the code block underneath I created a small example with the `useTranslation` hook.

`gist:willmas-here/4504e930af36ef716d4698a326dae2a3#page.js?lines=1-8` 

On each page with translations, there also needs to be a page query for the translations shown below.

`gist:willmas-here/4504e930af36ef716d4698a326dae2a3#page.js?lines=10-24` 

### Blog

For the blog, I used [Netlify's CMS](https://www.netlifycms.org/) which is free and not too difficult to implement. I originally wanted to code the backend of the blog and the form myself using NodeJS, but ultimately decided it was overkill and it would be much easier, faster and cheaper to just use Netlify's CMS and form handling. I basically followed the [tutorial](https://www.gatsbyjs.com/docs/tutorial/) Gatsby had on their website, specifically parts 4-8. It taught me the basics of queries with graphQL and how data worked in Gatsby. I had difficulty with images in the frontmatter using the Netlify CMS, since it outputted absolute paths from the assets folder. There's a [plugin](https://www.gatsbyjs.com/plugins/gatsby-remark-relative-images/) that converts those paths into relative paths usable by the `gatsby-remark-images` plugin, but I couldn't get it to work. Eventually I decided to manually change the paths as documented below, and instead of using querying `frontmatter` for the image, I would query `fields`.

`gist:willmas-here/4504e930af36ef716d4698a326dae2a3#gatsby-node.js` 

## Conclusion

I had a fun time working on this simple project and definitely not pulling my hair out googling bugs :). But in all seriousness, I do feel more prepared to tackle some more complicated projects using React in the future.