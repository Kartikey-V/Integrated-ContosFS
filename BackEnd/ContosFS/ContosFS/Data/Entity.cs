using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data.Entity
{
	public class UserEntity
	{
		[Key]
		public int UserId { get; set; }


		[StringLength(50)]
		public String UserName {get; set;}

		[StringLength(50)]
		public String UserEmail { get; set; }

		[StringLength(50)]
		public String UserPassword { get; set; }
	}
	public class StockEntity
    {
		[Key]
		public int StockId { get; set; }

		[StringLength(50)]
		public String StockName { get; set; }

		public float CurStockPrice { get; set; }
	}

	public class HoldingsEntity
	{
		[Key]
		public int Id { get; set; }
		//[Key, Column(Order = 0)]
		public int StockId { get; set; }
		//[Key, Column(Order = 1)]

		[StringLength(50)]
		public String StockName { get; set; }
		public int UserId { get; set; }
		public int Quantity { get; set; }
		public float Buying_price { get; set; }
		public DateTime Date { get; set; }

	}

	public class TransactionsEntity
    {
		[Key]
		public int Id { get; set; }
		public int UserId { get; set; }
		public int StockId { get; set; }
		public string Type { get; set; }
		public int Quantity { get; set; }
		public float Price { get; set; }
		public DateTime Date { get; set; }
	}
}
