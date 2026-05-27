#!/bin/bash
set -e
echo "Starting build..."
npm run build
echo "Build complete. Preparing deploy folder..."
mkdir -p terracefolderdeploy
# Remove all contents (excluding hidden files like .htaccess)
rm -rf terracefolderdeploy/*
echo "Copying dist to terracefolderdeploy..."
cp -R dist/* terracefolderdeploy/
echo "Done!"
