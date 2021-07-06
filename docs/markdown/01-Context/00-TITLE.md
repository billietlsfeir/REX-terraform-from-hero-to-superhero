<!-- .slide: data-background="./assets/images/books.jpg" class="transition" -->

# A bit of context

##==##

# A bit of context
## History

![float-right h-400](./assets/images/books.jpg)

- Young product (less than **2 years**)
- Member of mutualized platform
- Main management requirement : use **managed services** exclusively
- Similar product already exists in Brazil

Notes: 
- Nouveau produit qui a moins de 2 ans 
- Liberté des choix technos et dans notre manière de faire notre release Management
- Exigences de la direction: Services managés 
- Parler de l’adoption des services managés et de la gestion de l’infra de la plateforme des services. Utilisation des services managées

##==##

# A bit of context
## History

![h-600 float-left](./assets/images/clark-young-fQxMGkYXqFU-unsplash.jpg)

<br/>

- **1 cloud engineer** for the entire platform and all its products
- Platform designed for **french market** only
- Many **boilerplate code** duplicated
- **Mutualized infrastructure** for many products

Notes: Parler des difficultés à faire évoluer l’infra :
- Responsabilité non définie / porté hors des équipes dev
- Déploiement multi-BU non prévue
- Duplication de code
- Ressources partagées entre plusieurs applications

##==##

# A bit of context
## The trigger

- **Mono-tenant** data architecture
- New **worldwide** strategy 
  - 🇫🇷 🇵🇹 🇮🇹 🇵🇱 🇧🇷 ...
- The will to merge **2 products**

![float-center h-600](./assets/images/fusion.jpg)

Notes: Parler du produit, la convergeance, la refacturation aux BUs

##==##

# A bit of context
## Technical focus

![h-600 float-left](./assets/images/storage.png)

<br/>

- **28 micro-services** on Kubernetes
  - 18 from France
  - 10 from Brazil
- **5** different **storage backends**
- **Many** Kafka topics
- **Fastly CDN**



Notes: Parler de l’architecture du produit
