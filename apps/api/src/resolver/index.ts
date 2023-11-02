import { mapToMutation, mapToQuery } from "@/utils";
import { userResolver } from "./user";

export default function Resolver() {
  return {
    Query: mapToQuery([userResolver]),
    Mutation: mapToMutation([userResolver]),
  };
}
