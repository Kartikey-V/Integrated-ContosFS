import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_USERBYID } from "../GraphQL/GetUserById";

function Results() {
  const { error, loading, data } = useQuery(GET_USERBYID, {variables:{id:2}});
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    if (data) {
        setStocks(data.userById);
        console.log(data);
    }
  }, [data]);

  return (
    <div>
        {data.userById.userName}
        
      {/* {stocks.map((val,key) => {
        return <h1> {val.userName}</h1>;
      })}  */}
    </div>
  );
}

export default Results;