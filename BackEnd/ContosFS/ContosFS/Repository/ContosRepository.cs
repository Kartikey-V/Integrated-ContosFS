using ContosFS.Data;
using ContosFS.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Repository
{
    public class UserRepository
    {
        public bool VerifyUser(string useremail, string userpassword)

        {

            return _UserDbContext.UserEntities.Any(s => s.UserEmail == useremail && s.UserPassword == userpassword);

        }

        public ContosDbContext _UserDbContext;
        public IEnumerable<UserEntity> UserEntities { get; set; }

        public UserRepository(ContosDbContext dbContext)
        {
            _UserDbContext = dbContext;
        }

         public IEnumerable<UserEntity> GetUser()
        {
            return _UserDbContext.UserEntities;
        }

        public UserEntity GetUserWith(int id)
        {
            return _UserDbContext.UserEntities.First(s => s.UserId == id);

        }
        public UserEntity AddUser(UserEntity user)
        {
            this._UserDbContext.UserEntities.Add(user);
            this._UserDbContext.SaveChanges();
            return user;
        }

        internal object GetHoldingsWith(int userid, int stockid)
        {
            throw new NotImplementedException();
        }
    }

    public class StockRepository
    {
        public ContosDbContext _StockDbContext;
        public IEnumerable<StockEntity> StockEntities { get; set; }

        public StockRepository(ContosDbContext dbContext)
        {
            _StockDbContext = dbContext;
        }
        public IEnumerable<StockEntity> GetStock()
        {
            return _StockDbContext.StockEntities;
        }

        //Kartikey Code
        public StockEntity GetStockWith(int id)
        {
            return _StockDbContext.StockEntities.First(s => s.StockId == id);
        }

    }
    
    public class HoldingsRepository
    {
        public ContosDbContext _HoldingsDbContext;
        public IEnumerable<HoldingsEntity> HoldingsEntities { get; set; }

        public HoldingsRepository(ContosDbContext dbContext)
        {
            _HoldingsDbContext = dbContext;
        }
        public IEnumerable<HoldingsEntity> GetHolding()
        {
            return _HoldingsDbContext.HoldingsEntities;
        }
        public HoldingsEntity GetHoldingsWith(int userid, int stockid)
        {
            return _HoldingsDbContext.HoldingsEntities.First(s => s.UserId == userid && s.StockId == stockid);

        }
        //Kartikey
        public IEnumerable<HoldingsEntity> GetValidHoldings(int userid)
        {
            return _HoldingsDbContext.HoldingsEntities.Where(s => s.UserId == userid && s.Quantity>=1);
        }
        public HoldingsEntity SellStocks(int userid, int stockid, int qty)
        {
            var cnt = _HoldingsDbContext.HoldingsEntities.First(s => s.UserId == userid && s.StockId == stockid).Quantity;
            cnt = cnt - qty;
            _HoldingsDbContext.HoldingsEntities.First(s => s.UserId == userid && s.StockId == stockid).Quantity = cnt;
            _HoldingsDbContext.SaveChanges();
            return _HoldingsDbContext.HoldingsEntities.First(s => s.UserId == userid && s.StockId == stockid);
        }


        public HoldingsEntity BuyStocks(int userid, int stockid, int qty)
        {
            var cnt = _HoldingsDbContext.HoldingsEntities.First(s => s.UserId == userid && s.StockId == stockid).Quantity;
            cnt = cnt + qty;
            _HoldingsDbContext.HoldingsEntities.First(s => s.UserId == userid && s.StockId == stockid).Quantity = cnt;
            _HoldingsDbContext.SaveChanges();
            return _HoldingsDbContext.HoldingsEntities.First(s => s.UserId == userid && s.StockId == stockid);
        }
    }

    public class TransactionsRepository
    {
        public ContosDbContext _TransactionsDbContext;
        public IEnumerable<TransactionsEntity> TransactionsEntities { get; set; }

        public TransactionsRepository(ContosDbContext dbContext)
        {
            _TransactionsDbContext = dbContext;
        }
        public IEnumerable<TransactionsEntity> GetTransaction()
        {
            return _TransactionsDbContext.TransactionsEntities;
        }
    }
}
