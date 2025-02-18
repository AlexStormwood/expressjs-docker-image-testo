# expressjs-docker-image-testo

Quick test of how to put an ExpressJS app into a Docker image for use in Docker containers.

This Docker image is available on this repository's GitHub Packages page, [here](https://github.com/AlexStormwood/expressjs-docker-image-testo/pkgs/container/expressjs-docker-image-testo).

## Usage

This project automatically builds itself into Docker images upon every push to the repo.

So, you can make your own Docker Compose file to download that Docker image and use it in a service.

You can map whatever port you like to it, as long as it maps to an internal port of 5000.

Here's an example:

```yml
services:
  backend:
    image: ghcr.io/alexstormwood/expressjs-docker-image-testo:latest
    container_name: expressjstesto
    ports:
      - 5050:5000
    restart: unless-stopped
```

You could even map multiple host ports to the Docker image - just keep in mind that the Docker image is using port 5000 internally!

```yml
services:
  backend:
    image: ghcr.io/alexstormwood/expressjs-docker-image-testo:latest
    container_name: expressjstesto
    ports:
      - 5050:5000
      - 54321:5000
      - 3001:5000
    restart: unless-stopped
```