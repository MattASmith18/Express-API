FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./
COPY src ./src
COPY node_modules ./node_modules

EXPOSE 3000
CMD ["ls"]
CMD ["npm", "run", "start"]