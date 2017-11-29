BEGIN;

DROP TABLE IF EXISTS mentors CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE mentors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cohort INTEGER,
    gitter_handle TEXT,
    other TEXT
);

INSERT INTO mentors (name, cohort, gitter_handle, other) VALUES ('Nat', 12, '@njseeto', 'other'), ('Sophie', 12, '@sophielevens', 'other'), ('Johanna', 12, '@johanna-hub', 'other');


CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    mentors_id INTEGER REFERENCES mentors(id),
    category1 VARCHAR(50),
    category2 VARCHAR(50),
    category3 VARCHAR(50),
    category4 VARCHAR(50),
    category5 VARCHAR(50)
);

INSERT INTO categories (mentors_id, category1, category2, category3, category4, category5) VALUES (1, 'Current Student', null, 'Life at FAC', null, 'Internship'), (2, 'Current Student', 'Career', null, null, 'Internship'), (3, null, null, 'Life at FAC', 'Alumni', null);

COMMIT;
