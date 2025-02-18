---
title: Administration
date: 2023-11-13
author: Paul van Genuchten
---


## Github

The current hub is published via [Github](https://github.com). Github is a commercial service provider offering GIT services plus a number of add-ons to facilitate co-creation. Alternative GIT providers can be considered, such as [gitlab](https://gitlab.com), [bitbucket](https://bitbucket.org/). Notice that it is also possible to install gitlab on premise.

As an LSC hub administrator it is relevant to familiarise yourself with Github. Notice that some tools exist to facilitate the use of Git, such as [Github desktop](https://desktop.github.com/), [Smartgit](https://www.syntevo.com/smartgit/) and [Git Kraken](https://www.gitkraken.com/). Some prefer the [Github plugin](https://marketplace.visualstudio.com/items?itemName=GitHub.GitHubExtensionforVisualStudio) of [Visual Studio Code](https://visualstudio.microsoft.com/).

## LSC Hub Content Pages

A number of content pages is made available to guide the user within the hub. These pages are maintained in github in a [markdown](https://quarto.org/docs/authoring/markdown-basics.html) format. Notice the `edit link` in the footer of each page, which brings you to the source of the page in Github, in order to edit the page. The pages are rendered to html using the [quarto](https://quarto.org/docs/websites/) tool, every time you make an edit to a page. The quarto tool is configured as a [ci-cd](https://en.wikipedia.org/wiki/CI/CD) action in github. You can follow the progress of an action in the `actions` tab. In some cases an action may fail and human interaction is needed to fix the problem and/or restart the action. 

In case you want to make a lot of edits or resolve conflicts, it is often better to clone the repository locally.
Editing of quarto documents locally is facilitated by a [quarto plugin](https://quarto.org/docs/tools/vscode.html) in [visual studio code](https://visualstudio.microsoft.com/). The plugin allows you to preview the website locally.

## Catalogue 

The catalogue can be linked to various information sources, with or without the data being stored on the LSC hub. Therefore, if you know existing information sources that are missing and should be added. Proving metadata is essential for findability and to avoid ambiguity. 

The source of catalogue records is maintained in a git repository. The records are organised in Global, Continental, and country level. Within country they are organised by organisation.

Metadata records are stored in the [mcf](https://geopython.github.io/pygeometa/reference/mcf/) format, a subset of iso19115 in a conveniant yaml encoding. But you can also add them as iso19115 xml format.

Every time a record is added or modified in Git, a CI-CD action published the records to the catalogue. Depending on the setup this may take 10 minutes to a day.

A number of mechanisms is available to load records into the catalogue.

- Import records from external sources, such as data portals (zenodo, dataverse, CSW, STAC, OSF)
- MCF records can be created using [mdme](https://osgeo.github.io/mdme)
- A Excel template is available, on which resources can be described. A single resource per record.

The geodata crawler tool is used to convert Excel to MCF. The crawler converts also from MCF to XML, which is then loaded into the catalogue.

## Webdav

A webdav service can be added to facilitate users in uploading a dataset. The datasets are stored in a folder on the server. Backups should be made of that folder at intervals, to prevent data loss. A webdav service can be mounted as a file folder in Windows. Contributors are strongly invited to place an MCF file next to each data file they upload. If such a file is not added, it can be automatically generated at intervals using the geodatacrawler tool. Contributors can then update the MCF to match their expectations. The MCF files are loaded in the catalogue at intervals.

## Map services

Map services on source data are configured using [mapserver mapfiles](https://mapserver.org/mapfile/). The configuration is generated from the metadata of the source data using the [geodatacrawler](https://pypi.org/project/geodatacrawler/) tool. Mapfiles are stored on a drive (accessible via webdav). Source of the mapfiles is preferably stored on Git.

Every new mapfile is registered in the mapserver config file as an [alias](https://mapserver.org/mapfile/config.html)

The metadata of data resources is updated by the crawler to include a link to the mapserver.

## Maps

The [TerriaJS](https://terria.io) framework enables users to share maps and map stories with stakeholders (share button top-right). Notice that you can also use this functionality to link from a description of a resource to a map, which displays some data in a certain context.

```markdown
[A nice map](https://maps.lsc-hubs.org/#start=%7B%22version%22%...)
```

Another option is to store the map definition (urldecoded) on a folder of TerriaJS. The map is then available by its filename. You can now add a link to this map for example in the `related maps` section of TerriaJS (config.json). 


## User feedback

Feedback options are an important aspect of a community. With feedback the administrators become aware of new opportunities for the hub. Feedback can be organised in various ways.

### Form to email

Platforms such as [formspark.io](https://formspark.io) offer capabilities to send any form as an email to an email box. Administrators monitor incoming emails at intervals, while responding to user questions. It is recommended to share the feedback, for others to learn about the interaction. For example through a Frequently Asked Questions section in the Hub Content Pages.

### Github discussions

Discussions are managed within github. A [giscus widget](https://giscus.app/) can be added to every resource page, so users can provide feedback or ask questions about the resource. These questions are stored as github discussions. Discussions can be answered from the resource page (a github login is required) or from github discussions. Users should be invited to the github project to be able to administer github discussions.


