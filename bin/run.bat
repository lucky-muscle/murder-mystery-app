@echo off
cd /d %~dp0
echo Starting application...
echo Open http://localhost:4173 in your browser.
node server.js
pause