/** Common config for bookstore. */

let DB_URI = {
  host: "/var/run/postgresql/",
  database: "books",
};

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
}

let db = new Client({
  host: "/var/run/postgresql/",
  database: "books",
});

module.exports = { DB_URI };
