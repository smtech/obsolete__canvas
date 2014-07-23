# St. Mark's Canvas Customizations

A collection of customizations to the our [Canvas instance](http://stmarksschool.instructure.org), many of which are running off of our [development LAMP server](http://area51.stmarksschool.org)

### master

Ready for prime time, live and in use!

### dev-*

Features we're working on, forked from the most recent master/develop branch as appropriate. One feature per branch, no foolin'!



## Merged Forks

Forks that are merged into the master tree. The dev-* version of any fork is still the most current code for that fork, but the current live version is maintained in the master tree.

### [dev-blackboard-import](http://github.com/smtech/canvas/tree/dev-blackboard-import/www/api/blackboard-import)

This fork has become its own repo: [smtech/smcanvas-blackboard-import](https://github.com/smtech/smcanvas-blackboard-import).

### [dev-branding](http://github.com/smtech/canvas/tree/dev-branding/www/branding)

Apply St. Mark's branding to our Canvas instance.

[Known Issues](http://github.com/smtech/canvas/issues?milestone=10)

### [dev-calendar-ics](http://github.com/smtech/canvas/tree/dev-calendar-ics/www/api/calendar-ics)

This fork has become its own repo: [smtech/smcanvas-ics-sync](https://github.com/smtech/smcanvas-ics-sync).

### [dev-support](http://github.com/smtech/canvas/tree/dev-support/www/include) (Formerly [dev-canvas-api](http://github.com/smtech/canvas/tree/dev-canvas-api))

This fork has become its own repo: [smtech/smcanvaslib](https://github.com/smtech/smcanvaslib).

### [dev-faculty-journal](http://github.com/smtech/canvas/tree/dev-faculty-journal/www/javascript/faculty-journal.js)

This fork has become its own repo: [smtech/smcanvas-faculty-journal](https://github.com/smtech/smcanvas-faculty-journal).

### [dev-javascript](http://github.com/smtech/canvas/tree/dev-javascript/www/javascript)

Miscellaneous one-off JavaScript add-ons (see [below](#dev-javascript-1) for unmerged scripts):

  - [hide-future-courses](http://github.com/smtech/canvas/tree/dev-javascript/www/javascript/hide-future-courses.js) removes unpublished courses that occurred in the past from "future" enrollments (a logical error, per [this ticket](https://help.instructure.com/requests/173156)).

  - [hide-page-lists-if-pages-hidden](http://github.com/smtech/canvas/tree/dev-javascript/www/javascript/hide-page-lists-if-pages-hidden.js) removes the lists of recently modified and all pages from the right sidebar if the Pages link is not available in the left sidebar (so user's without permission to browse Pages cannot browse pages, per [this feature request](https://help.instructure.com/entries/21511835-Hide-All-Pages-List-when-Pages-is-Removed-from-Navigation))

[Known Issues](http://github.com/smtech/canvas/issues?milestone=3)

### [dev-resources-menu](http://github.com/smtech/canvas/tree/dev-resources-menu/www/javascript/resources-menu.js)

A global JavaScript add-on to insert an additional menu into the main navigation toolbar across the top of the screen. The contents of the menu can be customized in the javascript file.

[Known Issues](http://github.com/smtech/canvas/issues?milestone=2)



## Development Forks

Forks that are still under development, that aren't yet ready for prime time.

### [dev-archive-discussions](http://github.com/smtech/canvas/tree/dev-archive-discussions/www/www/api/archive-discussions)

A tool to generate a JSON export of a course or group's discussions. Particularly useful for account-level groups that lack any meaningful copy/archive capabilities out of the box. Currently, this tool is works fine... so long as you have fewer than 50 discussions, each with fewer than 50 topic entries (because I haven't bothered to deal with the pagination in the Canvas API's responses -- I didn't need to for the one thing that I needed to back up).

[Known Issues](http://github.com/smtech/canvas/issues?milestone=5)

### [dev-embedded-documentation](http://github.com/smtech/canvas/tree/dev-grading-scheme/www/javascript/embedded-documentation.js)

Wouldn't it be nice if there were reminders _in Canvas_ with links to appropriate documentation for certain features? Let's add them in where they belong.

### [dev-javascript](http://github.com/smtech/canvas/tree/dev-javascript/www/javascript)

Miscellaneous one-off JavaScript add-ons (see [above](#dev-javascript) for merged scripts):

  - [discussion-permalinks](http://github.com/smtech/canvas/tree/dev-javascript/www/javascript/discussion-permalinks.js) reveals the permalinks to individual replies in Canvas discussions and announcements.

[Known Issues](http://github.com/smtech/canvas/issues?milestone=3)

### [dev-grading-analytics](https://github.com/smtech/canvas/tree/dev-grading-analytics/www/api/grading-analytics)

This fork has become its own repo: [smtech/smcanvas-grading-analytics](https://github.com/smtech/smcanvas-grading-analytics).

### [dev-grading-scheme](http://github.com/smtech/canvas/tree/dev-grading-scheme/www/api/grading-scheme)

For whatever reason, Canvas defaults to its own grading scheme, rather than a custom grading scheme. Once courses have been created, this will run through the directory and update the course grading schemes to a specific custom grading scheme. This also includes a crontab-scheduled job to run through recent assignments and update them to a custom grading scheme if they are set to a Letter Grade and are using the default grading scheme.

[Known Issues](http://github.com/smtech/canvas/issues?milestone=9)

### [dev-scripts](http://github.com/smtech/canvas/tree/dev-scripts/www/api/scripts)

This fork has become its own repo: [smtech/smcanvas-scripts](https://github.com/smtech/smcanvas-scripts).