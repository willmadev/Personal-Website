---
title: Group DJ
path: groupdj
date: 2022-06-19T02:49:58.250Z
summary: A group queue for Spotify using NextJS, MongoDB, and the Spotify Web API.
featuredImage: /assets/group-dj.png
---
Have you ever been on aux playing music, when your friends start throwing you dozens of songs to add to the queue? This project aims to relieve your burden by allowing users to add songs to a communal queue themselves. GroupDJ is designed to be projected on a TV, and guests can scan the QR code to join the session. From there, they can add songs to a queue that is played through the TV.

## Design

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4uuO7KlRPgzrCWfrclF0AL%2FDesign%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

I recently learnt to use [Figma](https://www.figma.com), and decided to use it for the wireframe and design of this project. I  opted for a more minimalist (maybe slightly plain) design, because my goal with this project was to get more familiar with the [NextJS](https://nextjs.org/) framework and full-stack development. 

## Stack

For this project, I used NextJS with Typescript for the frontend and backend, with a MongoDB Atlas Cluster as my database. I chose NextJS primarily because it seemed like a convenient and developer-friendly way to approach full stack development, and deploying the app on [Vercel ](https://vercel.com/)was convenient and free. However, as I started to get into the queue and playback functionality, I started to notice some limitations. I found separating frontend and backend logic a bit counter-intuitive, especially when calling Spotify APIs. Additionally, it was difficult to sync the playback status in real-time and send messages back and forth between the front and back-end, since Vercel deploys on serverless functions which do not support websockets. I got around this obstacle by using [SWR](https://swr.vercel.app/) and handling more logic client-side on the host client. Apart from these pitfalls, the developer experience with NextJS was good, with many complex features built in. However, the nature of my project meant that I did not need these features like SSG. Therefore, if I were to start this project again from scratch, I would choose to separate the front and back end with CRA and Express servers. 

## User Flow

I found some of the user flows a bit too complicated to just visualize in my head, so I decide to draw it out on paper, and then chart it using Figma's FigJam feature. This helped me to better understand some of the more complex flows like authorization with Spotify.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQJwparl90Cgo7OhrEbhQi9%2FUser-Flow%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

## Authorization

I found authorizing a user with Spotify to be really challenging at first. Since the client secret is stored server-side in an authorization code flow, I needed to call my own backend API to authorize with Spotify. However, to call the Spotify APIs, I needed the access token from the client, so it quickly became a big jumble of calls to different APIs just to play a song. This could have been mitigated by handling session logic server-side instead of on the host client, but I could not find a good way to update the backend in real-time without websockets.

## Conclusion

Ultimately, working on Group DJ was a positive experience for me. I learned a new framework, as well as the limitations of this technology. I am also much more versed in authentication and authorization. Although this project is deployed on [groupdj.willma.me](https://groupdj.willma.me), I have not taken the app out of development mode on the Spotify Developer Dashboard, because it has to be approved by the Spotify Team, and I'm still missing a few feature to comply with Spotify's [Developer Policy](https://developer.spotify.com/policy/complying/). However, it works with my own account, and I am satisfied leaving this app as a proof of concept, since I have already learned so much through this experience.



Deployed App: <https://groupdj.willma.me/>

Source Code: <https://github.com/willmadev/Group-DJ>