import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';

const app = express()

const server = new ApolloServer({
    typeDefs, 
    resolvers,
})

server.applyMiddleware({ app })

app.listen({ port: 4000 } , () => 
    console.log(`🚀 Server ready at: http://localhost:4000${server.graphqlPath}`)
)