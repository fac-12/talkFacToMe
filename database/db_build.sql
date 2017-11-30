BEGIN;

DROP TABLE IF EXISTS mentors CASCADE;
DROP TABLE IF EXISTS categorylist CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE mentors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cohort INTEGER,
    gitter_handle TEXT,
    other TEXT
);

INSERT INTO mentors (name, cohort, gitter_handle, other) VALUES ('Nat', 12, '@njseeto', 'Life at FAC'), ('Sophie', 12, '@sophielevens', 'Internship'), ('Johanna', 12, '@johanna-hub', 'Life at FAC');

CREATE TABLE categorylist (
  id SERIAL PRIMARY KEY,
  categoryname VARCHAR(50),
  categoryid INTEGER
);

INSERT INTO categorylist (categoryname, categoryid) VALUES ('Life at FAC', 1), ('Freelancing', 2), ('Internship', 3), ('Junior Dev', 4), ('Support', 5);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    mentors_id INTEGER REFERENCES mentors(id),
    selected_category VARCHAR(50)
);

INSERT INTO categories (mentors_id, selected_category) VALUES ((SELECT id FROM mentors WHERE name = 'Nat'), (SELECT categoryname FROM categorylist WHERE categoryid = 5)), ((SELECT id FROM mentors WHERE name = 'Sophie'), (SELECT categoryname FROM categorylist WHERE categoryid = 2)), ((SELECT id FROM mentors WHERE name = 'Johanna'), (SELECT categoryname FROM categorylist WHERE categoryid = 3)), ((SELECT id FROM mentors WHERE name = 'Nat'), (SELECT categoryname FROM categorylist WHERE categoryid = 1)), ((SELECT id FROM mentors WHERE name = 'Sophie'), (SELECT categoryname FROM categorylist WHERE categoryid = 3));

COMMIT;
