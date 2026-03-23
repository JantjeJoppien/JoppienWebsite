FROM nginx:alpine
LABEL authors="jantje"

COPY . /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]