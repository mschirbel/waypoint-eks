project = "golang-app"

config {
  env = {
    MYSQL_ENDPOINT = configdynamic("aws-ssm", {
        path    = "/dev/us-east-1/app/golang/MYSQL_ENDPOINT"
    }),
    MYSQL_USER = configdynamic("aws-ssm", {
        path    = "/dev/us-east-1/app/golang/MYSQL_USER"
    }),
    MYSQL_PWD = configdynamic("aws-ssm", {
        path    = "/dev/us-east-1/app/golang/MYSQL_PWD"
    })
  }
}

app "books" {
    build {
        use "docker" {
            disable_entrypoint = false
        }
    }
    deploy {
        use "docker" {
            static_environment = {
                "ENV": "dev",
                "LOG_LEVEL": "debug"
            }
        }
    }
}
