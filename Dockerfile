FROM node:20 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
COPY --from=builder /app/out ./out
RUN npm install -g serve
EXPOSE 3001
CMD ["serve", "-s", "out", "-l", "3001"]