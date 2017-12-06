BEGIN;

DROP TABLE IF EXISTS mentors CASCADE;
DROP TABLE IF EXISTS categorylist CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS auth CASCADE;

CREATE TABLE mentors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cohort INTEGER,
    gitter_handle TEXT,
    other TEXT
);

INSERT INTO mentors (name, cohort, gitter_handle, other) VALUES ('Nat', 12, '@njseeto', 'Career changes'), ('Sophie', 12, '@sophielevens', 'Adjusting to professional role after FAC'), ('Johanna', 12, '@johanna-hub', 'Doing FAC with kids'), ('Fatimat', 12, '@gbaja', 'Work-life balance'), ('James', 11, '@james', 'Graduate projects') ;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    mentors_id INTEGER REFERENCES mentors(id),
    selected_category VARCHAR(50)
);

INSERT INTO categories (mentors_id, selected_category) VALUES ((SELECT id FROM mentors WHERE name = 'Nat'), 'Life at FAC'), ((SELECT id FROM mentors WHERE name = 'Nat'), 'Freelancing'), ((SELECT id FROM mentors WHERE name = 'Nat'), 'Internship'), ((SELECT id FROM mentors WHERE name = 'Sophie'), 'Junior Dev'), ((SELECT id FROM mentors WHERE name = 'Sophie'), 'Mentoring'), ((SELECT id FROM mentors WHERE name = 'Johanna'), 'Mentoring'), ((SELECT id FROM mentors WHERE name = 'Johanna'), 'Internship'), ((SELECT id FROM mentors WHERE name = 'Fatimat'), 'Junior Dev');

CREATE TABLE auth (
    id SERIAL PRIMARY KEY,
    mentors_id INTEGER REFERENCES mentors(id),
    username VARCHAR(50),
    password VARCHAR(100),
    permission VARCHAR(50)
);

-- CREATE TABLE categorylist (
--   id SERIAL PRIMARY KEY,
--   categoryname VARCHAR(50),
--   categoryid INTEGER
-- );
--
-- INSERT INTO categorylist (categoryname, categoryid) VALUES ('Life at FAC', 1), ('Freelancing', 2), ('Internship', 3), ('Junior Dev', 4), ('Mentoring', 5);

COMMIT;
