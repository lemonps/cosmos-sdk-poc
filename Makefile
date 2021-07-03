PWD = /Users/lemon.pattharathon/lemon-research/cosmos-sdk-poc

lemon: 
	go build $(PWD)/cmd/lemond
	@echo "lemond cli has been installed."

