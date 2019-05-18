FROM node:10-alpine
WORKDIR /app
RUN npm -g install serve
ADD build /app
CMD sed -i "s/__REPLACE_ME__/${API_URL}/g" index.html && serve -l 3000 -s
