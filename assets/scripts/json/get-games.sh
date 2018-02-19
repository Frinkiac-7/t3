#!/bin/bash

# ID=2 sh scripts/sign-out.sh

curl "http://tic-tac-toe.wdibos.com/games/" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
