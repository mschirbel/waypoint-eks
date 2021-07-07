package main

import (
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	log "github.com/sirupsen/logrus"
	"golang.app/v1/pkg/migrate"
	"golang.app/v1/pkg/routes"
)

func main() {

	migrate.MigrateDatabase()

	// start serving requests
	r := mux.NewRouter()
	routes.RegisterBookStoreRoutes(r)
	http.Handle("/", r)
	log.SetFormatter(&log.JSONFormatter{})
	log.Fatal(http.ListenAndServe(":9000", r))
}
