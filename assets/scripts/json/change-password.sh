#!/bin/bash

# ID=2 sh scripts/json/change-password.sh

curl "https://aqueous-atoll-85096.herokuapp.com/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old_password": "'"${OLD_PASSWORD}"'",
      "new_password": "'"${NEW_PASSWORD}"'"
    }
  }'

echo

# ID="2316" TOKEN="BAhJIiVmYjJlYWNmOTBkMTAwZTdmNWFmZWViY2IxMTA4MjIwNwY6BkVG--1fb2e225a9019fcd3079dc4ced98a3658ce0fd2b" OLD_PASSWORD="me" NEW_PASSWORD="you" sh change-password.sh
