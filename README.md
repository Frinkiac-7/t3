![F7 Logo](http://frinkiac-7.net/images/f7-pos.png "My own logo")

# T3:  Tic-Tac-Toe- The Game!

This is my first attempt to create the classic tic-tac-toe as a single page application for my Web Development Immersive course at General Assembly Boston.

## Features

The app includes the following capabilities:
  1) Sign in feature for existing users
  2) Sign up feature for new users
  3) Change password feature for signed in users
  4) Message area for game and status updates
  5) Start game button to begin playing
  6) See games played button to get a count of how many times you've played

## Tech

The app is written using the following languages and platforms:

  1) HTML5/CSS3 and Sass
  2) JavaScript
  3) jQuery and AJAX
  4) Bootstrap
  5) GA's game API library
  6) Services from GitHub.com and GitHub.io
  7) git for versioning

## Future Plans/TODO

Additional features to be added in upcoming releases

-   `TODO:  Code refactoring`:  As it's my first web application there was a steep learning curve to tackle.  As a result, the code base is not DRY, modular, or anything resembling good practices.  Therefore, the first task for the next release is to address this situation.

-   `TODO:  Better Styling`:  The first release of the game has no real styling to speak of due to the many challenges encountered just to get this far.  This clearly needs to be addressed in the next version after refactoring.

-   `Feature: Enhanced Game Stats`:  I'd like to improve the historical game information available to the user.  As of this release, the user only gets total number games.  Going forward, I'd like to be able to add win/loss/draw percentages.

-   `Feature: Previous Game Retrieval`:  Currently, there's no way to abandon/pause a game and then get back to it later or see the results of a previously played game. I'd like to enhance the game to allow for both.

## Development Process
The development process was convoluted though it shouldn't have been (you can read more about that in the `Project Story` below).  The planned approach was as follows:

  1) Establish a plan and wireframes (https://github.com/Frinkiac-7/t3/tree/master/project_docs)
  2) Code the base game logic
  2) Code the user authentication
  3) Code the UI
  4) Code the game library API calls
  5) Finish project
  6) Complete the administrative tasks like code comments, finalize project doc updates, etc.
  7) Deploy and celebrate

The reality of the development process was a lot less orderly or focused.  It was probably an example directly out of "Bad Software Development 101" and was a process that was repeated quite regularly:

  1) Start working on a feature like game logic, for example
  2) Make some progress
  3) Encounter a bug or programming task I didn't know how to accomplish
  3) Fail to assess the priority of this incident against the overall schedule and dealdine constraints
  4) Start the debug process/spend a few hours googling and yak shaving in general
  5) Realize that I've wasted more than half a day getting nowhere
  6) Prioritize and refocus my efforts
  7) Start to make progress  again
  8) Repeat from step 1

## Project Story

The development process was initially drafted out with a schedule and wireframes as guidance which can be seen here https://github.com/Frinkiac-7/t3/tree/master/project_docs.  However, this was quickly overwhelmed by the technical barriers encountered which was truly unfortunate.  One of the biggest takeaways from this release was relearning something I already knew: failing to plan is planning to fail.

I've worked as a PM on large scale network and IT infrastructure projects and I would never have allowed this from my teams.  The difference here was that I was both PM and the "team" and I wasn't sure how to keep me on track as well as tackle the technical issues that needed to be solved.  In reality, this shouldn't have mattered and, in fact, should have been the first red flag that I needed to break down my project even further using S.M.A.R.T. goals.  Had I done this (and leveraged the resources available to me earlier and more often) I believe would have made a big difference.  It was a humbling experience but for all this release's shortcomings I'm proud of the accomplishment it represents.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
