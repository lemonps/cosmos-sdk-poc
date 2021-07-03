package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateBlock{}, "lemon/CreateBlock", nil)
	cdc.RegisterConcrete(&MsgUpdateBlock{}, "lemon/UpdateBlock", nil)
	cdc.RegisterConcrete(&MsgDeleteBlock{}, "lemon/DeleteBlock", nil)

	cdc.RegisterConcrete(&MsgCreateTransaction{}, "lemon/CreateTransaction", nil)
	cdc.RegisterConcrete(&MsgUpdateTransaction{}, "lemon/UpdateTransaction", nil)
	cdc.RegisterConcrete(&MsgDeleteTransaction{}, "lemon/DeleteTransaction", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBlock{},
		&MsgUpdateBlock{},
		&MsgDeleteBlock{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransaction{},
		&MsgUpdateTransaction{},
		&MsgDeleteTransaction{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
