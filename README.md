# README

This README would normally document whatever steps are necessary to get your application up and running.

# Runtime

Node.js
Node Version: v10.14.2

# Language

Type Script

# Framework

Express.js

# Package Manager

yarn

# Scripts to build

yarn build

# Script to run

yarn start

# build docker image and pushed it to docker hub

docker build -t nokia-file-store .

docker tag <IMAGE-ID> <user-name>/nokia-file-store:1.0

docker push <user-name>/nokia-file-store:1.0

# Commands to run the application in minikube

kubectl create deployment nokia-test --image=<user-name>/nokia-file-store

kubectl expose deployment nokia-test --type=NodePort --port=3000

minikube service nokia-test --url

# Run api with swagger express ui

hit the following url in browser
http://localhost:3000/api-docs
