### STAGE 1: Build ###
FROM node:lts-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build


### STAGE 2: Run ###
FROM nginx:stable-alpine

RUN apk add --no-cache curl

# Nginx config (in separate file)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# App files
COPY --from=builder /app/dist/my-kennzeichen/browser/ /usr/share/nginx/html/

EXPOSE 80

# Basic HTTP healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -fsS http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]