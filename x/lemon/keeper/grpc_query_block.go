package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/lemonsuy/lemon/x/lemon/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BlockAll(c context.Context, req *types.QueryAllBlockRequest) (*types.QueryAllBlockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var blocks []*types.Block
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	blockStore := prefix.NewStore(store, types.KeyPrefix(types.BlockKey))

	pageRes, err := query.Paginate(blockStore, req.Pagination, func(key []byte, value []byte) error {
		var block types.Block
		if err := k.cdc.UnmarshalBinaryBare(value, &block); err != nil {
			return err
		}

		blocks = append(blocks, &block)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBlockResponse{Block: blocks, Pagination: pageRes}, nil
}

func (k Keeper) Block(c context.Context, req *types.QueryGetBlockRequest) (*types.QueryGetBlockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var block types.Block
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasBlock(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BlockKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBlockIDBytes(req.Id)), &block)

	return &types.QueryGetBlockResponse{Block: &block}, nil
}
