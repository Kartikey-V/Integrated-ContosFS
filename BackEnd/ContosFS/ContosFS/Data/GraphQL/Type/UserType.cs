using ContosFS.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.GraphQL.Type
{
    public class UserType : ObjectGraphType<UserEntity>
    {
        public UserType()
        {
            base.Field(t => t.UserId);
            base.Field(t => t.UserName);
            base.Field(t => t.UserEmail);
            base.Field(t => t.UserPassword);
        }
    }
}
