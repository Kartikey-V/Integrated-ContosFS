using ContosFS.Data.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosFS.Data
{
    public class ContosDbContext : DbContext
    {
        public ContosDbContext(DbContextOptions<ContosDbContext> options) : base(options)
        { 
            this.Database.EnsureCreated();
        }
        public DbSet<UserEntity> UserEntities { get; set; }
        public DbSet<StockEntity> StockEntities { get; set; }
        public DbSet<HoldingsEntity> HoldingsEntities { get; set; }
        public DbSet<TransactionsEntity> TransactionsEntities { get; set; }
    }
}
