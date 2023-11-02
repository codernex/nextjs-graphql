const typeDefination = `#graphql

    type User{
        id: ID!
        name: String!
        email: String
        username:String!
        password: String!
    }

    input UserInput {
        name:String!
        email:String
        username:String!
        password:String!
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }

    type Mutation{
        createUser(userData:UserInput!):User!
    }

`;

export default typeDefination;
