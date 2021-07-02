
<!-- .slide: data-background="./assets/images/thisisengineering-raeng-WDCE0T4khsE-unsplash.jpg" class="transition" -->

# Designing the new infrastructure code

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
      "ptlm-uat1" = "sp-${var.bu}-instala-${var.environment}-cdp",
      "ptlm-prod" = "sp-${var.bu}-instala-${var.environment}-cdp",
      "frlm-dev"  = "sp-${var.bu}-instala-${var.environment}-cdp"
    },
    "${var.bu}-${var.environment}",
    "sp-${var.bu}-des-instala-${var.environment}-cdp"
  )
}
```

##==##

# Designing the new infrastructure code
## Lego-like modularity

![float-left w-700](./assets/images/puzzle-1019766_1280.jpg)

- Make it easy to create or remove **infrastructure bits**
- Have *small* and **specialized** modules
- Embrace **configuration as code**

##==##

# Designing the new infrastructure code
## Terraform cloud

![float-left w-700](./assets/images/terraform.png)

- Github integration
- Rights management
- Single overview of every **workspaces**
- Early adoption among the company's products
