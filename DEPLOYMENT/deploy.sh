#!/bin/bash

# The Terrace Kilifi - Automated VPS Deployment Script
# This script automates the deployment process

set -e

echo "🏠 The Terrace Kilifi - Deployment Script"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18+ first."
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js detected: $NODE_VERSION"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
if command -v bun &> /dev/null; then
    echo "Using Bun package manager..."
    bun install
else
    echo "Using npm..."
    npm install
fi
echo "✅ Dependencies installed"
echo ""

# Build for production
echo "🏗️  Building for production..."
if command -v bun &> /dev/null; then
    bun run build
else
    npm run build
fi
echo "✅ Build complete"
echo ""

# Set permissions
echo "🔐 Setting file permissions..."
sudo chown -R www-data:www-data .
sudo chmod -R 755 dist/
sudo chmod -R 755 kilifiimages/
echo "✅ Permissions set"
echo ""

# Display deployment info
echo "🚀 Deployment Complete!"
echo "=========================================="
echo ""
echo "📁 Build Output Location: ./dist"
echo "🖼️  Images Location: ./kilifiimages"
echo ""
echo "Next Steps:"
echo "1. Configure your web server (Nginx/Apache)"
echo "2. Point document root to: $(pwd)/dist"
echo "3. Enable HTTPS with Let's Encrypt"
echo "4. Verify images are accessible at: your-domain.com/kilifiimages/*"
echo ""
echo "For detailed instructions, see: DEPLOYMENT_GUIDE.md"
echo ""
