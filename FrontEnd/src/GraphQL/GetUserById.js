import { gql } from "@apollo/client";

export const GET_USERBYID = gql`
query getUserbyID($id:ID!){
    userById(id:$id){
      userName
    }
}`;