package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/lemonsuy/lemon/x/lemon/types"
)

func TestTransactionMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateTransaction(ctx, &types.MsgCreateTransaction{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestTransactionMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateTransaction
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateTransaction{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTransaction{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTransaction{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateTransaction(ctx, &types.MsgCreateTransaction{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateTransaction(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestTransactionMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteTransaction
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteTransaction{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteTransaction{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteTransaction{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateTransaction(ctx, &types.MsgCreateTransaction{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteTransaction(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
