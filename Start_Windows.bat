@echo off
setlocal

TITLE Smile Life Dental Launcher

:: Change directory to the location of this batch file
cd /d "%~dp0"

echo ========================================================
echo        Starting Smile Life Dental Website Environment   
echo ========================================================
echo.

echo Checking for Node.js environment...

:: 1. Check portable node first
set "PORTABLE_NODE_PATH=%~dp0.portable-node\node-v20.11.1-win-x64"
if exist "%PORTABLE_NODE_PATH%\node.exe" (
    echo Using portable Node.js...
    set "PATH=%PORTABLE_NODE_PATH%;%PATH%"
    goto :RunApp
)

:: 2. Check global node
node -v >nul 2>&1
if %errorlevel% equ 0 (
    echo Using system Node.js...
    goto :RunApp
)

:: 3. Download if missing
echo Node.js is missing. Downloading a portable version (only happens once)...
if not exist ".portable-node" mkdir ".portable-node"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.1/node-v20.11.1-win-x64.zip' -OutFile '.portable-node\node.zip'"
if %errorlevel% neq 0 (
    echo Failed to download Node.js. Please check your internet connection.
    pause
    exit /b
)

echo Extracting portable Node.js...
powershell -Command "Expand-Archive -Path '.portable-node\node.zip' -DestinationPath '.portable-node' -Force"
del /q ".portable-node\node.zip"

echo Portable Node.js installed.
set "PATH=%PORTABLE_NODE_PATH%;%PATH%"

:RunApp
echo.
echo Checking dependencies...
if not exist "node_modules\" (
    echo Installing required packages...
    call npm install
)

echo.
echo Starting local server and opening browser...
echo Please leave this black window open while you use the website!
echo.
call npm run dev -- --open

pause
