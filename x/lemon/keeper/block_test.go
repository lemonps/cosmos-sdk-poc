package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lemonsuy/lemon/x/lemon/types"
	"github.com/stretchr/testify/assert"
)

func createNBlock(keeper *Keeper, ctx sdk.Context, n int) []types.Block {
	items := make([]types.Block, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendBlock(ctx, items[i])
	}
	return items
}

func TestBlockGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBlock(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetBlock(ctx, item.Id))
	}
}

func TestBlockExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBlock(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasBlock(ctx, item.Id))
	}
}

func TestBlockRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBlock(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBlock(ctx, item.Id)
		assert.False(t, keeper.HasBlock(ctx, item.Id))
	}
}

func TestBlockGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBlock(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllBlock(ctx))
}

func TestBlockCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBlock(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetBlockCount(ctx))
}
