FROM nginx:stable-alpine

# Копируем конфиг Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Копируем статику фронтенда
COPY frontend/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
