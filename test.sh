#!/bin/bash

curl -X GET  http://localhost:3131/hello
echo -e ""
curl -X POST http://localhost:3131/hello
echo -e ""

curl -X GET  http://localhost:3131/people
echo -e ""

curl -X POST http://localhost:3131/people
echo -e ""
