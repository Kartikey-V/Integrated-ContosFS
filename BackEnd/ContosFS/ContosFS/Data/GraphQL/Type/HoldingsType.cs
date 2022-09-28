using ContosFS.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.GraphQL.Type
{
    public class HoldingsType: ObjectGraphType<HoldingsEntity>
    {
        public HoldingsType()
        {
            base.Field(t => t.StockId);
            base.Field(t => t.StockName);
            base.Field(t => t.UserId);
            base.Field(t => t.Quantity);
            base.Field(t => t.Buying_price); 
            base.Field(t => t.Date);

        }
    }
}
