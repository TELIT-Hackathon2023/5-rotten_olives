module.exports = {
  database: {
    host: "localhost",
    port: 3306,
    database: 'parking_db',
    user: 'root',
    password: 'db-btf5q' || null
  },
  port: process.env.PORT || 8080
  // if you're not using docker compose for local development, this will default to 8080
  // to prevent non-root permission problems with 80. Dockerfile is set to make this 80
  // because containers don't have that issue :)
};