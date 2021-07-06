
<!-- .slide: data-background="./assets/images/cesar-carlevarino-aragon-NL_DF0Klepc-unsplash.jpg" class="transition" -->

# How to manage the "Schmilblick" ?

Notes: Louis => Gaëtan

Ci et outils utilisés :
Terraform docs
Semantic release
dependabot

##==##

# Orchestrate everything
## Terraform cloud

![float-left w-600](./assets/images/terraform.png)

- Github integration
- Rights management
- Single overview of every **workspaces**
- Early adoption among the company's products

Notes: Gaëtan

Orchestration via terraform cloud


##==##

# Keep the doc up to date
## Terraform-docs

![float-left w-600](./assets/images/terraform_docs.png)

- Can be **injected** in an existing markdown file
- Generate **documentation from code** automatically
  - Requirements
  - Providers
  - Modules
  - Inputs
  - Outputs

Notes: Gaëtan


##==##

# Automate your release process
## Semantic release

![float-left w-600](./assets/images/semantic_release.png)

- Create **releases automatically** with your CI pipeline
- Track changes from **commit messages**
- Automatically **increment** version number
- Generate **changelogs** automatically
- **Does not depends** on your language / framework

Notes: Gaëtan

possibilité de faire de la delivery continue ou non


##==##

# Keep your modules up to date
## Dependabot

![float-left w-600](./assets/images/dependabot.png)

- Track **dependencies releases** for you
- Opens **pull-requests** with version increments
- Awesome with full **integration tests**

Notes: Gaëtan

Si les tests d'integ sont bons, on peut merger les yeux fermés


##==##

# Don't miss any changes
## Codeowners

![float-left w-600](./assets/images/jud-mackrill-Of_m3hMsoAA-unsplash.jpg)

- Automatically **add reviewers**
- Can **split per sub-folder** in the repository


Notes: Gaëtan

review des PR dependabot et des devs

