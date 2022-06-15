FROM node:14-alpine as Build

WORKDIR /app
COPY / /app
ENV YARN_CACHE_FOLDER=/root/.yarn
RUN --mount=type=cache,target=/root/.yarn yarn install


FROM node:14-alpine as Runtime
EXPOSE 1337/tcp
COPY --from=Build /app /app

ENV NODE_ENV=dev
ENV DATABASE_URL=''
ENV API_TOKEN_SALT=''
ENV SERVE_ADMIN_PANEL=true
ENV YARN_CACHE_FOLDER=/root/.yarn

WORKDIR /app
RUN --mount=type=cache,target=/root/.yarn yarn global add pm2

ENTRYPOINT pm2-runtime start ecosystem.config.js
