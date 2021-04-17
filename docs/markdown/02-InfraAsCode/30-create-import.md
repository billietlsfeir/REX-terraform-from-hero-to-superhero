# Infrastructure as Code
## Create and import

You can make terraform track infrastructure created elsewhere.

##==##
# Infrastructure as Code
## Create and import

You can make terraform track infrastructure created elsewhere...

But it will require some work.

##==##
<!-- .slide: class="with-code" -->
# Infrastructure as Code
## Create and import

This bucket already exists

```tf
resource "aws_s3_bucket" "old_bucket" {
  bucket = "an-old-bucket-to-track"
}
```
<!-- .element: class="big-code" -->

Tell terraform to track it by running

```shell
terraform import aws_s3_bucket.old_bucket an-old-bucket-to-track
```
<!-- .element: class="big-code" -->
