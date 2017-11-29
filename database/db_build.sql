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

INSERT INTO mentors (name, cohort, gitter_handle, other) VALUES ('Nat', 12, '@njseeto', 'other');


CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    mentors_id INTEGER REFERENCES mentors(id),
    categories VARCHAR(50)
);

INSERT INTO categories(mentors_id, categories) VALUES ('1', 'Current Student');

COMMIT;