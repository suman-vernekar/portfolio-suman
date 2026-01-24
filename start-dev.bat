@echo off
echo Starting Portfolio Development Servers...
echo.

REM Start backend server
start "Backend Server" cmd /k "node server.js"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend server
cd client
start "Frontend Server" cmd /k "npm start"

echo.
echo Portfolio servers started!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
pause