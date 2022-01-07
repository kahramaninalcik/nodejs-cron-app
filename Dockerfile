FROM node:lts-alpine
COPY /my-app/ /app/
RUN cd /app && npm ci
CMD ["/app/server.js"]