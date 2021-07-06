
<!-- .slide: data-background="./assets/images/thisisengineering-raeng-WDCE0T4khsE-unsplash.jpg" class="transition" -->

# Designing the new infrastructure code

Notes: transition vers la conception

##==##

# Designing the new infrastructure code
## Naming is everything

- Everything must be computed from **3 variables**
- Every name must be **understood** without the code
- As a last resort, **ban `if` statements** for `lookup` function

```hcl
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

Notes: Pré-requis à l’automatisation
On dérive tout à partir de 3 inputs (bu, env et dédup)
tout peut etre reconstruit / pas de devinette sauf obligation
pas de switch des lookups
Mettre un exemple

##==##

# Designing the new infrastructure code
## Lego-like modularity

<br/>

![float-left h-600](./assets/images/lego2.jpg)

- Make it easy to create or remove **infrastructure bits**
- Have *small* and **specialized** modules
- Embrace **configuration as code**

Notes: Gestion modulaire par micro-service façon lego

##==##

# Designing the new infrastructure code
## Terraform cloud

![float-left w-700](./assets/images/terraform.png)

- Github integration
- Rights management
- Single overview of every **workspaces**
- Early adoption among the company's products

Notes: Orchestration via terraform cloud
