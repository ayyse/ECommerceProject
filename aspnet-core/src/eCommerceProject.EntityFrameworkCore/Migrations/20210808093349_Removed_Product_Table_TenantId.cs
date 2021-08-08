using Microsoft.EntityFrameworkCore.Migrations;

namespace eCommerceProject.Migrations
{
    public partial class Removed_Product_Table_TenantId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TenantId",
                table: "Products");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TenantId",
                table: "Products",
                type: "int",
                nullable: true);
        }
    }
}
