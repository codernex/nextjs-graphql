import { IResolver } from "./types";

const mapToQuery = <T extends Array<{ Query: IResolver["Query"] }>>(arr: T) => {
  const query: Record<string, T[number]["Query"]> = {};
  for (const obj of arr) {
    for (const [key, value] of Object.entries(obj.Query)) {
      if (value) {
        query[key] = value;
      }
    }
  }
  return query;
};

const mapToMutation = <T extends Array<{ Mutation: IResolver["Mutation"] }>>(
  arr: T
) => {
  const mutation: Record<string, T[number]["Mutation"]> = {};
  for (const obj of arr) {
    for (const [key, value] of Object.entries(obj.Mutation)) {
      if (value) {
        mutation[key] = value;
      }
    }
  }
  return mutation;
};

export { mapToMutation, mapToQuery };
