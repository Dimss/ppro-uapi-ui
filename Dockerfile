FROM node:10-alpine
WORKDIR /app
ADD src /app
ADD .env.production /app
ADD config-overrides.js /app
ADD package.json /app
ADD package-lock.json /app

RUN npm -g install serve
RUN npm install
RUN npm run-script build
ADD build /app
CMD sed -i "s/__REPLACE_ME__/${API_URL}/g" index.html && serve -l 3000 -s
