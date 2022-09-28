using ContosFS.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.GraphQL.Type
{
    public class HoldingsInputType : InputObjectGraphType<HoldingsEntity>
    {
        public HoldingsInputType()
        {
            Name = "holdingsInput";
            base.Field<NonNullGraphType<IntGraphType>>("StockId");
            base.Field<NonNullGraphType<StringGraphType>>("StockName");
            base.Field<NonNullGraphType<IntGraphType>>("UserId");
            base.Field<NonNullGraphType<IntGraphType>>("Quantity");
            base.Field<NonNullGraphType<FloatGraphType>>("Buying_price");
            base.Field<NonNullGraphType<DateGraphType>>("Date");

        }
    }
}

/*base.Field(t => t.StockId);
base.Field(t => t.StockName);
base.Field(t => t.UserId);
base.Field(t => t.Quantity);
base.Field(t => t.Buying_price);
base.Field(t => t.Date);*/
