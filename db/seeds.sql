-- insert these lines first to avoid foreign key violation
INSERT INTO roles (role) VALUES ("manager");
INSERT INTO roles (role) VALUES ("employee");
------
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("michael", "Michael", "Scott", "michael.png", "1");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("jim", "Jim", "Halpert", "jim.png", "2");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("dwight", "Dwight", "Schrute", "dwight.png", "2");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("pam", "Pam", "Beasley", "pam.png", "2");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("standley", "Stanley", "Hudson", "standley.png", "2");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("phyllis", "Phyllis", "Lapin", "phyllis.png", "2");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("angela", "Angela", "Martin", "angela.png",  "2");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("oscar", "Oscar", "Gutierrez", "oscar.png", "2");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("kevin", "Kevin", "Malone", "kevin.png", "2");
INSERT INTO users (username, first_name, last_name, picture, permission_id) 
VALUES ("creed", "Creed", "Bratton", "creed.png", "2");
---------------
INSERT INTO quizzes (question, answer) 
VALUES ("If work hours end at 5:00 pm, how many hours after work should you stay to convince the people you are a real employee?", "2");
INSERT INTO quizzes (question, answer) 
VALUES ("How many times can you ask your coworkers to help you before they start to deliberately sabotage your efforts?", "3");
INSERT INTO quizzes (question, answer) 
VALUES ("Which co-worker will take any personal details you share and inform everyone about them?", "Sam");
INSERT INTO quizzes (question, answer) 
VALUES ("When your boss complains about your coworkers what is the correct response?", "Throw them under the bus");
INSERT INTO quizzes (question, answer) 
VALUES ("When deciding what to wear to work, which color does your supervisor detest above all others?", "Light Blue");
INSERT INTO quizzes (question, answer) 
VALUES ("What color is the carpet in Meeting Room D?", "There is no meeting room D");
---------------
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (2, 1, "don't know", 0);
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (2, 2, "don't know", 0);
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (2, 3, "don't know", 0);
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (2, 4, "Sam", 1);
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (2, 5, "don't know", 0);
--
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (3, 1, "Awesome", 1);
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (3, 2, "Great", 1);
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (3, 3, "don't know", 0);
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (3, 4, "Sam", 1);
INSERT INTO results (user_id, quiz_id, user_answer, score)
VALUES (3, 5, "There is no room D", 1);