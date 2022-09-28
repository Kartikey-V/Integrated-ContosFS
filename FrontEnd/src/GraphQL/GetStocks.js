import { gql } from "@apollo/client";

export const GET_STOCKS = gql`
query {
    stocks{
      stockId,
      stockName,
      curStockPrice
    }
  }
`;