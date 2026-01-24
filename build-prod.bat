@echo off
echo Building Production Version...
echo.

REM Build React frontend
echo Building frontend...
cd client
npm run build
cd ..

REM The build folder will be in client/build
echo.
echo Production build completed!
echo Files are in client/build folder
echo.
pause