#!/bin/bash
protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
 --proto_path=$(pwd)/proto \
 --ts_proto_out=$(pwd)/ts-proto \
 --ts_proto_opt=nestJs=true \
 --ts_proto_opt=esModuleInterop=true \
 --ts_proto_opt=outputEncodeMethods=false \
 --ts_proto_opt=outputJsonMethods=false \
 --ts_proto_opt=outputClientImpl=false \
 $(pwd)/proto/*.proto
