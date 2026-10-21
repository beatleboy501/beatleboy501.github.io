#!/bin/bash
set -e
echo "Building and packaging application for GoDaddy deployment"
echo "Cleaning up previous artifacts"
rm -rf deploy.zip node_modules package-lock.json
npm install --registry=https://registry.npmjs.org/
npm run build
zip -qr deploy.zip . \
  -x "node_modules/*" ".next/*" ".git/*" \
     ".env*" "deploy/*" "deploy.zip" \
     ".DS_Store" "*.log"
echo "Artifacts ready to upload to GoDaddy"