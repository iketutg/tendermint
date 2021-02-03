// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: tendermint/types/events.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type EventDataRoundState struct {
	Height uint64 `protobuf:"varint,1,opt,name=height,proto3" json:"height,omitempty"`
	Round  int32  `protobuf:"varint,2,opt,name=round,proto3" json:"round,omitempty"`
	Step   string `protobuf:"bytes,3,opt,name=step,proto3" json:"step,omitempty"`
}

func (m *EventDataRoundState) Reset()         { *m = EventDataRoundState{} }
func (m *EventDataRoundState) String() string { return proto.CompactTextString(m) }
func (*EventDataRoundState) ProtoMessage()    {}
func (*EventDataRoundState) Descriptor() ([]byte, []int) {
	return fileDescriptor_72cfafd446dedf7c, []int{0}
}
func (m *EventDataRoundState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EventDataRoundState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EventDataRoundState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EventDataRoundState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EventDataRoundState.Merge(m, src)
}
func (m *EventDataRoundState) XXX_Size() int {
	return m.Size()
}
func (m *EventDataRoundState) XXX_DiscardUnknown() {
	xxx_messageInfo_EventDataRoundState.DiscardUnknown(m)
}

var xxx_messageInfo_EventDataRoundState proto.InternalMessageInfo

func (m *EventDataRoundState) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *EventDataRoundState) GetRound() int32 {
	if m != nil {
		return m.Round
	}
	return 0
}

func (m *EventDataRoundState) GetStep() string {
	if m != nil {
		return m.Step
	}
	return ""
}

func init() {
	proto.RegisterType((*EventDataRoundState)(nil), "tendermint.types.EventDataRoundState")
}

func init() { proto.RegisterFile("tendermint/types/events.proto", fileDescriptor_72cfafd446dedf7c) }

var fileDescriptor_72cfafd446dedf7c = []byte{
	// 189 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2d, 0x49, 0xcd, 0x4b,
	0x49, 0x2d, 0xca, 0xcd, 0xcc, 0x2b, 0xd1, 0x2f, 0xa9, 0x2c, 0x48, 0x2d, 0xd6, 0x4f, 0x2d, 0x4b,
	0xcd, 0x2b, 0x29, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x40, 0x48, 0xeb, 0x81, 0xa5,
	0x95, 0xc2, 0xb9, 0x84, 0x5d, 0x41, 0x2a, 0x5c, 0x12, 0x4b, 0x12, 0x83, 0xf2, 0x4b, 0xf3, 0x52,
	0x82, 0x4b, 0x12, 0x4b, 0x52, 0x85, 0xc4, 0xb8, 0xd8, 0x32, 0x52, 0x33, 0xd3, 0x33, 0x4a, 0x24,
	0x18, 0x15, 0x18, 0x35, 0x58, 0x82, 0xa0, 0x3c, 0x21, 0x11, 0x2e, 0xd6, 0x22, 0x90, 0x2a, 0x09,
	0x26, 0x05, 0x46, 0x0d, 0xd6, 0x20, 0x08, 0x47, 0x48, 0x88, 0x8b, 0xa5, 0xb8, 0x24, 0xb5, 0x40,
	0x82, 0x59, 0x81, 0x51, 0x83, 0x33, 0x08, 0xcc, 0x76, 0x0a, 0x3c, 0xf1, 0x48, 0x8e, 0xf1, 0xc2,
	0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1,
	0xc6, 0x63, 0x39, 0x86, 0x28, 0xf3, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c,
	0x7d, 0x64, 0xe7, 0x22, 0x98, 0x60, 0xc7, 0xea, 0xa3, 0x7b, 0x25, 0x89, 0x0d, 0x2c, 0x6e, 0x0c,
	0x08, 0x00, 0x00, 0xff, 0xff, 0x67, 0xc9, 0x82, 0x7f, 0xe5, 0x00, 0x00, 0x00,
}

func (m *EventDataRoundState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EventDataRoundState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EventDataRoundState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Step) > 0 {
		i -= len(m.Step)
		copy(dAtA[i:], m.Step)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.Step)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Round != 0 {
		i = encodeVarintEvents(dAtA, i, uint64(m.Round))
		i--
		dAtA[i] = 0x10
	}
	if m.Height != 0 {
		i = encodeVarintEvents(dAtA, i, uint64(m.Height))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintEvents(dAtA []byte, offset int, v uint64) int {
	offset -= sovEvents(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *EventDataRoundState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Height != 0 {
		n += 1 + sovEvents(uint64(m.Height))
	}
	if m.Round != 0 {
		n += 1 + sovEvents(uint64(m.Round))
	}
	l = len(m.Step)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	return n
}

func sovEvents(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozEvents(x uint64) (n int) {
	return sovEvents(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *EventDataRoundState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEvents
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: EventDataRoundState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EventDataRoundState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Height", wireType)
			}
			m.Height = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Height |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Round", wireType)
			}
			m.Round = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Round |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Step", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Step = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEvents
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipEvents(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowEvents
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEvents
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEvents
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthEvents
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupEvents
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthEvents
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthEvents        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowEvents          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupEvents = fmt.Errorf("proto: unexpected end of group")
)
