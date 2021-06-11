FROM node:alpine
WORKDIR /app
COPY . .
COPY .env.example .env
RUN ["npm", "i", "-g","pm2"]
RUN ["npm", "i"]
EXPOSE 8080
CMD ["pm2-runtime", "process.yml"]