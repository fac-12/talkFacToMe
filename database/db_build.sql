BEGIN;

DROP TABLE IF EXISTS mentors CASCADE;
DROP TABLE IF EXISTS categorylist CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE mentors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cohort INTEGER,
    gitter_handle TEXT,
    category TEXT,
    other TEXT
);

INSERT INTO mentors (name, cohort, gitter_handle, category, other) VALUES ('Nat', 12, '@njseeto', 'Life at FAC', 'Happy to talk about career changes'), ('Sophie', 12, '@sophielevens', 'Internship', 'Adjusting to professional role after FAC'), ('Johanna', 12, '@johanna-hub', 'Life at FAC', 'Happy to talk about doing FAC with kids');

-- CREATE TABLE categorylist (
--   id SERIAL PRIMARY KEY,
--   categoryname VARCHAR(50),
--   categoryid INTEGER
-- );
--
-- INSERT INTO categorylist (categoryname, categoryid) VALUES ('Life at FAC', 1), ('Freelancing', 2), ('Internship', 3), ('Junior Dev', 4), ('Mentoring', 5);
--
-- CREATE TABLE categories (
--     id SERIAL PRIMARY KEY,
--     mentors_id INTEGER REFERENCES mentors(id),
--     selected_category1 VARCHAR(50),
--     selected_category2 VARCHAR(50),
--     selected_category3 VARCHAR(50),
--     selected_category4 VARCHAR(50),
--     selected_category5 VARCHAR(50)
-- );
--
-- INSERT INTO categories (mentors_id, selected_category1, selected_category2, selected_category3, selected_category4, selected_category5) VALUES ((SELECT id FROM mentors WHERE name = 'Nat'), 'Life at FAC', null, null, null, null), ((SELECT id FROM mentors WHERE name = 'Sophie'), null, 'Freelancing', null, null, null), ((SELECT id FROM mentors WHERE name = 'Johanna'), null, null, null, null, 'Internship');

COMMIT;
