FROM node:lts-alpine

WORKDIR /vue-setup

RUN npm install -g @vue/cli

RUN userdel -r node

ARG USER_ID
ARG GROUP_ID

RUN addgroup --gid $GROUP_ID user

RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user

USER user

ENTRYPOINT [ "bash" ]