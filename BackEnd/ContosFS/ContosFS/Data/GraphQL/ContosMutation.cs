using ContosFS.Data.Entity;
using ContosFS.Data.GraphQL.Type;
using ContosFS.Repository;
using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.GraphQL
{
    public class ContosMutation: ObjectGraphType
    {
        public ContosMutation (UserRepository _userRepository,
            StockRepository _stockRepository,
            HoldingsRepository _holdingsRepository,
            TransactionsRepository _transactionsRepository)
        {
            base.Field<UserType>(
                "addUser",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<UserInputType>> { Name = "user"}),
                resolve: context =>
                {
                    var user = context.GetArgument<UserEntity>("user");
                    return _userRepository.AddUser(user);
            
                });
            base.Field<HoldingsType>(
              "SellStocks",
              arguments: new QueryArguments(
                  new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "UserId" },
                  new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "StockId" },
                  new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "qty" }
              ),
              resolve: context =>
              {
                  var UserId = context.GetArgument<int>("UserId");
                  var StockId = context.GetArgument<int>("StockId");
                  var qty = context.GetArgument<int>("qty");
                  return _holdingsRepository.SellStocks(UserId, StockId, qty);
              }
          );

            base.Field<HoldingsType>(
              "BuyStocks",
              arguments: new QueryArguments(
                  new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "UserId" },
                  new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "StockId" },
                  new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "qty" }
              ),
              resolve: context =>
              {
                  var UserId = context.GetArgument<int>("UserId");
                  var StockId = context.GetArgument<int>("StockId");
                  var qty = context.GetArgument<int>("qty");
                  return _holdingsRepository.BuyStocks(UserId, StockId, qty);
              }
          );

        }
    }
}
