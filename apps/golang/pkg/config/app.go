package config

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	db *gorm.DB
)

func Connect() {
	var conn = fmt.Sprintf("%s:%s@tcp(%s:3306)/books", os.Getenv("MYSQL_USER"), os.Getenv("MYSQL_PWD"), os.Getenv("MYSQL_ENDPOINT"))
	fmt.Printf("Senha do Banco: %s", os.Getenv("MYSQL_PWD"))
	d, err := gorm.Open("mysql", conn)
	if err != nil {
		panic(err)
	}
	db = d
}

func GetDB() *gorm.DB {
	return db
}
