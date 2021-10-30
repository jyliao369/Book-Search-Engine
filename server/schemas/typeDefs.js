const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]!
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
    }

    type Query {
        book: [book]!
        book(bookId: ID!): Book
    }

    type Mutation {
        addbook
    }
`;

module.exports = typeDefs;