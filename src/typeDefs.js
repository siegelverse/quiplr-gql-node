import { gql } from 'apollo-server-express';

//Graphql Schema
export const typeDefs = gql`
    type AuthPayload {
        token: String
        user: User
    }

    type Comment {
        Comment: Comment
        commentId: Int
        content: String
        createdAt: DateTime!
        id: Int!
        User: User
    }

    scalar DateTime

    type Following {
        avatar: String!
        followId: Int!
        id: Int!
        name: String!
        User: User
    }

    type LikedTweet {
        id: Int!
        likedAt: DateTime!
        tweet: Tweet!
    }

    type Mutation {
        createComment(content: String!, id: Int!): Comment
        createProfile(avatar: String, bio: String, location: String, website: String): Profile
        createReply(commentId: Int, content: String!, id: Int!): Comment
        createTweet(content: String): Tweet
        deleteFollow(id: Int!): Following
        deleteLike(id: Int!): LikedTweet
        follow(avatar: String!, followId: Int!, name: String!): Following
        likeTweet(id: Int): LikedTweet
        login(email: String!, password: String!): AuthPayload
        signup(email: String!, name: String, password: String!): AuthPayload
        updateProfile(avatar: String, bio: String, id: Int, location: String, website: String): Profile
    }

    type Profile {
        avatar: String
        bio: String
        id: Int!
        location: String
        website: String
    }

    type Query {
        me: User
        tweet(id: Int): Tweet
        tweets: [Tweet]
        user(id: Int): User
        users: [User]
    }

    type Tweet {
        author: User
        comments: [Comment!]!
        content: String
        createdAt: DateTime!
        id: Int!
        likes: [LikedTweet!]!
    }

    type User {
        comments: [Comment!]!
        email: String!
        Following: [Following!]!
        id: Int!
        likedTweet: [LikedTweet!]!
        name: String
        Profile: Profile
        tweets: [Tweet!]!
    }
`