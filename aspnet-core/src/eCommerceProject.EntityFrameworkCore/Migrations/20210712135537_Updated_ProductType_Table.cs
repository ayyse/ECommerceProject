using Microsoft.EntityFrameworkCore.Migrations;

namespace eCommerceProject.Migrations
{
    public partial class Updated_ProductType_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "ProductTypes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "ProductTypes",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "ProductTypes");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "ProductTypes");
        }
    }
}
