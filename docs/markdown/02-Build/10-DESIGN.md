
<!-- .slide: data-background="./assets/images/thisisengineering-raeng-WDCE0T4khsE-unsplash.jpg" class="transition" -->

# Designing the new infrastructure code

Notes: Gaëtan

transition vers la conception
Terraform (explications)

##==##
<!-- .slide: class="with-code-bg-dark"  -->
# Designing the new infrastructure code
## Naming is everything

- Everything must be computed from **3 variables**
- Every name must be **understood** without the code
- As a last resort, **ban `if` statements** for `lookup` function

```terraform
locals {
  gcp_project = lookup(
    {
      "ptbu-uat1" = "sp-${var.bu}-myproject-${var.environment}-XXX",
      "ptbu-prod" = "sp-${var.bu}-myproject-${var.environment}-XXX",
      "frbu-dev"  = "sp-${var.bu}-myproject-${var.environment}-XXX"
    },
    "${var.bu}-${var.environment}",
    "sp-${var.bu}-xxx-myproject-${var.environment}-XXX"
  )
}
```
<!-- .element: style="color:white" -->

Notes: Gaëtan

Pré-requis à l’automatisation
On dérive tout à partir de 3 inputs (bu, env et dédup)
tout peut etre reconstruit / pas de devinette sauf obligation
pas de switch des lookups
Mettre un exemple

##==##

# Designing the new infrastructure code
## Lego-like modularity

<br/>

![float-left w-600](./assets/images/kelly-sikkema-Z9AU36chmQI-unsplash.jpg)

- Make it easy to create or remove **infrastructure bits**
- Have **small** and **specialized** modules
- Embrace **configuration as code**

Notes: Gaëtan

Gestion modulaire par micro-service façon lego
Modules => library terraform (ensemble de resources)
