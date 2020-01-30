#!/bin/bash
echo "deploying"
cd /mnt/ninghao-nestjs
git pull
docker-compose -f production.yml build nest
docker-compose -f production.yml up -d
docker-compose -f production.yml ps
docker-compose -f production.yml logs nest
echo "deploy done"
