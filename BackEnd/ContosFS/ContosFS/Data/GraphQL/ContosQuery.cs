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
    public class ContosQuery: ObjectGraphType
    {
        public ContosQuery (UserRepository _userRepository, 
            StockRepository _stockRepository,
            HoldingsRepository _holdingsRepository,
            TransactionsRepository _transactionsRepository)
        {
            Field<ListGraphType<UserType>>("users",
                resolve: context => _userRepository.GetUser());

            Field<ListGraphType<StockType>>("stocks",
                resolve: context => _stockRepository.GetStock());

            Field<ListGraphType<HoldingsType>>("getAllHoldings",
                resolve: context => _holdingsRepository.GetHolding());

            Field<ListGraphType<TransactionsType>>("transactions",
                resolve: context => _transactionsRepository.GetTransaction());

            Field<UserType>("userById", arguments: new QueryArguments(
                new QueryArgument<IdGraphType> { Name = "id" }
                ), resolve: context =>
                {
                    var id = context.GetArgument<int>("id");
                    return _userRepository.GetUserWith(id);
                });
            Field<HoldingsType>("holdingsById", arguments: new QueryArguments(
                new QueryArgument<IdGraphType> { Name = "UserId" },
                new QueryArgument<IdGraphType> { Name = "StockId" }
                ), resolve: context =>
                {
                    var userid = context.GetArgument<int>("UserId");
                    var stockid = context.GetArgument<int>("StockId");
                    return _holdingsRepository.GetHoldingsWith(userid, stockid);
                });

            ///kartikey's Code
            Field<StockType>("stockById", arguments: new QueryArguments(
                new QueryArgument<IdGraphType> { Name = "id" }
                ), resolve: context =>
                {
                    var id = context.GetArgument<int>("id");
                    return _stockRepository.GetStockWith(id);
                });

            Field<ListGraphType<HoldingsType>>("holdingByUserId", arguments: new QueryArguments(
                new QueryArgument<IdGraphType> { Name = "id" }
                ), resolve: context =>
                {
                    var id = context.GetArgument<int>("id");
                    return _holdingsRepository.GetValidHoldings(id);
                });

            Field<BooleanGraphType>(

                "verifyUser",

                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "UserEmail" },

                                              new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "UserPassword" }),

                resolve: context =>

                {

                    var UserEmail = context.GetArgument<string>("UserEmail");

                    var UserPassword = context.GetArgument<string>("UserPassword");

                    return _userRepository.VerifyUser(UserEmail, UserPassword);

                });
        }
    }
}
