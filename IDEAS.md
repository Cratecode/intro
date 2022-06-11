# Ideas

This is a list of ideas for future lessons/sections.

# Todo

I'd like to figure out a good way to implement big projects which progress. One way might be to move README.md to a separate location (like config.json) and allow multiple lessons to be based on the same project. That would make README.md editing impossible, however, so it'll take a bit of thought to formulate a complete system for handling everything.

One way to avoid this issue would be to make README.md uneditable in lesson-based projects, making sure that user's instructions will never disappear on them. This also carries the benefit of auto-updating READMEs, just like how config.json files can have mistakes in them corrected after users have already started a lesson.

The other consideration is how to best handle shared-projects in lessons. One way might be to create a "base" lesson, then have lessons based on that lesson instead of a project. That way, lessons can use their base lesson for their project data and apply their own README.md and config.json on top of it. The lessons have no data except for README.md and config.json, so they can't modify or access the data from the user's previous lesson.

## TS

For a lot of these, I want to introduce users to TypeScript later on, and move them towards using it.

## P5

P5 starts off basic JavaScript and the idea of making art/ui with code.

## Console

Console should go to backend at some point, and should also include more advanced console applications.

## Console (more advanced)

I'd quite like to do more advanced console topics, and eventually, get into ideas like compilers and languages (although this will be very far off). Something more realistic might be making some utility programs (I need to think of ideas for these) and basic parsing. I think for more advanced console applications, I'd want one of the other paths to be completed first, so users are more familiar with JavaScript.

## Backend

I'd like to start off with express, and have some basic frontends setup for interacting with the backend. Then, users will create the backend services to make the applications work.

## Frontend

Frontend should come after the p5 stuff is complete, and will start off with basic HTML + JS + CSS. After that's all settled, it would be good to branch off into more modern web technologies such as React, Angular, and Vue. To start off, I'll probably just use React.

## React

React can start off with re-doing HTML things in React. It'll work with React 18 functional components and hooks in order to be as up-to-date as possible.

## NextJS

After React + Backend, it'll be good to go through NextJS, combining the two together and dealing with custom express servers.
