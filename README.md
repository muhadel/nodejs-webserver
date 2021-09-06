# Nodejs webserver

Run the project locally:

```
mv .env.example .env
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

OR

```
docker pull muhadel/nodejs-webserver:latest
docker run -p 8080:8080 muhadel/nodejs-webserver:latest
```
