### BUILD STAGE ###
FROM node:18.15.0-alpine3.17 as builder
WORKDIR /usr/src/app
COPY package.json  ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

### DEPLOY STAGE ###
FROM nginx:alpine as nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/src/app/dist .
COPY --from=builder /usr/src/app/nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
