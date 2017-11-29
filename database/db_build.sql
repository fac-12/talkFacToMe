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

INSERT INTO mentors (name, cohort, gitter_handle, other) VALUES ('Nat', 12, '@njseeto', 'other'), ('Sophie', 12, '@sophielevens', 'other'), ('Johanna', 12, '@johanna-hub', 'other');

CREATE TABLE categorylist (
  id SERIAL PRIMARY KEY,
  categoryname VARCHAR(50),
  categoryid INTEGER
);

INSERT INTO categorylist (categoryname, categoryid) VALUES ('Current Student', 1), ('Life at FAC', 2), ('Career', 3), ('Alumni', 4), ('Internship', 5);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    mentors_id INTEGER REFERENCES mentors(id),
    selected_category1 VARCHAR(50),
    selected_category2 VARCHAR(50),
    selected_category3 VARCHAR
);

INSERT INTO categories (mentors_id, selected_category1, selected_category2, selected_category3) VALUES ((SELECT id FROM mentors WHERE name = 'Nat'), (SELECT categoryname FROM categorylist WHERE categoryid = 5), (SELECT categoryname FROM categorylist WHERE categoryid = 1), null), ((SELECT id FROM mentors WHERE name = 'Sophie'), (SELECT categoryname FROM categorylist WHERE categoryid = 2), null, null), ((SELECT id FROM mentors WHERE name = 'Johanna'), (SELECT categoryname FROM categorylist WHERE categoryid = 3), null, null);

COMMIT;
