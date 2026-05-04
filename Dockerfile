FROM nginx:stable-alpine

# Копируем конфиг Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Копируем всё содержимое текущей директории в папку nginx
# Теперь мы копируем не из frontend/, а из корня (.)
COPY . /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
