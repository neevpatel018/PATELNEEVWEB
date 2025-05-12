const method = "GET";
const path = "/api";
const statusCode = 200;
const duration = 123;

const logLine = ${method} ${path} ${statusCode} in ${duration}ms;
console.log(logLine);