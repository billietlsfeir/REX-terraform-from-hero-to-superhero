# Security
## Compliance test

Your integration tests can not only check that your features work as intended, but also check that they are compliant with your policies.

##==##
# Security
## Compliance test

For runtime compliance checks, you might want to take a look at sentinel.

Notes:
Runtime compliance checks because some rules can't be enforced at build time (no push to prod after 6pm).
Sentinel is hashicorp's policy as code and need terraform enterprise to be used.