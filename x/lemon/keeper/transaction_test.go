package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lemonsuy/lemon/x/lemon/types"
	"github.com/stretchr/testify/assert"
)

func createNTransaction(keeper *Keeper, ctx sdk.Context, n int) []types.Transaction {
	items := make([]types.Transaction, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendTransaction(ctx, items[i])
	}
	return items
}

func TestTransactionGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTransaction(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetTransaction(ctx, item.Id))
	}
}

func TestTransactionExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTransaction(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasTransaction(ctx, item.Id))
	}
}

func TestTransactionRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTransaction(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTransaction(ctx, item.Id)
		assert.False(t, keeper.HasTransaction(ctx, item.Id))
	}
}

func TestTransactionGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTransaction(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllTransaction(ctx))
}

func TestTransactionCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTransaction(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetTransactionCount(ctx))
}
