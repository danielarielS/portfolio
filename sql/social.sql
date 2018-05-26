DROP TABLE IF EXISTS chat;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS friends;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
first VARCHAR(250) NOT NULL,
last VARCHAR(250) NOT NULL,
email VARCHAR(250) NOT NULL UNIQUE,
url VARCHAR(300),
bio TEXT,
password VARCHAR(250) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE friends(
    id SERIAL PRIMARY KEY,
    sender_id INTEGER,
    receiver_id INTEGER,
    status INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE chat(
    id SERIAL PRIMARY KEY,
    chat TEXT,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users (id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
