FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ssl-localhost/localhost.crt /etc/ssl/certs/localhost.crt
COPY ssl-localhost/localhost.key /etc/ssl/private/localhost.key
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY dist/angular-ecommerce/browser /usr/share/nginx/html