using ContosFS.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.GraphQL.Type
{
    public class UserInputType : InputObjectGraphType<UserEntity>
    {
        public UserInputType()
        {
            Name = "userInput";
            base.Field<NonNullGraphType<StringGraphType>>("userName");
            base.Field<NonNullGraphType<StringGraphType>>("userEmail");
            base.Field<NonNullGraphType<StringGraphType>>("userPassword");
        }
    }
}

