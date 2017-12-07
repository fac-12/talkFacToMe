BEGIN;

DROP TABLE IF EXISTS mentors CASCADE;
DROP TABLE IF EXISTS categorylist CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS auth CASCADE;

CREATE TABLE auth (
    id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    username VARCHAR(50),
    password VARCHAR(100),
    permission VARCHAR(50)
);

INSERT INTO auth (name, username, password, permission) VALUES ('nat','njseeto', 'hello', 'admin'), ('sophie', 'sophielevens', 'bye', 'admin');


CREATE TABLE mentors (
    id SERIAL PRIMARY KEY,
    auth_id INTEGER REFERENCES auth(id),
    cohort INTEGER,
    gitter_handle TEXT,
    other TEXT
);

INSERT INTO mentors (auth_id, cohort, gitter_handle, other) VALUES (1, 12, '@njseeto', 'Career changes');

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    auth_id INTEGER REFERENCES auth(id),
    selected_category VARCHAR(50)
);

INSERT INTO categories (auth_id, selected_category) VALUES (1, 'Life at FAC'), (1, 'Freelancing'), (2, 'Internship'), (2, 'Junior Dev');

-- CREATE TABLE categorylist (
--   id SERIAL PRIMARY KEY,
--   categoryname VARCHAR(50),
--   categoryid INTEGER
-- );
--
-- INSERT INTO categorylist (categoryname, categoryid) VALUES ('Life at FAC', 1), ('Freelancing', 2), ('Internship', 3), ('Junior Dev', 4), ('Mentoring', 5);

COMMIT;
