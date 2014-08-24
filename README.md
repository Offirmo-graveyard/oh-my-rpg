Online Multiplayer RPG (OhMyRPG)
================================

[![Project status](http://img.shields.io/badge/project_status-highly_experimental-red.png)](http://offirmo.net/classifying-open-source-projects-status/)
[![license](http://img.shields.io/badge/license-public_domain-brightgreen.png)](http://unlicense.org/)
[![Gittip](http://img.shields.io/gittip/Offirmo.png)](https://www.gittip.com/Offirmo/)


Introduction
------------

I'm a great fan of RPGs. This is my pet project. Hostable for free on Heroku.

Presentation
------------

This is a framework for making a story-driven RPG. Inspiration taken from KOTOR, Mass Effect and... The Boring RPG ;)

Design principles : Story first. Mobile first. Offline first. "Social" collaborative play (chat, guilds...)

While playing a lot of mobile/desktop/console/navigator RPGs, I have found that no 2D/3D graphical engine
was really needed for a great story. While such an engine can be added, this framework focus only
on screens with discussions, advancing a story along basic game mechanics : character creation, leveling, inventory...

I've also found that navigator games suffer from their terrible, mandatory registration process.
Instead, this framework features a "play immediately, register painlessly later" approach.

I'm writing some games myself with this framework (links to come) but for explanatory purpose, I'll set up
a World Of Warcraft inspired demo showing the base features. (coming soon)

Usage
-----

So you want to make a fine, story-driven RPG ? Thinking about using this framework ? You are welcome, but know that
you'll need good skills in javascript, AngularJS, Backbone, node.js, Github, heroku.

First fork this repo, then begin to populate the "extend" folders, which are linked to their twin "default" folder.
Every time you are not pleased with the "default" stuff, copy the file from "default" to "extend" with the same
file structure. Since you are only adding files, you'll be able to update the framework easily with a git rebase.

Create a heroku free instance and push to it to host your game.

Remember :
- story driven, better to write a short, compelling story than anything else
- good ortho and typo



Commands
--------

`npm run i` install all dependencies
`npm run s` launch a server (debug, livereload)

TODO
----
Features
- so many !!!!
- [ ] nice interface !!
- [ ] places
- [ ] events
- [ ] registration and login !!
- [ ] leveling
- [ ] chat
- [ ] sound
- [ ] discussions
- [ ] inventory
- [ ] skills
- [ ] encyclopedia
- [ ] prestige associated to game knowledge
- [ ] faction-personalized encyclopedia
- [ ] faction-personalized interface
- [ ] ...

Code
- [ ] tests
- [ ] params validation
- [ ] promise failures handling (explore integrated when.js mechanism)
- [ ] static data validation
- [ ] ...

Back end
- [ ] state inspection panel
- [ ] ...

Misc
- [ ] npm run with defaults only
- [ ] check use strict (func or file)
- [ ] transitive, reflexive
- [ ] ...


Contribute
----------

Submit issues. Submit pull requests.

I love tests, but I'm a perfectionist, so for sake of GTD I forbade myself to write any until I have a MVP and a
community ;)

TODO Contribute.md
- it's a game, so remember to have and make fun !
- it's a game, focus on nice graphics and smooth gaming experience
- abbreviations used in the code :
  - TODO
  - TOREVIEW : needs a redesign, may not allow desired future game features
  - GTD : get(ting) things done. Used to justify a lack of tests/verifications ;)
  - MVP : minimum viable product, i.e. a minimum game which is cool to play and may attract a community
  - BB : "Backbone" (lib)
- snake case naming, except for type names (because in this case it's a unique word)
- use ' in preference of ", you may use ´ inside strings (no need to escape, typographically better)
- tab intelligent indentation (tabs for indentation, spaces for alignment)
- trailing comma in nontrivial arrays/objects (allowed by targeted browsers, ease copy/cut and git diffs)
- use promises (even server side) :
  - promise lib used : when.js
  - throw outside of promise if bad call (coding error)
  - reject the promise with an Error if something else fail
  - Suggestion : you may use promisification of node functions for better style
  - naming should hint on function that returns a promise. In a phrase, the "then do ..." must come naturally.
    Example :
    - "is_allowed" -> synchronous func, no promise
    - "check_allowed".then(...) -> async, promise-based func
- use exceptions :
  - never use raw Error() objects. Use extended-exceptions.js instead (more semantic)
  - use semantic, custom exceptions when possible
  - exception message must finish with a '!'
- use Backbone (abbreviated BB) objects :
  - familiarize with the rationalized sync pattern (base-objects.js)
  - in object properties (set, get), related objects are stored by id only, but without mentionning 'id'
  - outside object properties, we may use both, see the .resolve_to_object_if_needed() pattern.
- common code w/ client and server specializations
- mobile first. Suggestion : use chrome mobile emulation
- offline first, use server assistance only when really needed
- validation : validation is good to avoid inconsistent state and cheating, but GTD first !
