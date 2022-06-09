FROM node:14 as Build

WORKDIR /app
COPY / /app
RUN yarn install
RUN yarn run build


FROM node:14 as Runtime
COPY --from=Build
RUN npm install pm2 -g
