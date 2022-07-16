FROM mongo

COPY db.json /db.json
CMD mongoimport \
    --host mongodb \
    --db pokemonwebsite \
    --collection pokemonList \
    --type json \
    --file /db.json \
    --jsonArray
