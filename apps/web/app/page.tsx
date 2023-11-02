"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

import { Button, Header } from "ui";

const query = gql`
  query {
    users {
      id
    }
  }
`;

export default function Page() {
  const { data, client } = useSuspenseQuery(query);
  console.log(data);

  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
}
