---
title: postgres
date: 2023-11-13
author: Paul van Genuchten
---

Postgres database including PostGIS extension facilitates searches on the catalogue.

Contents of the database is a replication of the Git repository so less urgent to backup.

LSC hub uses a standard [postgis image](https://hub.docker.com/r/postgis/postgis) from docker hub.

DB username is set via environment variable.