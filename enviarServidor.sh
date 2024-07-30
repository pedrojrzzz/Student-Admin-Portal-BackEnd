!#/bin/bash
echo Do you wanna send the new updates to the server?'(y/n)'
read answer

if [ "$answer" = Y ] || [ "$answer" = y ]; then
  npm run build
  git add .
  echo What do you want write in you commit?
  read -r message
  git commit -m "$message"
  git push origin master
  echo Succesful, files sended.
  ssh lastchance33@pedroportifol.com.br
  cd api
  git pull origin master

elif [ "$answer" = N ] || [ "$answer" = n ]; then
   echo Alright, bye

else
   echo Wrong answer

fi
