RUN project in docker:
=========================
docker build -t muhadel/nodejs-webserver:latest .
docker run -p 8080:8080 muhadel/nodejs-webserver:latest