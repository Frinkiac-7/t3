#!/bin/bash

# ID=2 sh scripts/sign-out.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games/" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
