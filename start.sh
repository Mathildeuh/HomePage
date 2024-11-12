#!/bin/bash
# Démarre le serveur Python
su - mathilde &
python3 -m http.server 1234 --directory /home/mathilde/Web-Server/ &
node /home/mathilde/Web-Server/server.js
