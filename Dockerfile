FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine
LABEL authors="jantje"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public/root-placeholder.html /usr/share/nginx/html/index.html
COPY --from=build /app/dist /usr/share/nginx/html/maximilian

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
