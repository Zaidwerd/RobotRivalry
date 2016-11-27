DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_stats;
DROP TABLE IF EXISTS trivia_stats;
DROP TABLE IF EXISTS global_stats;
DROP TABLE IF EXISTS game_stats;
DROP TABLE IF EXISTS questions;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(32) NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  age INT NOT NULL,
  gender VARCHAR(6) NOT NULL,
  zodiac VARCHAR(12) NOT NULL,
  state VARCHAR(2) NOT NULL,
  email text NOT NULL,
  num_games_played INT DEFAULT 0,
  total_num_correct INT DEFAULT 0,
  total_num_incorrect INT DEFAULT 0,
  num_generalknowledge_played INT DEFAULT 0,
  num_generalknowledge_correct INT DEFAULT 0,
  num_generalknowledge_incorrect INT DEFAULT 0,
  num_music_played INT DEFAULT 0,
  num_music_correct INT DEFAULT 0,
  num_music_incorrect INT DEFAULT 0,
  num_sports_played INT DEFAULT 0,
  num_sports_correct INT DEFAULT 0,
  num_sports_incorrect INT DEFAULT 0,
  num_television_played INT DEFAULT 0,
  num_television_correct INT DEFAULT 0,
  num_television_incorrect INT DEFAULT 0,
  num_geography_played INT DEFAULT 0,
  num_geography_correct INT DEFAULT 0,
  num_geography_incorrect INT DEFAULT 0,
  num_history_played INT DEFAULT 0,
  num_history_correct INT DEFAULT 0,
  num_history_incorrect INT DEFAULT 0,
  num_politics_played INT DEFAULT 0,
  num_politics_correct INT DEFAULT 0,
  num_politics_incorrect INT DEFAULT 0,
  num_celebrities_played INT DEFAULT 0,
  num_celebrities_correct INT DEFAULT 0,
  num_celebrtities_incorrect INT DEFAULT 0,
  num_animals_played INT DEFAULT 0,
  num_animals_correct INT DEFAULT 0,
  num_animals_incorrect INT DEFAULT 0
);

CREATE TABLE user_stats (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  num_q_answered INT,
  num_q_correct INT,
  num_q_incorrect INT,
  num_games INT,
  percent_q_correct INT
);

CREATE TABLE trivia_stats (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  num_q_answered INT,
  num_q_correct INT,
  num_q_incorrect INT,
  num_games INT,
  percent_q_correct INT
);

CREATE TABLE global_stats (
  id SERIAL PRIMARY KEY,
  total_q_answered INT,
  total_q_correct INT,
  total_q_incorrect INT,
  total_games INT,
  percent_q_correct INT
);

CREATE TABLE game_stats (
  id SERIAL PRIMARY KEY,
  category VARCHAR(20) NOT NULL,
  difficulty VARCHAR(20) NOT NULL,
  num_q_correct INT NOT NULL,
  num_q_incorrect INT NOT NULL
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  difficulty VARCHAR(10) NOT NULL,
  question text NOT NULL,
  correct_answer text NOT NULL,
  answerA text NOT NULL,
  answerB text NOT NULL,
  answerC text NOT NULL,
  answerD text NOT NULL,
  created_by text
);

CREATE TABLE new_questions (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  difficulty VARCHAR(10) NOT NULL,
  question text NOT NULL,
  correct_answer text NOT NULL,
  answerA text NOT NULL,
  answerB text NOT NULL,
  answerC text NOT NULL,
  answerD text NOT NULL,
  created_by text
);
