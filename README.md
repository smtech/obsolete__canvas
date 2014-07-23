# This repo has been archived

This is an archival repo, maintained so that previously posted links will not break. All of the content in this repo has been distributed across smaller, more manageable repos. In conversation with other Canvas admins, I have described three levels of Canvas customization:

  1. Using the Canvas GUI to connect up stylesheets for branding purposes or or prefab JavaScripts to make specific tweaks
  2. Using the API to run more intensive scripts (but this is all still documented and above-board)
  3. Really abusing the well-structured Canvas XHHTML for your own purposes

I have organized our repos into these three "levels" of modification:

## "Level 1" Customization

I just want to use the GUI to hook a couple things up.

  - [smcanvas-branding](https://github.com/smtech/smcanvas-branding) -- branding (and UI improvements) via Global CSS
  - [smcanvas-javascript](https://github.com/smtech/smcanvas-javascript) -- a variety of UI improvements via Global JavaScript

## "Level 2" Customization

I'm fine with the API -- there's [good documentation](https://canvas.instructure.com/doc/api/index.html) for it!

  - [smcanvaslib](https://github.com/smtech/smcanvaslib) -- a supporting "framework" for many of the other repos
  - [smcanvas-archive-discussions](https://github.com/smtech/smcanvas-smcanvas-archive-discussions) -- archive course/group discussions as JSON files
  - [smcanvas-blackboard-import](https://github.com/smtech/smcanvas-blackboard-import) -- improved Blackboard course archive import
  - [smcanvas-ics-sync](https://github.com/smtech/smcanvas-ics-sync) -- sync ICS/webcal feeds into Canvas courses, groups and users
  - [smcanvas-scripts](https://github.com/smtech/smcanvas-scripts) -- a variety of API scripts for management purposes

## "Level 3" Customization

Let's break things! (This is the point where I got serious and put my own secure server in the AWS cloud.)

  - [smcanvas-embdedded-documentation](https://github.com/smtech/smcanvas-embdedded-documentation) -- embed custom documentation in the UI
  - [smcanvas-faculty-journal](https://github.com/smtech/smcanvas-faculty-journal) -- modify the faculty journal UI to be course-centric
  - [smcanvas-grading-analytics](https://github.com/smtech/smcanvas-grading-analytics) -- provide grading analytics and feedback to faculty
  - [smcanvas-navigation-menu](https://github.com/smtech/smcanvas-navigation-menu) -- add additional global navigation menus