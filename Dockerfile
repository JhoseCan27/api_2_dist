FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y node.js
RUN apt-get install -y npm
RUN mkdir api-dir
WORKDIR /api-dir
COPY ./ApiFinal .
CMD ["sh","run.sh"]