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
  AddTag,
  SetBio,
  SetEmail,
  SetEmailVerifiedData,
  SetFingerScan,
  SetFirstName,
  SetGovID,
  SetLastName,
  SetPictureNFT,
  SetPictureUpload,
  SetTelephone,
  SetTelephoneVerifiedData,
  SetUsername,
  Signup
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
  let entity = new SetEmailVerifiedData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFingerScan(event: SetFingerScanEvent): void {
  let entity = new SetFingerScan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.fingerScan = event.params.fingerScan

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFirstName(event: SetFirstNameEvent): void {
  let entity = new SetFirstName(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.firstName = event.params.firstName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetGovID(event: SetGovIDEvent): void {
  let entity = new SetGovID(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.govID = event.params.govID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetLastName(event: SetLastNameEvent): void {
  let entity = new SetLastName(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.lastName = event.params.lastName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetPictureNFT(event: SetPictureNFTEvent): void {
  let entity = new SetPictureNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.nftAddress = event.params.nftAddress
  entity.id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetPictureUpload(event: SetPictureUploadEvent): void {
  let entity = new SetPictureUpload(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.url = event.params.url

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTelephone(event: SetTelephoneEvent): void {
  let entity = new SetTelephone(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.telephone = event.params.telephone

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTelephoneVerifiedData(
  event: SetTelephoneVerifiedDataEvent
): void {
  let entity = new SetTelephoneVerifiedData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetUsername(event: SetUsernameEvent): void {
  let entity = new SetUsername(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity.username = event.params.username

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignup(event: SignupEvent): void {
  let entity = new Signup(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
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
