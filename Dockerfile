FROM python:3.6-stretch

LABEL maintainer="jordy@schreuders.it"

WORKDIR /usr/src/app
COPY ./app/requirements-base.txt .

RUN pip install --no-cache-dir -r requirements-base.txt
