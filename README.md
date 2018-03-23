# NGINX uWSGI Python Flask Node.js React

  Docker running NGINX, Flask and React. This project has been tested on Mac OS, Debian and Windows 10 using Windows Subsystem for Linux.

> Note: In order to separate processes across multiple Docker containers and allow for communication between the two, it is recommended to make use of UNIX domain sockets. However, I was unable to get this to work on Docker for Mac due to https://github.com/docker/for-mac/issues/483.

For my purposes, cross-platform development, a TCP socket suffices for now.

## Feature Roadmap

- Support for SSL connections in NGINX
- UNIX domain socket for inter container communication
- Figure out a way to keep the project specific code separate other than using the symlink approach

## Usage

The way I have this setup is as follows:

1. Clone the Git repository to your local development environment.
1. Move the project specific code into a separate project repository.
1. Create a symlink inside the /src/app directory that points to your project.
1. Fire up the docker container using `make start`.
1. Profit.

Take a look at the [Flask Foundation](https://github.com/JackStouffer/Flask-Foundation) project for an example of what a Flask project based on best practices looks like.

## Contributing

1. Fork
1. `git checkout -b your-new-feature`
1. `git commit -m 'added some feature'`
1. `git push origin your-new-feature`
1. Create new Pull Request
