using ContosFS.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.GraphQL.Type
{
    public class StockType: ObjectGraphType<StockEntity>
    {        
        public StockType()
        { 
            base.Field(t => t.StockId);
            base.Field(t => t.StockName);
            base.Field(t => t.CurStockPrice);
        }
    }
}
