const http = require("http");

const options = {
  timeout: 2000,
  host: "localhost",
  port: process.env.PORT || 8080,
  path: "/healtz" // must be the same as HEALTHCHECK in Dockerfile
};
const request = http.request(options, res => {
  console.info("STATUS: " + res.statusCode);
  res.on('data', chunk => {
    data += chunk;
  });

  // Handle end of response
  res.on('end', () => {
    console.log('Response body:', data);

    // You can now use the content of 'data' as needed
    process.exitCode = res.statusCode === 200 ? 0 : 1;
    process.exit();
  });
  process.exitCode = res.statusCode === 200 ? 0 : 1;

  process.exit();
});

request.on("error", function (err) {
  console.error("ERROR", err);
  process.exit(1);
});

request.end();
