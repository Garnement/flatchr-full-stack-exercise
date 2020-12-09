const schema = `
CREATE TABLE candidate (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name varchar(255) NOT NULL DEFAULT '',
  last_name varchar(255) NOT NULL DEFAULT '',
  email varchar(255) NOT NULL DEFAULT ''
);


CREATE TABLE vacancy (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title varchar(255) NOT NULL DEFAULT '',
  published_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  contract_type varchar(100) DEFAULT NULL,
  status varchar(100) DEFAULT NULL
);


CREATE TABLE application (
  candidate_id INTEGER NOT NULL,
  vacancy_id INTEGER NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status varchar(100) DEFAULT NULL,
  FOREIGN KEY (candidate_id) REFERENCES candidate (id),
  FOREIGN KEY (vacancy_id) REFERENCES vacancy (id)
  PRIMARY KEY (candidate_id, vacancy_id)
);
`;

module.exports = schema;
