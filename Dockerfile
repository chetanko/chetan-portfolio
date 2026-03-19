FROM node:25-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app
COPY . .

# Build Next.js
RUN npm run build

# Use standalone output
RUN cp -r .next/standalone ./standalone
RUN cp -r .next/static ./standalone/.next/static
RUN cp -r public ./standalone/public

WORKDIR /app/standalone

ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]