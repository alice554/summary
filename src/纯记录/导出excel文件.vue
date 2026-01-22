<script>
// 1. npm install exceljs file-saver
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export default {
  methods: {
    async exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet("审查结果");

      // 表头
      sheet.addRow(["序号", "意见", "修改说明", "所在章节", "页码"]);

      // 数据行
      this.reviewResults.auditResult.review.forEach((result, index) => {
        result.modifies.forEach((modify) => {
          sheet.addRow([
            index + 1,
            result.name,
            modify.suggestion,
            modify.chapter,
            modify.page,
          ]);
        });
      });

      // 设置列宽
      sheet.columns = [
        { width: 8 }, // 序号
        { width: 25 }, // 意见
        { width: 60 }, // 修改说明
        { width: 25 }, // 所在章节
        { width: 10 }, // 页码
      ];

      // 设置单元格样式
      sheet.eachRow({ includeEmpty: true }, (row) => {
        row.eachCell((cell, colNumber) => {
          // 设置单元格样式
          cell.alignment = {
            vertical: "middle",
            horizontal: "left",
            wrapText: true, // ✅ 关键：自动换行
          };
          cell.font = { name: "微软雅黑", size: 11 };
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };

          // 根据单元格的内容计算行高 （******自适应高度******）
          if (cell.value && typeof cell.value === "string") {
            const lineCount = Math.ceil(cell.value.length / 40); // 假设每行大约可以容纳40个字符
            row.height = Math.max(row.height || 20, lineCount * 20 + 20); // 每行高大约20px
          }
        });
      });

      // 转成 blob 导出
      const buffer = await workbook.xlsx.writeBuffer();
      saveAs(new Blob([buffer]), "审查结果.xlsx");
    },
  },
};
</script>