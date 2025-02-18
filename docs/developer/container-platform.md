---
title: Container platform
date: 2025-01-18
author: Paul van Genuchten
---

2 container platform implementations for setting up an LSC hub have been developed.

- Docker compose
- Kubernetes

Both implementations use similar docker containers, but quite different deployment mechanisms.

## Docker compose

In a virtual environment a docker composition can be deployed. The composition uses traeffic to manage the SSH certificate (letsencrypt) and routing to the various containers. Containers are directly downloaded from [Dockerhub](https://hub.docker.com) or [Github Container Registry](https://ghrc.io)

## Kubernetes

The kubernetes deployment is prepared in Git and automatically deployed via ArgoCD.
Containers are deployed from a dedicated container registry based on [Harbor](https://goharbor.io/).

