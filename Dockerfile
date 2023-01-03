#Build Steps
FROM node:16.16.0-alpine as build-step

RUN mkdir /app
WORKDIR /app
RUN npm install -g @angular/cli@15.0.4
COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build --configuration=production
#Run Steps
FROM nginxinc/nginx-unprivileged  
RUN rm -rf /etc/nginx/nginx.conf.default && rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
###RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist/bibliote-eaf /usr/share/nginx/html

EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]
