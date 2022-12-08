import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/User/User"

export function createAddTagEvent(_userAddress: Address, tag: string): AddTag {
  let addTagEvent = changetype<AddTag>(newMockEvent())

  addTagEvent.parameters = new Array()

  addTagEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  addTagEvent.parameters.push(
    new ethereum.EventParam("tag", ethereum.Value.fromString(tag))
  )

  return addTagEvent
}

export function createSetBioEvent(_userAddress: Address, bio: string): SetBio {
  let setBioEvent = changetype<SetBio>(newMockEvent())

  setBioEvent.parameters = new Array()

  setBioEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setBioEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )

  return setBioEvent
}

export function createSetEmailEvent(
  _userAddress: Address,
  email: string
): SetEmail {
  let setEmailEvent = changetype<SetEmail>(newMockEvent())

  setEmailEvent.parameters = new Array()

  setEmailEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setEmailEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )

  return setEmailEvent
}

export function createSetEmailVerifiedDataEvent(
  _userAddress: Address,
  data: string
): SetEmailVerifiedData {
  let setEmailVerifiedDataEvent = changetype<SetEmailVerifiedData>(
    newMockEvent()
  )

  setEmailVerifiedDataEvent.parameters = new Array()

  setEmailVerifiedDataEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setEmailVerifiedDataEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )

  return setEmailVerifiedDataEvent
}

export function createSetFingerScanEvent(
  _userAddress: Address,
  fingerScan: string
): SetFingerScan {
  let setFingerScanEvent = changetype<SetFingerScan>(newMockEvent())

  setFingerScanEvent.parameters = new Array()

  setFingerScanEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setFingerScanEvent.parameters.push(
    new ethereum.EventParam("fingerScan", ethereum.Value.fromString(fingerScan))
  )

  return setFingerScanEvent
}

export function createSetFirstNameEvent(
  _userAddress: Address,
  firstName: string
): SetFirstName {
  let setFirstNameEvent = changetype<SetFirstName>(newMockEvent())

  setFirstNameEvent.parameters = new Array()

  setFirstNameEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setFirstNameEvent.parameters.push(
    new ethereum.EventParam("firstName", ethereum.Value.fromString(firstName))
  )

  return setFirstNameEvent
}

export function createSetGovIDEvent(
  _userAddress: Address,
  govID: string
): SetGovID {
  let setGovIdEvent = changetype<SetGovID>(newMockEvent())

  setGovIdEvent.parameters = new Array()

  setGovIdEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setGovIdEvent.parameters.push(
    new ethereum.EventParam("govID", ethereum.Value.fromString(govID))
  )

  return setGovIdEvent
}

export function createSetLastNameEvent(
  _userAddress: Address,
  lastName: string
): SetLastName {
  let setLastNameEvent = changetype<SetLastName>(newMockEvent())

  setLastNameEvent.parameters = new Array()

  setLastNameEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setLastNameEvent.parameters.push(
    new ethereum.EventParam("lastName", ethereum.Value.fromString(lastName))
  )

  return setLastNameEvent
}

export function createSetPictureNFTEvent(
  _userAddress: Address,
  nftAddress: Address,
  id: BigInt
): SetPictureNFT {
  let setPictureNftEvent = changetype<SetPictureNFT>(newMockEvent())

  setPictureNftEvent.parameters = new Array()

  setPictureNftEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setPictureNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  setPictureNftEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return setPictureNftEvent
}

export function createSetPictureUploadEvent(
  _userAddress: Address,
  url: string
): SetPictureUpload {
  let setPictureUploadEvent = changetype<SetPictureUpload>(newMockEvent())

  setPictureUploadEvent.parameters = new Array()

  setPictureUploadEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setPictureUploadEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )

  return setPictureUploadEvent
}

export function createSetTelephoneEvent(
  _userAddress: Address,
  telephone: string
): SetTelephone {
  let setTelephoneEvent = changetype<SetTelephone>(newMockEvent())

  setTelephoneEvent.parameters = new Array()

  setTelephoneEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setTelephoneEvent.parameters.push(
    new ethereum.EventParam("telephone", ethereum.Value.fromString(telephone))
  )

  return setTelephoneEvent
}

export function createSetTelephoneVerifiedDataEvent(
  _userAddress: Address,
  data: string
): SetTelephoneVerifiedData {
  let setTelephoneVerifiedDataEvent = changetype<SetTelephoneVerifiedData>(
    newMockEvent()
  )

  setTelephoneVerifiedDataEvent.parameters = new Array()

  setTelephoneVerifiedDataEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setTelephoneVerifiedDataEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )

  return setTelephoneVerifiedDataEvent
}

export function createSetUsernameEvent(
  _userAddress: Address,
  username: string
): SetUsername {
  let setUsernameEvent = changetype<SetUsername>(newMockEvent())

  setUsernameEvent.parameters = new Array()

  setUsernameEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  setUsernameEvent.parameters.push(
    new ethereum.EventParam("username", ethereum.Value.fromString(username))
  )

  return setUsernameEvent
}

export function createSignupEvent(
  _userAddress: Address,
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  bio: string,
  pictureUpload: string,
  nftAddress: Address,
  ownedID: BigInt,
  telephone: string,
  govtID: string,
  fingerScan: string
): Signup {
  let signupEvent = changetype<Signup>(newMockEvent())

  signupEvent.parameters = new Array()

  signupEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  signupEvent.parameters.push(
    new ethereum.EventParam("firstName", ethereum.Value.fromString(firstName))
  )
  signupEvent.parameters.push(
    new ethereum.EventParam("lastName", ethereum.Value.fromString(lastName))
  )
  signupEvent.parameters.push(
    new ethereum.EventParam("userName", ethereum.Value.fromString(userName))
  )
  signupEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  signupEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )
  signupEvent.parameters.push(
    new ethereum.EventParam(
      "pictureUpload",
      ethereum.Value.fromString(pictureUpload)
    )
  )
  signupEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  signupEvent.parameters.push(
    new ethereum.EventParam(
      "ownedID",
      ethereum.Value.fromUnsignedBigInt(ownedID)
    )
  )
  signupEvent.parameters.push(
    new ethereum.EventParam("telephone", ethereum.Value.fromString(telephone))
  )
  signupEvent.parameters.push(
    new ethereum.EventParam("govtID", ethereum.Value.fromString(govtID))
  )
  signupEvent.parameters.push(
    new ethereum.EventParam("fingerScan", ethereum.Value.fromString(fingerScan))
  )

  return signupEvent
}
