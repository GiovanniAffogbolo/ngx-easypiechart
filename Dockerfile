# docker build . -t ngx-easypiechart:devel-1.0.0
FROM node:9.11-alpine
ARG ANGULAR_CLI_VERSION=6.0.7
ARG MY_USER=develop
WORKDIR /tmp
RUN whoami && \
  npm install -g npm@latest && \
  npm --version
RUN npm install -g @angular/cli@${ANGULAR_CLI_VERSION}
RUN adduser -g "" -D  ${MY_USER}

USER ${MY_USER}
WORKDIR /home/${MY_USER}
RUN which ng && \
  ng version

# Launch the image in a container as below
# docker-compose up --force-recreate -d --remove-orphans