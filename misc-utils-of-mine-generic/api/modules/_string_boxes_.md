**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["string/boxes"](_string_boxes_.md)

# External module: "string/boxes"

## Index

### Enumerations

* [BorderSide](../enums/_string_boxes_.borderside.md)
* [BorderStyle](../enums/_string_boxes_.borderstyle.md)

### Type aliases

* [BoxStyles](_string_boxes_.md#boxstyles)

### Variables

* [borderStyles](_string_boxes_.md#const-borderstyles)
* [boxStyles](_string_boxes_.md#let-boxstyles)

### Functions

* [getBoxChar](_string_boxes_.md#getboxchar)
* [getBoxStyles](_string_boxes_.md#const-getboxstyles)

## Type aliases

###  BoxStyles

Ƭ **BoxStyles**: *object*

Defined in string/boxes.ts:84

#### Type declaration:

## Variables

### `Const` borderStyles

• **borderStyles**: *string[]* =  enumKeys(BorderStyle)

Defined in string/boxes.ts:28

___

### `Let` boxStyles

• **boxStyles**: *[BoxStyles](_string_boxes_.md#boxstyles) | undefined*

Defined in string/boxes.ts:88

## Functions

###  getBoxChar

▸ **getBoxChar**(`s`: [BorderStyle](../enums/_string_boxes_.borderstyle.md), `si`: [BorderSide](../enums/_string_boxes_.borderside.md)): *string*

Defined in string/boxes.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`s` | [BorderStyle](../enums/_string_boxes_.borderstyle.md) |
`si` | [BorderSide](../enums/_string_boxes_.borderside.md) |

**Returns:** *string*

___

### `Const` getBoxStyles

▸ **getBoxStyles**(): *object*

Defined in string/boxes.ts:90

**Returns:** *object*