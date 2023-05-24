# atelier-im-Next

## Build : 

`dkb . -f CICD/Atelier.dockerfile -t atelier-im`  

## Run  
`dk stop atelier-im` 
`dk rm atelier-im`
`dkr -d --name atelier-im.com --restart unless-stopped -p 3001:3000 atelier-im`  
``