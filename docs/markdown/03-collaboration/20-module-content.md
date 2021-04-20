<!-- .slide: class="with-code" -->
# Collaboration

## Module content

* What do you want
* Reuse module is faster than recreate
* Many ways to source module

```terraform
module "module1" {
  source = "./team"
  var1   = "value1"
}
```
<!-- .element: class="big-code" -->

```terraform
module "module1" {
  source = "git@github.com:myrepository//mypath?ref=mytag"
  var1   = "value1"
}
```
<!-- .element: class="big-code" -->

Notes:
source from git, github, bitbucket, http, gcs, s3,local, terraform registry (terraform cloud)


