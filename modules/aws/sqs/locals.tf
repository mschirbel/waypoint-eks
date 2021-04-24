locals {
  tags = {
    Name        = var.name,
    Owner       = var.owner,
    Environment = var.environment,
    Terraform   = true
  }
  account_id = data.aws_caller_identity.current.account_id
}
