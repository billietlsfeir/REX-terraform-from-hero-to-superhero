
<!-- .slide: data-background="./assets/images/dan-schiumarini-6o-K6uyKD2U-unsplash.jpg" class="transition" -->

# Crafting the new infrastructure

Notes: Transition vers les réalisations

##==##

# Crafting the new infrastructure
## "Technical" modules

![float-left w-600](./assets/images/tente-quechua.jpg)

- **Specialized** and **simple** modules
  - **Postgresql** instance / user
  - **Kafka** instance / user
  - **Datadog** SLO
  - **Vault** approle
  - ....
- **Product-specific** architectural decisions embedded
- **Ready to use** configuration for the application
- Built by **OPS** for DEVs

Notes: Spécifique à l'application
répond à une problematique technique précise

##==##
<!-- .slide: class="with-code-bg-dark"  -->
# Crafting the new infrastructure
## "Application" modules

![float-left w-600](./assets/images/michael-dziedzic-0n70cnyOFgc-unsplash.jpg)

- Built **exclusively** with technical modules
- **Colocated** with application code
- **Same lifecycle** as the application
- Built by **DEVs**, reviewed by OPS

Notes: Code terraform intégré au dépot de code applicatif > dossier terraform
Les modules applicatifs utilisent (presque) exclusivement des modules techniques


##==##

# Crafting the new infrastructure
## The tf-infra project

![float-left w-600](./assets/images/tf-infra.png)

* **380** ressources
* **19** "technical" modules
* **28** "application" modules
* **15** terraform workspaces 

Notes: Montrer la doc (ou pas en fait)
