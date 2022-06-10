FROM node:14 as Build

WORKDIR /app
COPY / /app
ENV YARN_CACHE_FOLDER=/root/.yarn
RUN --mount=type=cache,target=/root/.yarn yarn install


FROM node:14 as Runtime
EXPOSE 1337/tcp
COPY --from=Build /app /app

ENV NODE_ENV=dev
ENV DATABASE_URL=postgres://strapi_ntdy_user:ZMpSgaszh3mhsHyTEosnBeQhjrgp92RJ@dpg-c9t4kic41ls7n7ojep2g-a.oregon-postgres.render.com:5432/strapi_ntdy
ENV API_TOKEN_SALT=f928d56f7fe0432470ab25b17a83d967
ENV SERVE_ADMIN_PANEL=false
ENV YARN_CACHE_FOLDER=/root/.yarn

WORKDIR /app
RUN --mount=type=cache,target=/root/.yarn yarn global add pm2

ENTRYPOINT pm2-runtime start ecosystem.config.js
