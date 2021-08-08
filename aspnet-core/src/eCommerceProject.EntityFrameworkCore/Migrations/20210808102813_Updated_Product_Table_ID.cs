using Microsoft.EntityFrameworkCore.Migrations;

namespace eCommerceProject.Migrations
{
    public partial class Updated_Product_Table_ID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_ProductBrands_ProductBrandFkId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_ProductColors_ProductColorFkId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_ProductTypes_ProductTypeFkId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductColors_ProductColorId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_ProductBrandFkId",
                table: "BasketItems");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_ProductColorFkId",
                table: "BasketItems");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_ProductTypeFkId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "ProductBrandFkId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "ProductColorFkId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "ProductTypeFkId",
                table: "BasketItems");

            migrationBuilder.AlterColumn<int>(
                name: "ProductColorId",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProductBrandId",
                table: "BasketItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProductColorId",
                table: "BasketItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProductTypeId",
                table: "BasketItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_ProductBrandId",
                table: "BasketItems",
                column: "ProductBrandId");

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_ProductColorId",
                table: "BasketItems",
                column: "ProductColorId");

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_ProductTypeId",
                table: "BasketItems",
                column: "ProductTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_ProductBrands_ProductBrandId",
                table: "BasketItems",
                column: "ProductBrandId",
                principalTable: "ProductBrands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_ProductColors_ProductColorId",
                table: "BasketItems",
                column: "ProductColorId",
                principalTable: "ProductColors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_ProductTypes_ProductTypeId",
                table: "BasketItems",
                column: "ProductTypeId",
                principalTable: "ProductTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductColors_ProductColorId",
                table: "Products",
                column: "ProductColorId",
                principalTable: "ProductColors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_ProductBrands_ProductBrandId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_ProductColors_ProductColorId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_ProductTypes_ProductTypeId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductColors_ProductColorId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_ProductBrandId",
                table: "BasketItems");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_ProductColorId",
                table: "BasketItems");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_ProductTypeId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "ProductBrandId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "ProductColorId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "ProductTypeId",
                table: "BasketItems");

            migrationBuilder.AlterColumn<int>(
                name: "ProductColorId",
                table: "Products",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ProductBrandFkId",
                table: "BasketItems",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProductColorFkId",
                table: "BasketItems",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProductTypeFkId",
                table: "BasketItems",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_ProductBrandFkId",
                table: "BasketItems",
                column: "ProductBrandFkId");

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_ProductColorFkId",
                table: "BasketItems",
                column: "ProductColorFkId");

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_ProductTypeFkId",
                table: "BasketItems",
                column: "ProductTypeFkId");

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_ProductBrands_ProductBrandFkId",
                table: "BasketItems",
                column: "ProductBrandFkId",
                principalTable: "ProductBrands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_ProductColors_ProductColorFkId",
                table: "BasketItems",
                column: "ProductColorFkId",
                principalTable: "ProductColors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_ProductTypes_ProductTypeFkId",
                table: "BasketItems",
                column: "ProductTypeFkId",
                principalTable: "ProductTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductColors_ProductColorId",
                table: "Products",
                column: "ProductColorId",
                principalTable: "ProductColors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
