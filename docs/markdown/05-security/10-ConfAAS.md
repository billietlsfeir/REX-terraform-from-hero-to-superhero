# Security
## Configuration as a service

Stop putting secrets in human hands !

##==##
# Security
## Configuration as a service

```hcl
resource "aws_iam_access_key" "application_account" {
  user    = "my_application_account"
}

resource "kubernetes_secret" "example" {
  metadata {
    name = "application_aws_access_key"
  }
  data = {
    user   = "${aws_iam_access_key.application_account.user}"
    secret = "${aws_iam_access_key.application_account.secret}"
  }
  type = "opaque"
}
```
