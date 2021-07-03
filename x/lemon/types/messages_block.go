package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBlock{}

func NewMsgCreateBlock(creator string, blockNumber uint64, blockHash string, blockHeader string, blockData string) *MsgCreateBlock {
	return &MsgCreateBlock{
		Creator:     creator,
		BlockNumber: blockNumber,
		BlockHash:   blockHash,
		BlockHeader: blockHeader,
		BlockData:   blockData,
	}
}

func (msg *MsgCreateBlock) Route() string {
	return RouterKey
}

func (msg *MsgCreateBlock) Type() string {
	return "CreateBlock"
}

func (msg *MsgCreateBlock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBlock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBlock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBlock{}

func NewMsgUpdateBlock(creator string, id uint64, blockNumber uint64, blockHash string, blockHeader string, blockData string) *MsgUpdateBlock {
	return &MsgUpdateBlock{
		Id:          id,
		Creator:     creator,
		BlockNumber: blockNumber,
		BlockHash:   blockHash,
		BlockHeader: blockHeader,
		BlockData:   blockData,
	}
}

func (msg *MsgUpdateBlock) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBlock) Type() string {
	return "UpdateBlock"
}

func (msg *MsgUpdateBlock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBlock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBlock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBlock{}

func NewMsgDeleteBlock(creator string, id uint64) *MsgDeleteBlock {
	return &MsgDeleteBlock{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteBlock) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBlock) Type() string {
	return "DeleteBlock"
}

func (msg *MsgDeleteBlock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBlock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBlock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
