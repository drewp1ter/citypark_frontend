#!/bin/bash

docker save mufdvr/todo_list | bzip2 | ssh -p 4181 -o "StrictHostKeyChecking no" mufdvr@cityparkvip.ru 'bunzip2 | docker load && ./start_frontend.sh'