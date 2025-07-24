FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (cần dev deps để build)
RUN npm ci

# Copy source code
COPY . .

# Build app
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Expose port
EXPOSE 4001

# Start app
CMD ["npm", "run", "start:prod"]