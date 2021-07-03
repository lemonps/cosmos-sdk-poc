package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/lemonsuy/lemon/x/lemon/types"
)

func (k msgServer) CreateBlock(goCtx context.Context, msg *types.MsgCreateBlock) (*types.MsgCreateBlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var block = types.Block{
		Creator:     msg.Creator,
		BlockNumber: msg.BlockNumber,
		BlockHash:   msg.BlockHash,
		BlockHeader: msg.BlockHeader,
		BlockData:   msg.BlockData,
	}

	id := k.AppendBlock(
		ctx,
		block,
	)

	return &types.MsgCreateBlockResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateBlock(goCtx context.Context, msg *types.MsgUpdateBlock) (*types.MsgUpdateBlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var block = types.Block{
		Creator:     msg.Creator,
		Id:          msg.Id,
		BlockNumber: msg.BlockNumber,
		BlockHash:   msg.BlockHash,
		BlockHeader: msg.BlockHeader,
		BlockData:   msg.BlockData,
	}

	// Checks that the element exists
	if !k.HasBlock(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetBlockOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetBlock(ctx, block)

	return &types.MsgUpdateBlockResponse{}, nil
}

func (k msgServer) DeleteBlock(goCtx context.Context, msg *types.MsgDeleteBlock) (*types.MsgDeleteBlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasBlock(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetBlockOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBlock(ctx, msg.Id)

	return &types.MsgDeleteBlockResponse{}, nil
}
