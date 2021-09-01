const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    name: String
    email: String
  }
  type Product {
  
  }
  type Query {
    profiles:[Profile]
  }
`;
