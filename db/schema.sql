
DROP DATABASE IF EXISTS workout_planner_sq;
-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE workout_planner_sq;
USE workout_planner_sq;

-- Create the table plans.
CREATE TABLE exercises
(
id int NOT NULL AUTO_INCREMENT,
exercise varchar(255) NOT NULL,
completed BOOLEAN NOT NULL,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (id)

);

-- Insert a set of records.
INSERT INTO exercises (exercise, completed) VALUES ('50 Pushups', false);
