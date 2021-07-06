<!-- .slide: data-background="./assets/images/patrick-fore-74TufExdP3Y-unsplash.jpg" class="transition" -->

# A bit of context

Notes: Gaëtan

##==##

# A bit of context
## History

![float-left w-600](./assets/images/books.jpg)

- Young product (less than **2 years**)
- Member of mutualized platform
- Management requirement
  - use **managed services** exclusively
- Similar product already exists in Brazil

Notes: Gaëtan
- Nouveau produit qui a moins de 2 ans 
- Liberté des choix technos et dans notre manière de faire notre release Management
- Exigences de la direction: Services managés 
- Parler de l’adoption des services managés et de la gestion de l’infra de la plateforme des services. Utilisation des services managées

##==##

# A bit of context
## History

![float-left w-600](./assets/images/clark-young-fQxMGkYXqFU-unsplash.jpg)

<br/>

- **1 cloud engineer** for the entire platform and all 
its products
- Platform designed for **french market** only
- Infrastructure already provided by **Terraform** 
  - hosted on **Github**
- Many **boilerplate code** duplicated
- **Mutualized infrastructure** for many products


Notes: 
Gaëtan

Parler des difficultés à faire évoluer l’infra :
- Responsabilité non définie / porté hors des équipes dev
- Déploiement multi-BU non prévue
- Duplication de code
- Ressources partagées entre plusieurs applications

##==##

# A bit of context
## The trigger

- New **worldwide** strategy 
  - 🇫🇷 🇵🇹 🇮🇹 🇵🇱 🇧🇷 ...
- The will to merge **2 products**
- **Mono-tenant** architecture

![float-center h-600](./assets/images/fusion.jpg)

Notes: Gaëtan => Louis

2020 Portugal
Parler du produit, la convergeance, la refacturation aux BUs

##==##

# A bit of context
## Technical focus

![float-left w-600](./assets/images/storage.png)

<br/>

- **28 micro-services** on Kubernetes
  - 18 from France
  - 10 from Brazil
- Java (Spring boot), Javascript (React)
- **5** different **storage backends**
- **Many** Kafka topics
- **Fastly CDN**



Notes: Louis

Parler de l’architecture du produit
