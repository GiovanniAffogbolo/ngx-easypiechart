# docker build . -t ngx-easypiechart-devel:1.0.0
# node versions based off: https://hub.docker.com/_/node/
ARG NODE_TAG=10.9-alpine
FROM node:${NODE_TAG}
ARG MY_USER=develop
WORKDIR /tmp
RUN adduser -g "" -D  ${MY_USER}

ARG ENV_GROUP=node
RUN adduser ${MY_USER} ${ENV_GROUP}
USER ${MY_USER}
WORKDIR /home/${MY_USER}
ENTRYPOINT /bin/sh -c "while true; do echo hello; sleep 100; done"

# Launch the image in a container as below
# docker-compose up --force-recreate -d --remove-orphans
