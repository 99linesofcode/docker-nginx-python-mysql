# Docker-NGINX-Python-MySQL

I spun up this Docker setup in order to familiarise myself with docker-compose and the way NGINX can communicate with Python over uWSGI. As I no longer make use of Python for building my backend services, this repository is no longer actively maintained. Pull requests to update or improve upon this code are still very welcome but I will not be contributing to the development for this repository in the foreseeable future.

Note that the `uwsgi.ini` configuration lives in a separate boilerplate repository: https://github.com/99linesofcode/playground-flask. You might want to look into setting up a Docker unix socket connection between containers as opposed to the TCP/IP socket that I setup in the example project.

Happy tinkering.

## License
Docker-NGINX-Python-MySQL is licensed under the [MIT license](https://opensource.org/licenses/MIT)
