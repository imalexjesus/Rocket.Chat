FROM gitpod/workspace-full

# Taken from https://github.com/meteor/todos/pull/275/files
#USER gitpod
#RUN cd /home/gitpod && curl https://install.meteor.com/ | sh

RUN sudo apt-get update \
 && sudo apt-get install -y \
    tool \
 && sudo rm -rf /var/lib/apt/lists/*
