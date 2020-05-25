FROM node:13
WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]