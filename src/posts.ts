import {
  CreatePost as CreatePostEvent,
  DeletePost as DeletePostEvent,
  UpdateBody as UpdateBodyEvent,
  UpdatePost as UpdatePostEvent
} from "../generated/Posts/Posts"
import {
  User,
  Post
} from "../generated/schema"

export function handleCreatePost(event: CreatePostEvent): void {
  let entity = new CreatePost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._author = event.params._author
  entity.title = event.params.title
  entity.body = event.params.body
  entity.createdAt = event.params.createdAt
  entity.groupID = event.params.groupID
  entity.postID = event.params.postID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeletePost(event: DeletePostEvent): void {
  let entity = new DeletePost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._executor = event.params._executor
  entity.postID = event.params.postID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateBody(event: UpdateBodyEvent): void {
  let entity = new UpdateBody(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._executor = event.params._executor
  entity.postID = event.params.postID
  entity.body = event.params.body

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatePost(event: UpdatePostEvent): void {
  let entity = new UpdatePost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._executor = event.params._executor
  entity.postID = event.params.postID
  entity.title = event.params.title

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
