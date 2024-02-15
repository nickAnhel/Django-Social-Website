# Social Website

Study project from the book "Django 4 by Example" by Antonio Mele

# Local Launcing

First of all you need to create python virtual environment. You can do this by running
the following command in your terminal

```console
python -m venv "your-venv-name"
```

Next you need to install all third-party modules.

```console
pip install -r requirements.txt
```

Next you need to create *.env* file relying on the *.env.example* file.

Ultimately, you need to install the Redis image using Docker and execute this.

```console
docker pull redis
docker run -it --rm --name redis -p 6379:6379 redis
```
