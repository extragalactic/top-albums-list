#!/bin/bash
mongoimport -d edmDistrictData -c albums --type csv --fields NumberPlays,AlbumName --file data_import/listens.csv
