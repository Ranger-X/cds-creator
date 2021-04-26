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

COPY cmd.sh /cmd.sh
RUN chmod +x /cmd.sh

RUN cd /${APP_DIR}/${SRC_DIR} && npm install --save typescript @types/node && ./node_modules/.bin/tsc && npm link
RUN cd /${APP_DIR} && npm install iconv-lite && npm link "@karmared/cds-creator"

VOLUME /data
VOLUME /scripts

CMD ["/cmd.sh"]
