FROM node:18

WORKDIR /app

LABEL       author="Jesper Richert" maintainer="contact@tnsjesper.xyz"

COPY . /app

RUN npm install


CMD ["npm", "start"]
