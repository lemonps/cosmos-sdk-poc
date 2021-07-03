PWD = $(shell pwd)

lemon: 
	go build $(PWD)/cmd/lemond
	@echo "lemond cli has been installed."