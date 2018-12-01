# Jump-Start Bot

<hr>

JUMP-START (℠) is training program for your first day at work that will provide a series of challenges to test how mush you absorbed through your orientation.

Designed to relieve first-day jitters, this app functions as a game with timers and scores. The player will provide text based responses to a chat-bot, and will have an opportunity to ask questions about those topics.

Each time an employee completes the challenges they can compare their scores with previous "players." Employers can see which questions each employee got right through the manager analytics page.

## MySQL Database
What is in MYSQL?: The questions, the answers, the accounts of each player, the scores and times of each attempt.

## Contributors

Jump-Start Bot was originally created by David Ho, Laurence Martinez, Raymond Won, and Brian Swift.


## API Routes:

* GET api/users - return all user profiles
* GET api/users/<email>   - return one user profile by email
* GET /api/quizzes - return all questions
* GET /api/results - return all results
* GET /api/results/<email> - return one user result by email

<!-- * -->