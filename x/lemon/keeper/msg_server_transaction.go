package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/lemonsuy/lemon/x/lemon/types"
)

func (k msgServer) CreateTransaction(goCtx context.Context, msg *types.MsgCreateTransaction) (*types.MsgCreateTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var transaction = types.Transaction{
		Creator: msg.Creator,
		Txhash:  msg.Txhash,
		Nonce:   msg.Nonce,
	}

	id := k.AppendTransaction(
		ctx,
		transaction,
	)

	return &types.MsgCreateTransactionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTransaction(goCtx context.Context, msg *types.MsgUpdateTransaction) (*types.MsgUpdateTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var transaction = types.Transaction{
		Creator: msg.Creator,
		Id:      msg.Id,
		Txhash:  msg.Txhash,
		Nonce:   msg.Nonce,
	}

	// Checks that the element exists
	if !k.HasTransaction(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetTransactionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTransaction(ctx, transaction)

	return &types.MsgUpdateTransactionResponse{}, nil
}

func (k msgServer) DeleteTransaction(goCtx context.Context, msg *types.MsgDeleteTransaction) (*types.MsgDeleteTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasTransaction(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetTransactionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTransaction(ctx, msg.Id)

	return &types.MsgDeleteTransactionResponse{}, nil
}
