# docker build . -t ngx-easypiechart:devel-1.0.0
ARG NODE_TAG=9.11-alpine
FROM node:${NODE_TAG}
ARG ANGULAR_CLI_VERSION=6.0.7
ARG MY_USER=develop
WORKDIR /tmp
RUN whoami && \
  npm install -g npm@latest && \
  npm --version
RUN npm install -g @angular/cli@${ANGULAR_CLI_VERSION}
RUN adduser -g "" -D  ${MY_USER}

ARG ENV_GROUP=node
RUN adduser ${MY_USER} ${ENV_GROUP}
USER ${MY_USER}
WORKDIR /home/${MY_USER}
RUN which ng && \
  ng version
ENTRYPOINT /bin/sh -c "while true; do echo hello; sleep 100; done"

# Launch the image in a container as below
# docker-compose up --force-recreate -d --remove-orphans
