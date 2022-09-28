import { gql } from "@apollo/client";

export const BUY_STOCKS = gql`
mutation buyWithId($userId:Int!, $stockId:Int!, $qty:Int!){
    buyStocks(userId:$userId, stockId:$stockId, qty:$qty){
      quantity,
      stockName
    }
  }
`;