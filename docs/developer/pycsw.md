---
title: pycsw
date: 2023-11-13
author: Paul van Genuchten
---

[pycsw](https://pycsw.org) is a catalogue implementation in python, supporting a range of record exchange standards (CSW, oai-pmh, STAC, Opensearch) for optimal interoperability. Backend is PostGres, MariaDB or SQLite.

- Website: <https://pycsw.org>
- Github: <https://github.com/geopython/pycsw>

## pycsw in LSC-Hubs

pycsw is configured with a PostGres backend. Every time records are updated on a git repository a CI/CD action updates the records in the database. 

pycsw is deployed using the latest container from [docker hub](https://hub.docker.com/r/geopython/pycsw)

Configuration, pycsw.yaml (such as connection to the database), is mounted into the container. An environment variable $PYCSW_CONFIG is set to the path of the configuration file.

A LSC-Hub skin has been developed to match with the other hub components. The skin is mounted into the container at deployment time, overwriting the default skin. The skin is based on a tailored skin, available on [github](https://github.com/pvgenuchten/pycsw-skin).

The skin introduces some capabilities, such as providing a link to terriajs, in case the record contains a WMS link.