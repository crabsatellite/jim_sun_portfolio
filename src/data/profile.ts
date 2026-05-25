const PORTFOLIO_START_YEAR = 2024;
const PORTFOLIO_FLOOR_END_YEAR = 2026;

const currentYear = new Date().getFullYear();
const endYear = Math.max(currentYear, PORTFOLIO_FLOOR_END_YEAR);
const yearRange = `${PORTFOLIO_START_YEAR}-${endYear}`;

export const profile = {
  name: "Jim Sun",
  fullName: "孙涵之",
  title: "Architecture Portfolio",
  startYear: PORTFOLIO_START_YEAR,
  endYear,
  yearRange,
  email: "hanzhi.sun@mail.utoronto.ca",
  phone: "+86 18917905059",
  description: `Jim Sun architecture portfolio, featuring ${yearRange} work in architecture, ecological landscape, rural library design, material construction, and memorial infrastructure. 孙涵之建筑作品集，收录 ${yearRange} 年建筑、生态景观、乡村图书馆、纪念性空间与材料建造项目。`,
  education: [
    "University of Toronto, M. Arch, 2025.8-2028.11 expected",
    "School of Visual Arts, BFA Illustration, 2020.8-2024.5",
  ],
  practice: [
    "Shanghai Xian Dai Architectural Decoration & Environment Design, Interior Design Intern",
    "China Telecom, Graphic Design Intern",
  ],
  making:
    "Concept design / drawing / rendering / 3D printing / woodworking / foam carving / laser cutting · 方案设计 / 绘图 / 效果图制作 / 3D 打印 / 木工 / 泡沫雕刻 / 激光切割",
  software:
    "Rhino, V-Ray, Enscape, Photoshop, InDesign, Illustrator, Premiere, AutoCAD, SketchUp, Cinema 4D, Redshift, Blender",
} as const;
