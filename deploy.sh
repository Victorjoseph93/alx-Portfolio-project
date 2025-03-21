#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define variables
APP_NAME="school-management-system"
REPO_URL="https://github.com/yourusername/yourrepo.git"
DEPLOY_DIR="/var/www/$APP_NAME"
ENV_FILE=".env"

# Update package list and install necessary packages
echo "Updating package list and installing necessary packages..."
sudo apt-get update
sudo apt-get install -y git nodejs npm

# Clone the repository
echo "Cloning repository..."
if [ -d "$DEPLOY_DIR" ]; then
  sudo rm -rf "$DEPLOY_DIR"
fi
sudo git clone "$REPO_URL" "$DEPLOY_DIR"

# Navigate to the deployment directory
cd "$DEPLOY_DIR"

# Install dependencies
echo "Installing dependencies..."
sudo npm install

# Copy environment variables file
echo "Copying environment variables file..."
if [ -f "$ENV_FILE" ]; then
  sudo cp "$ENV_FILE" "$DEPLOY_DIR"
else
  echo "Environment variables file not found!"
  exit 1
fi

# Start the application
echo "Starting the application..."
sudo npm start

echo "Deployment completed successfully!"
