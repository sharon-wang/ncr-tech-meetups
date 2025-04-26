![ncr tech meetups logo](assets/logo.png)

# {🍁} ncr tech meetups

this is the project repo for a collection of tech meetups in the ottawa / gatineau "national capital region" (ncr).

to check it out, visit [sharon-wang.github.io/ncr-tech-meetups](https://sharon-wang.github.io/ncr-tech-meetups).

## table of contents

- [contributing](#contributing)
  - [1️⃣ fork and clone this project](#1️⃣-fork-and-clone-this-project)
  - [2️⃣ install dependencies](#2️⃣-install-dependencies)
  - [3️⃣ make your changes](#3️⃣-make-your-changes)
    - [add a new meetup](#add-a-new-meetup)
    - [modify an existing meetup](#modify-an-existing-meetup)
    - [remove a meetup](#remove-a-meetup)
  - [4️⃣ preview your changes locally](#4️⃣-preview-your-changes-locally)
    - [quarto ide support](#quarto-ide-support)
  - [5️⃣ submit a pull request](#5️⃣-submit-a-pull-request)
- [project structure](#project-structure)
  - [pages](#pages)
  - [data](#data)
  - [config](#config)
  - [templates](#templates)
  - [styles](#styles)
  - [assets](#assets)
- [license](#license)

## contributing

if you're just looking to add/modify/remove meetups, you can edit the [meetups.yml](data/meetups.yml) file as described under the "[make your changes](#3️⃣-make-your-changes)" section and submit a pull request.

instead of adding the meetup yourself, you can also file a request to add a new meetup using this issue form: [add a new meetup](https://github.com/sharon-wang/ncr-tech-meetups/issues/new?template=add-meetup.yml).

if you want to build and preview the website locally, follow the instructions below.

### 1️⃣ fork and clone this project

to contribute to this project, first [fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository) to your own github account.

then, [clone the forked repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#cloning-your-forked-repository) to your local machine.

### 2️⃣ install dependencies

this project uses [quarto](https://quarto.org/) as a static site generator. to build the website locally, you need to have quarto installed. you can install quarto by following the instructions on the [quarto website](https://quarto.org/docs/get-started/).

### 3️⃣ make your changes

#### add a new meetup

to add a new meetup, add an entry to the [meetups.yml](data/meetups.yml) file. the meetups are sorted alphabetically by name in the file.

the entry should look something like this:

```yaml
- name: Name of the meetup
  description: A short description of the meetup. A single sentence is best.
  categories:
    - relevant
    - categories
  links:
    - text: Website
      url: "https://example.com"
    - text: Meetup
      url: "https://www.meetup.com/"
    - text: Discord
      url: "https://discord.com/invite"
    - text: Slack
      url: "https://slack.com"
    - text: Google Group
      url: "https://groups.google.com"
```

note that the indentation is important in YAML. make sure to use spaces (2 of them!), not tabs, for indentation (apologies if you are a tab enthusiast).

#### modify an existing meetup

to modify an existing meetup, find the entry in the [meetups.yml](data/meetups.yml) file and make your changes.

#### remove a meetup

to remove a meetup, find the entry in the [meetups.yml](data/meetups.yml) file and delete it.

### 4️⃣ preview your changes locally

with quarto installed, you can build the website by running the following command from the root directory of the project:

```sh
quarto preview
```

this will start a local web server and open the website in your default web browser. you can make changes to the quarto files and the website will automatically refresh to show your changes upon saving the file. one exception is the `meetups.yml` file, which doesn't trigger a refresh. to see the changes in the `meetups.yml` file reflected in the site, `Ctrl/Cmd + S` or save any of the `.qmd` files, the `_quarto.yml` file or the `theme.scss` file to trigger a refresh.

to exit the preview, enter `Ctrl/Cmd + C` in the terminal to shut down the web server.

#### quarto ide support

- if you're using [VS Code](https://code.visualstudio.com/), you can install the [quarto extension](https://marketplace.visualstudio.com/items?itemName=quarto.quarto) for easier editing and previewing.
- if you're using [Positron](https://positron.posit.co/) or [RStudio](https://posit.co/downloads/), these IDEs have bundled support for quarto.

### 5️⃣ submit a pull request

once you have made your changes, commit them to your forked repository and push them to github. then, [create a pull request to the original repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork). your changes will be reviewed and if all looks good, your PR will be merged into the main repo 🙂

## project structure

### pages
- [`index.qmd`](./index.qmd): the main page of the website. it contains the collection of meetups.
- [`about.qmd`](./about.qmd): the about page of the website.
- [`add-meetup.qmd`](./add-meetup.qmd): a page that outlines how to contribute to the website, by adding, modifying, or removing meetups.
- [`404.qmd`](./404.qmd): the custom 404 page that is displayed when a page is not found.

### data
- [`data/meetups.yml`](./data/meetups.yml): the file that contains the list of meetups. each meetup is represented as a YAML object with the following fields:
  - `name`: name of the meetup.
  - `description`: \[optional\] short description of the meetup; preferably a single sentence.
  - `categories`: list of categories to tag the meetup. these categories are used to filter the meetups on the main page. 2-3 categories are recommended.
  - `links`: a list of links related to the meetup. each link has a `text` and a `url`.

### config
- [`_quarto.yml`](./_quarto.yml): the configuration file for quarto. it contains the settings for the website, such as the title, author, and theme.

### templates
- [`templates/_listing.ejs`](templates/_listing.ejs): the template for the listing page. it is a [custom quarto listing template](https://quarto.org/docs/websites/website-listings-custom.html) uses [EJS](https://ejs.co/) as the templating engine.

### styles
- [`styles/theme.scss`](styles/theme.scss): the main stylesheet for the website. it contains the styles for the website, such as colors, fonts, and layout. it overrides the default styles provided by the themes specified in the `_quarto.yml` file.

### assets
- various [assets](assets) used in the project, such as images, logos and icons.

## license

<a href="https://creativecommons.org/licenses/by-sa/4.0"><img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" height=30 alt="Creative Commons Attribution-ShareAlike 4.0 International Public
License icon"/></a>

[ncr tech meetups](https://sharon-wang.github.io/ncr-tech-meetups) © 2025-present by [sharon wang](https://sharons.site) is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0).
