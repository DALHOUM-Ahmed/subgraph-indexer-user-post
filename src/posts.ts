import { BigInt } from "@graphprotocol/graph-ts";
import { CreatePost as CreatePostEvent, DeletePost as DeletePostEvent, UpdateBody as UpdateBodyEvent, UpdatePost as UpdatePostEvent } from "../generated/Posts/Posts";
import { User, Post } from "../generated/schema";

export function handleCreatePost(event: CreatePostEvent): void {
  let entity = new Post(event.params.postID.toString());
  let user = User.load(event.params._author.toString());
  if (user !== null) {
    entity.author = user._userAddress.toString();
    entity.title = event.params.title;
    entity.body = event.params.body;
    entity.createdAt = event.params.createdAt;
    entity.groupID = event.params.groupID;
    entity.postID = event.params.postID;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;
    entity.deleted = false;
    entity.editedAt = new BigInt(0);
    if (user.posts && event.params.postID.toString()) {
      user.posts.push(event.params.postID.toString());
    }

    entity.save();
  }
}

export function handleDeletePost(event: DeletePostEvent): void {
  let entity = Post.load(event.params.postID.toString());
  if (entity !== null) {
    let user = User.load(entity.author.toString());
    //should handle executor
    // entity._executor = event.params._executor;

    if (user !== null) {
      if (user.posts) {
        const index = user.posts.indexOf(entity.postID.toString(), 0);
        if (index > -1) {
          user.posts = user.posts.splice(index, 1);
        }

        user.save();
        entity.deleted = true;
        entity.save();
      }
    }
  }
}

export function handleUpdateBody(event: UpdateBodyEvent): void {
  let entity = Post.load(event.params.postID.toString());
  if (entity) {
    entity.body = event.params.body;
    entity.editedAt = event.block.timestamp;
    entity.save();
  }
}

export function handleUpdatePost(event: UpdatePostEvent): void {
  let entity = Post.load(event.params.postID.toString());
  if (entity) {
    entity.title = event.params.title;
    entity.editedAt = event.block.timestamp;
    entity.save();
  }
}
