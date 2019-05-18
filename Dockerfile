FROM node:10-alpine
WORKDIR /app
ADD public /app/public
ADD src /app/src
ADD .env.production /app
ADD config-overrides.js /app
ADD package.json /app
ADD package-lock.json /app
RUN npm -g install serve
RUN npm install
RUN npm run-script build
CMD cd build && sed -i "s~__API_URL__~${API_URL}~g" index.html && serve -l 3000 -s
