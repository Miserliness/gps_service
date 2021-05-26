create table person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    login VARCHAR(20),
    password VARCHAR(50)
);

create table box(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

create table coordinates(
    id SERIAL PRIMARY KEY,
    lat TEXT,
    ing TEXT,
    box_id INTEGER,
    FOREIGN KEY (box_id) REFERENCES box (id)
);