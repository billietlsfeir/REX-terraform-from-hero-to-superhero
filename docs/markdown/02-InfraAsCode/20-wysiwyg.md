
# Infrastructure as Code
## What you see is what you get

Terraform will provide infrastructure bits just as you wrote it.

Nothing more, nothing less.

##==##

# Infrastructure as Code
## What you see is what you get

This will get you an empty bucket and an empty DNS zone.

```hcl
resource "aws_s3_bucket" "demo_bucket" {
  bucket = "a-demo-bucket-for-LVMH"
}

resource "aws_route53_zone" "demo_route53_zone" {
  name = "hello-lvmh.com"
}
```

Notes: 
- The bucket is empty, private, with no static-website access
- The DNS zone will have no field provided

##==##

# Infrastructure as Code
## What you see is what you get

    But when we do this in the console, we sometimes get many resources automatically created...

Terraform won't hide such things.

Notes:
Amazon's web console hides many resource creation, but terraform uses the API, which does just what it is told to.
