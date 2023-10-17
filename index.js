const http = require("http");
const https = require("https");
const httpProxy = require("http-proxy");
const cluster = require("cluster");

const port = 4000;
const proxy = httpProxy.createProxyServer({
  secure: false,
  changeOrigin: true,
});

serverAddress = "https://jeevithramesh.github.io/";

function createServer() {
  http
    .createServer((serverReq, serverRes) => {
      console.log("request url - ", serverReq.url);
      if (serverReq.url.startsWith("/mfe_1")) {
        // proxyTo(`${serverAddress}/mfe1`, serverReq, serverRes);
        proxyTo("http://localhost:3001", serverReq, serverRes);
      } else if (serverReq.url.startsWith("/mfe_2")) {
        // proxyTo(`${serverAddress}/mfe2`, serverReq, reserverRess);
        proxyTo("http://localhost:3002", serverReq, serverRes);
      } else {
        https.get(`${serverAddress}/index.html`, (indexRes, indexErr) => {
          if (indexRes.statusCode !== 200 || indexErr) {
            serverRes.writeHead(404, { "Content-Type": "text/plain" });
            serverRes.write("No Url Found");
            serverRes.end();
          }

          let data = "";
          indexRes.on("data", (chunkData) => {
            data += chunkData;
          });
          indexRes.on("data", () => {
            serverRes.writeHead(404, {
              "Content-Type": "text/html; charset=utf-8",
            });
            serverRes.write(data);
            serverRes.end();
          });
        });
      }
    })
    .listen(port, () => {
      console.log("Server started on port " + port);
    })
    .on("error", (err) => {
      console.log(err);
      console.log("Server Crashed");
    });
}

function proxyTo(target, req, res) {
  console.log(target + req.url);
  proxy.web(req, res, {
    target,
  });
}

createServer();

cluster.on("exit", (dw) => {
  const worker = cluster.fork();
  console.log("worker " + dw.process.pid + " died");
  console.log("worker " + worker.process.pid + " born");
});
