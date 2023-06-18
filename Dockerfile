#stage 1 - build docker image of react app
FROM node:18-alpine AS build-stage
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#stage 2 - nginx deploy
FROM nginx:alpine AS production-stage
ENV NODE_ENV production
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx","-g","daemon off;"]