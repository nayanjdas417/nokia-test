# build docker image and pushed it to docker hub

docker build -t nokia-file-store .

docker tag <IMAGE-ID> <user-name>/nokia-file-store:1.0

docker push <user-name>/nokia-file-store:1.0

# Commands to run the application in minikube

kubectl create deployment nokia-test --image=<user-name>/nokia-file-store

kubectl expose deployment nokia-test --type=NodePort --port=3000

minikube service nokia-test --url
