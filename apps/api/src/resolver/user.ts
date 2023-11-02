import { IResolver } from "@/utils/types";

export const userResolver: IResolver = {
  Query: {
    users: function () {
      return [];
    },
    user: function (_: any, { id }) {
      return {
        email: "",
        id,
        username: "",
        name: "",
        password: "",
      };
    },
  },
  Mutation: {
    createUser: function (_: any, { userData }) {
      return userData;
    },
  },
};
