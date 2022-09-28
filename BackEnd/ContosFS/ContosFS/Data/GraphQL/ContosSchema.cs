using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.GraphQL
{
    public class ContosSchema : Schema
    {
        public ContosSchema(IServiceProvider resolver) : base(resolver)
        {
            Query = (IObjectGraphType)resolver.GetService(typeof(ContosQuery));
            Mutation = (IObjectGraphType)resolver.GetService(typeof(ContosMutation));
        }
    }
}
