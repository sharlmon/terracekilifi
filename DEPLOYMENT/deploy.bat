@echo off
REM The Terrace Kilifi - Automated Deployment Script for Windows
REM This script automates the deployment process on Windows

echo.
echo The Terrace Kilifi - Deployment Script
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js is not installed. Please install Node.js v18+ first.
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js detected: %NODE_VERSION%
echo.

REM Install dependencies
echo Installing dependencies...
if exist node_modules (
    echo node_modules already exists, skipping install
) else (
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo Error during npm install
        exit /b 1
    )
)
echo ✓ Dependencies ready
echo.

REM Build for production
echo Building for production...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo Error during build
    exit /b 1
)
echo ✓ Build complete
echo.

REM Display success message
echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Build Output: dist\
echo Images Location: kilifiimages\
echo.
echo Next Steps:
echo 1. Upload the 'dist' folder to your VPS
echo 2. Configure your web server (Nginx/Apache)
echo 3. Enable HTTPS with SSL certificate
echo 4. Point document root to the dist folder
echo.
echo For detailed instructions, see: DEPLOYMENT_GUIDE.md
echo.
pause
