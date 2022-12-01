import {
  AddTag as AddTagEvent,
  SetBio as SetBioEvent,
  SetEmail as SetEmailEvent,
  SetEmailVerifiedData as SetEmailVerifiedDataEvent,
  SetFingerScan as SetFingerScanEvent,
  SetFirstName as SetFirstNameEvent,
  SetGovID as SetGovIDEvent,
  SetLastName as SetLastNameEvent,
  SetPictureNFT as SetPictureNFTEvent,
  SetPictureUpload as SetPictureUploadEvent,
  SetTelephone as SetTelephoneEvent,
  SetTelephoneVerifiedData as SetTelephoneVerifiedDataEvent,
  SetUsername as SetUsernameEvent,
  Signup as SignupEvent
} from "../generated/User/User"
import {
  User
} from "../generated/schema"

export function handleAddTag(event: AddTagEvent): void {
  let entity = new AddTag(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.tag = event.params.tag

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBio(event: SetBioEvent): void {
  let entity = new SetBio(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.bio = event.params.bio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetEmail(event: SetEmailEvent): void {
  let entity = new SetEmail(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.email = event.params.email

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetEmailVerifiedData(
  event: SetEmailVerifiedDataEvent
): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.emailVerifiedData = event.params.data
    entity.save()
  }
}

export function handleSetFingerScan(event: SetFingerScanEvent): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.fingerScan = event.params.fingerScan
    entity.save()
  }
}

export function handleSetFirstName(event: SetFirstNameEvent): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.firstName = event.params.firstName
    entity.save()
  }
}

export function handleSetGovID(event: SetGovIDEvent): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.govtID = event.params.govID
    entity.save()
  }
}

export function handleSetLastName(event: SetLastNameEvent): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.lastName = event.params.lastName
    entity.save()
  }
}

export function handleSetPictureNFT(event: SetPictureNFTEvent): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.nftAddress = event.params.nftAddress
    entity.ownedID = event.params.id
    entity.save()
  }
}

export function handleSetPictureUpload(event: SetPictureUploadEvent): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.pictureUpload = event.params.url
    entity.save()
  }
}

export function handleSetTelephone(event: SetTelephoneEvent): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.telephone = event.params.telephone
    entity.save()
  }
}

export function handleSetTelephoneVerifiedData(
  event: SetTelephoneVerifiedDataEvent
): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.telephoneVerifiedData = event.params.data
    entity.save()
  }

}

export function handleSetUsername(event: SetUsernameEvent): void {
  let entity = User.load(event.params._userAddress.toHex())
  if (entity !== null) {
    entity.userName = event.params.username
    entity.save()
  }
}

export function handleSignup(event: SignupEvent): void {
  let entity = newUser(
    event.params._userAddress.toHex()
  )
  entity.userId = event.params.userId
  entity._userAddress = event.params._userAddress
  entity.firstName = event.params.firstName
  entity.lastName = event.params.lastName
  entity.userName = event.params.userName
  entity.email = event.params.email
  entity.bio = event.params.bio
  entity.pictureUpload = event.params.pictureUpload
  entity.nftAddress = event.params.nftAddress
  entity.ownedID = event.params.ownedID
  entity.telephone = event.params.telephone
  entity.govtID = event.params.govtID
  entity.fingerScan = event.params.fingerScan

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

function newUser(id: string): User {
  let entity = new User(id);

  return entity;
}