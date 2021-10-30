const { AuthenticationError } = require('apollo-server-express');
const { Book } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        books: async () => {
            return Book.find();
        },
        book: async () => {
            return Book.findOne({ _id: bookId});
        }
    },

    Mutations {
        addBook: async (parent, { author, description, title }) => {
            const book = await Book.create({ author, description, title });
            const token = signToken(book);

            return { token, profile };
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                return Book.findOneAndDelete({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;