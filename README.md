# Nodejs webserver

Run the project locally:

```
npm install
npm start
```

Run the project in docker:

```
docker build -t muhadel/nodejs-webserver:latest .
docker run -p 8080:8080 muhadel/nodejs-webserver:latest
```

OR

```
docker-compose up --build
```
