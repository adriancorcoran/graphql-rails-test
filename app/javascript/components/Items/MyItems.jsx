import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { queryItems } from "./graphql/queries";

const QUERY_ITEMS = gql`
  ${queryItems}
`;

function Items() {
  const { loading, error, data } = useQuery(QUERY_ITEMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.items.map((item, index) => {
        return (
          <div key={index}>
            <p>
              <strong>{item.title}</strong>
            </p>
            <p>{item.description}</p>
            <p>
              <em>{item.user.email}</em>
            </p>
            <p>&nbsp;</p>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
