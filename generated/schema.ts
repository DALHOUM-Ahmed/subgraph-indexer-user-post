// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Post must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get body(): string {
    let value = this.get("body");
    return value!.toString();
  }

  set body(value: string) {
    this.set("body", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get groupID(): BigInt {
    let value = this.get("groupID");
    return value!.toBigInt();
  }

  set groupID(value: BigInt) {
    this.set("groupID", Value.fromBigInt(value));
  }

  get postID(): BigInt {
    let value = this.get("postID");
    return value!.toBigInt();
  }

  set postID(value: BigInt) {
    this.set("postID", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get author(): string {
    let value = this.get("author");
    return value!.toString();
  }

  set author(value: string) {
    this.set("author", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userId(): BigInt {
    let value = this.get("userId");
    return value!.toBigInt();
  }

  set userId(value: BigInt) {
    this.set("userId", Value.fromBigInt(value));
  }

  get _userAddress(): Bytes {
    let value = this.get("_userAddress");
    return value!.toBytes();
  }

  set _userAddress(value: Bytes) {
    this.set("_userAddress", Value.fromBytes(value));
  }

  get firstName(): string {
    let value = this.get("firstName");
    return value!.toString();
  }

  set firstName(value: string) {
    this.set("firstName", Value.fromString(value));
  }

  get lastName(): string {
    let value = this.get("lastName");
    return value!.toString();
  }

  set lastName(value: string) {
    this.set("lastName", Value.fromString(value));
  }

  get userName(): string {
    let value = this.get("userName");
    return value!.toString();
  }

  set userName(value: string) {
    this.set("userName", Value.fromString(value));
  }

  get email(): string {
    let value = this.get("email");
    return value!.toString();
  }

  set email(value: string) {
    this.set("email", Value.fromString(value));
  }

  get bio(): string {
    let value = this.get("bio");
    return value!.toString();
  }

  set bio(value: string) {
    this.set("bio", Value.fromString(value));
  }

  get pictureUpload(): string {
    let value = this.get("pictureUpload");
    return value!.toString();
  }

  set pictureUpload(value: string) {
    this.set("pictureUpload", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    return value!.toBytes();
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get ownedID(): BigInt {
    let value = this.get("ownedID");
    return value!.toBigInt();
  }

  set ownedID(value: BigInt) {
    this.set("ownedID", Value.fromBigInt(value));
  }

  get telephone(): string | null {
    let value = this.get("telephone");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set telephone(value: string | null) {
    if (!value) {
      this.unset("telephone");
    } else {
      this.set("telephone", Value.fromString(<string>value));
    }
  }

  get govtID(): string | null {
    let value = this.get("govtID");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set govtID(value: string | null) {
    if (!value) {
      this.unset("govtID");
    } else {
      this.set("govtID", Value.fromString(<string>value));
    }
  }

  get fingerScan(): string | null {
    let value = this.get("fingerScan");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fingerScan(value: string | null) {
    if (!value) {
      this.unset("fingerScan");
    } else {
      this.set("fingerScan", Value.fromString(<string>value));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get telephoneVerifiedData(): string | null {
    let value = this.get("telephoneVerifiedData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set telephoneVerifiedData(value: string | null) {
    if (!value) {
      this.unset("telephoneVerifiedData");
    } else {
      this.set("telephoneVerifiedData", Value.fromString(<string>value));
    }
  }

  get emailVerifiedData(): string | null {
    let value = this.get("emailVerifiedData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set emailVerifiedData(value: string | null) {
    if (!value) {
      this.unset("emailVerifiedData");
    } else {
      this.set("emailVerifiedData", Value.fromString(<string>value));
    }
  }

  get posts(): Array<string> | null {
    let value = this.get("posts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set posts(value: Array<string> | null) {
    if (!value) {
      this.unset("posts");
    } else {
      this.set("posts", Value.fromStringArray(<Array<string>>value));
    }
  }
}
