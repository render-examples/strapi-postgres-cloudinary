FROM node:14-buster as Build

WORKDIR /app
COPY / /app
ENV YARN_CACHE_FOLDER=/root/.yarn
RUN --mount=type=cache,target=/root/.yarn yarn install --frozen-lockfile


FROM node:14-buster-slim as Runtime

# set nginx
RUN apt update
#RUN apt install iproute2 nginx -y
#RUN rm -R /etc/nginx/sites-enabled/*
#COPY /nginx/site-available/* /etc/nginx/sites-enabled
#EXPOSE 80/tcp

# set application
COPY --from=Build /app /app
ENV NODE_ENV=production
ENV DATABASE_URL=''
ENV API_TOKEN_SALT=''
ENV YARN_CACHE_FOLDER=/root/.yarn
ENV PATH="/app/node_modules/.bin:${PATH}"
EXPOSE 1337/tcp
WORKDIR /app

RUN --mount=type=cache,target=/root/.yarn yarn global add pm2

#ENTRYPOINT service nginx start && pm2-runtime start ecosystem.config.js
ENTRYPOINT pm2-runtime start ecosystem.config.js
