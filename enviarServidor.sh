!#/bin/bash
echo Do you wanna send the new updates to the server?'(y/n)'
read answer
if [ "$answer" = Y ] || [ "$answer" = y ]; then
  npm run build
  git add .
  echo What do you want write in you commit?
  read -r message
  git commit -m "$message"
  echo cheguei aqui
  git push origin master
  echo Sending the files to the server

elif [ "$answer" = N ] || [ "$answer" = n ]; then
   echo Alright, bye
else
   echo Wrong answer

fi
