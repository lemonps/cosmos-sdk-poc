package lemon

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lemonsuy/lemon/x/lemon/keeper"
	"github.com/lemonsuy/lemon/x/lemon/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the block
	for _, elem := range genState.BlockList {
		k.SetBlock(ctx, *elem)
	}

	// Set block count
	k.SetBlockCount(ctx, genState.BlockCount)

	// Set all the transaction
	for _, elem := range genState.TransactionList {
		k.SetTransaction(ctx, *elem)
	}

	// Set transaction count
	k.SetTransactionCount(ctx, genState.TransactionCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all block
	blockList := k.GetAllBlock(ctx)
	for _, elem := range blockList {
		elem := elem
		genesis.BlockList = append(genesis.BlockList, &elem)
	}

	// Set the current count
	genesis.BlockCount = k.GetBlockCount(ctx)

	// Get all transaction
	transactionList := k.GetAllTransaction(ctx)
	for _, elem := range transactionList {
		elem := elem
		genesis.TransactionList = append(genesis.TransactionList, &elem)
	}

	// Set the current count
	genesis.TransactionCount = k.GetTransactionCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
