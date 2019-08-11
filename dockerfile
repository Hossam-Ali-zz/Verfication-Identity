FROM node:11.14.0 as react-build

WORKDIR /app

COPY . ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
