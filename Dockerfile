FROM node:14

ARG APP_DIR=app
ARG SRC_DIR=src
RUN mkdir -p ${APP_DIR} ${APP_DIR}/${SRC_DIR}
WORKDIR ${APP_DIR}

# Установка зависимостей
#COPY package*.json ./
#RUN ssh-keyscan -t rsa github.com > ~/.ssh/known_hosts 
#RUN npm install https://github.com/Karma-blockchain/cds-creator

# Копирование файлов проекта
COPY . /${APP_DIR}/${SRC_DIR}/
COPY cds.mjs /${APP_DIR}/

RUN npm install --save typescript @types/node

RUN cd /${APP_DIR}/${SRC_DIR} && /${APP_DIR}/node_modules/.bin/tsc && npm link
RUN cd /${APP_DIR} && npm link "@karmared/cds-creator"

VOLUME /data

CMD ["node", "cds.mjs"]
