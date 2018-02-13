#!/bin/bash

curl --include --request PATCH "https://aqueous-atoll-85096.herokuapp.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token="${TOKEN} \
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": true
    }
  }'
echo

# Alternatively
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/books/${ID}"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request PATCH \
#   --header "Content-type: application/json" \
#   --data '{
#     "book": {
#       "title": "'"${NEW-TITLE}"'",
#       "author": "'"${NEW-AUTHOR}"'"
#     }
#   }'
#
# echo
