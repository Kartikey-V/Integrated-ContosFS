using ContosFS.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.GraphQL.Type
{
    public class TransactionsType: ObjectGraphType<TransactionsEntity>
    {
        public TransactionsType()
        {
            base.Field(t => t.Id);
            base.Field(t => t.Type);
            base.Field(t => t.Quantity);
            base.Field(t => t.StockId);            
            base.Field(t => t.UserId);
            base.Field(t => t.Date);
        }
    }
}
