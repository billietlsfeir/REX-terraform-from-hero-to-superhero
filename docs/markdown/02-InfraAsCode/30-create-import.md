# Infrastructure as Code
## Create and import

You can make terraform track infrastructure created elsewhere.

##==##
# Infrastructure as Code
## Create and import

You can make terraform track infrastructure created elsewhere...

But it will require some work.

##==##
# Infrastructure as Code
## Create and import

This bucket already exists

```hcl
resource "aws_s3_bucket" "old_bucket" {
  bucket = "an-old-bucket-to-track"
}
```

Tell terraform to track it by running

```shell
terraform import aws_s3_bucket.old_bucket an-old-bucket-to-track
```
