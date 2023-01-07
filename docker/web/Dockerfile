FROM node:18.12.1-alpine3.17

ENV NODE_ENV development

RUN apk --no-cache add yarn python3 make gcc g++
ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]