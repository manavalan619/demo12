#!bin/bash

DESKTOPCODE='../../../application/client/desktop/redtemplate'

COMPOSEPATH='../../../../devops/local/docker/'

ENVPATH='../../.env'


while getopts :cdrs option
do
    case "$option" in
    c)  
         echo "Creating new docker images and containers"
         cd $DESKTOPCODE
         docker build -t redtemplateui-7467 .
         docker run --name redtemplateui-7467 --restart=unless-stopped -d -p 5055:5000 redtemplateui-7467
         sleep 15
         echo "UI build is done..."

         cd $COMPOSEPATH
         docker-compose up -d --build
         echo "uploading the mongo script..."
         sleep 50
         docker cp mongo.js mongo-7467:/data/db/
         docker exec -ti mongo-7467 mongo -u admin -p 'password' --authenticationDatabase 'admin' redtemplate_7467 /data/db/mongo.js
         sleep 10
         echo "Process completed"
         echo " Your application is deployed here the link, http://localhost:5055 "
         ;;
    d)
         echo "Now Deleting all containers and images"
         docker-compose down -v --rmi all 
         docker rm -f redtemplateui-7467
         docker rmi redtemplateui-7467
         echo "Process completed"
         ;;
    r)
         echo "Now Re-starting the stopped containers"
         docker-compose start
         docker restart redtemplateui-7467
         sleep 35
         echo "Process completed"
         ;;
    s)
         echo "Now stopping the running containers"
         docker-compose stop
         docker stop redtemplateui-7467
         echo "Process completed"
         ;;
    *)
        echo "Hmm, an invalid option was received. the valid option are."
        echo "Flag c - To Create new containers and images."
        echo "Flag d - To Delete all the containers and images."
        echo "Flag r - To Restart the stopped containers."
        echo "Flag s - To Stop the running containers."
        echo "Here's the usage statement:"
        echo ""
        echo "bash geppetto_compose.sh -c (or) bash geppetto_compose.sh -d (or) bash geppetto_compose.sh -r (or) bash geppetto_compose.sh -s"
       
       ;;
        esac
done

echo ""
echo "These are the usage options for help."
echo "Flag c - To Create new containers and images."
echo "Flag d - To Delete all the containers and images."
echo "Flag r - To Restart the stopped containers."
echo "Flag s - To Stop the running containers."
echo "Here's the usage statement:"
echo ""
echo "bash geppetto_compose.sh -c (or) bash geppetto_compose.sh -d (or) bash geppetto_compose.sh -r (or) bash geppetto_compose.sh -s"
