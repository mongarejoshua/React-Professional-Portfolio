npm create vite@latest client
cd client
npm install

npm run dev

npm install bootstrap bootstrap-icons

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

deployment(netlify):
npm run build

EE PROJECTS
-------------
# NEW PROJECT
echo "# Bluetooth-Audio-Receiver" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mongarejoshua/Bluetooth-Audio-Receiver.git
git push -u origin main

# FOR UPDATING
git add .
git commit -m "Updated schematic and PCB layout"
git push

when pulling b4 pushing:
>>git pull
>> ESC >> :wq

