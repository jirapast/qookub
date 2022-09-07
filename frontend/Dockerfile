FROM node:14-alpine
LABEL "name"="frontend"

WORKDIR /frontend
COPY . .

# building the app
RUN npm install
RUN npm run build

# running the app
# CMD ["npm", "run", "start"]
CMD ["npm", "run", "dev"]