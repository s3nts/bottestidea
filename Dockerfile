FROM node:17    
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig.prod*.json ./
COPY src ./src
RUN npm install
RUN npm run buildprod

CMD [ "node","/usr/app/prod" ]
