package utils

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

func ParseBody(r *http.Request, x interface{}) {
	if body, err := ioutil.ReadAll(r.Body); err == nil {
		if err := json.Unmarshal([]byte(body), x); err != nil {
			log.Fatal("Error in ParseBody")
			return
		}
	}
}
