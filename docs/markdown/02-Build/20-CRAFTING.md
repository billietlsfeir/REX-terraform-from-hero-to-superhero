
<!-- .slide: data-background="./assets/images/dan-schiumarini-6o-K6uyKD2U-unsplash.jpg" class="transition" -->

# Crafting the new infrastructure

Notes: Transition vers les réalisations

##==##

# Crafting the new infrastructure
## "Technical" modules

![float-left w-700](./assets/images/tente-quechua.jpg)

- **Specialized** and **simple** modules
  - **Postgresql** instance / user
  - **Kafka** instance / user
  - **Datadog** slack alert / SLO
  - ....
- **Product-specific** architectural decisions embedded
- **Ready to use** configuration for the application

Notes: Spécifique à l'application
répond à une problematique technique précise

##==##
<!-- .slide: class="with-code-bg-dark"  -->
# Crafting the new infrastructure
## "Application" modules

- Built **exclusively** with technical modules
- **Colocated** with application code


```bash 
me@my-laptop:~/workspace/my-company/miro-service-foo-$ ls -l
drwxr-xr-x 3 me me  4096 .github
drwxr-xr-x 3 me me  4096 docs
drwxr-xr-x 3 me me  4096 scripts
drwxr-xr-x 5 me me  4096 src
drwxr-xr-x 3 me me  4096 terraform
-rw-r--r-- 1 me me   372 .gitignore
-rw-r--r-- 1 me me   590 .releaserc.json
-rw-r--r-- 1 me me    67 build.properties
-rw-r--r-- 1 me me  2628 docker-compose.yml
-rw-r--r-- 1 me me   470 Dockerfile
-rw-r--r-- 1 me me  2222 Makefile
-rw-r--r-- 1 me me 22863 pom.xml
-rw-r--r-- 1 me me  3651 README.md
```
<!-- .element: style="color:white" -->

Notes: Code terraform intégré au dépot de code applicatif > dossier terraform
Les modules applicatifs utilisent (presque) exclusivement des modules techniques


##==##

# Crafting the new infrastructure
## The tf-infra project

![float-left w-800](./assets/images/tf-infra.png)

<br/><br/>
* **380** ressources
* **19** "technical" modules
* **28** "application" modules
* **15** terraform workspaces 

Notes: Montrer la doc (ou pas en fait)
