FROM node:16.1.0-alpine AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json server.js ./

RUN npm install

COPY ./src ./src

FROM gcr.io/distroless/nodejs:14

COPY --from=builder /usr/src/app /app

WORKDIR /app

CMD ["server.js"]