export type ProjectTone = "dark" | "light" | "warm";

export interface PortfolioProject {
  id: string;
  no: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  body: string[];
  bodyZh: string[];
  meta: Array<[string, string]>;
  tone: ProjectTone;
}

export const projects: PortfolioProject[] = [
  {
    id: "between",
    no: "01",
    title: "Between the Planes",
    titleZh: "位面之间",
    summary:
      "A vertical exploration of the in-between: translating abstract geometries into a five-story hub for exhibition, work, and social life.",
    summaryZh:
      "对空间之意象的垂直探索：将抽象几何转换为集展览、办公与社交于一体的五层空间枢纽。",
    body: [
      "Situated within the dense urban fabric of 291 College Street in Toronto, the project transforms a narrow 30-foot infill site into a vertically integrated, multi-use hub.",
      "Malevich's non-objective paintings are recomposed into a structural logic, moving from 2D abstraction toward a five-story mix of gallery, office, co-working, and social space.",
    ],
    bodyZh: [
      "位于多伦多 College 街 291 号的狭长填充地块，项目在 70 英尺高度限制内组织复杂的公共与私密功能。",
      "设计将马列维奇绘画中的抽象几何转译为三维城市建筑，在严苛城市肌理中测试形式探索与功能组织的关系。",
    ],
    meta: [
      ["Site", "291 College St, Toronto, ON"],
      ["Term", "Fall 2025"],
      ["Type", "Individual Project"],
    ],
    tone: "dark",
  },
  {
    id: "gravel",
    no: "02",
    title: "Gravel to Green",
    titleZh: "由砾至翠",
    summary:
      "A land-centric evolution designed to restore ecological continuity and establish architectural harmony within a protected conservation landscape.",
    summaryZh:
      "以土地为核心主旨，恢复生态连续性，并在受保护的自然保护区景观中建立建筑与环境的和谐共生。",
    body: [
      "The site history moves from glacial gravel deposits and wetland ecology to agricultural use, extraction, and eventual ecological restoration.",
      "The building uses an earth-sheltered strategy with a local vegetation mantle, turning architecture into a topographical feature rather than a freestanding object.",
    ],
    bodyZh: [
      "Snyders Flats 的场地叙事从冰川砂砾沉积、湿地森林生态、农业社区和砂石开采，延伸到采矿后的自然修复。",
      "建筑以覆土与采光井淡化结构和地平线的边界，将实验室、温室与公共空间嵌入一处可呼吸的景观。",
    ],
    meta: [
      ["Site", "1494 Snyders Flats Rd, Bloomingdale, ON"],
      ["Term", "Winter 2026"],
      ["Type", "Individual Project"],
    ],
    tone: "light",
  },
  {
    id: "archive",
    no: "03",
    title: "The Floating Archive",
    titleZh: "悬浮图书馆",
    summary:
      "Mandajiu Library: a light-penetrated stilt structure blending innovative reading environments with traditional rural gathering.",
    summaryZh:
      "一处光影交织的吊脚图书馆，旨在将创新阅读环境与传统乡村社交空间融合。",
    body: [
      "The library responds to the educational and digital infrastructure gap in Mandajiu by turning a rural reading room into a tech-integrated community hub.",
      "The program is separated vertically: open-air gathering at grade, a lifted archive above, and rooms for visual media and digital literacy.",
    ],
    bodyZh: [
      "面对偏远山区教育与数字基础设施不足的问题，悬浮图书馆把乡村阅读空间改造为学习、娱乐与数字访问的复合枢纽。",
      "建筑借鉴吊脚楼逻辑，将公共聚集留在地面，把藏书与长时间阅读空间抬升，并植入媒体室和电脑室。",
    ],
    meta: [
      ["Site", "Jinghong, Xishuangbanna, Yunnan, CN"],
      ["Term", "Winter 2025"],
      ["Type", "Individual Project"],
    ],
    tone: "warm",
  },
  {
    id: "synthesis",
    no: "04",
    title: "The Synthesis Paradox",
    titleZh: "合成悖论",
    summary:
      "An exploration of visual contrast through the deliberate juxtaposition of disciplined architectural elements and sculptural, freeform silhouettes.",
    summaryZh:
      "通过严谨建筑元素与雕塑感自由形态的并置，制造理性结构与自由外壳之间的视觉张力。",
    body: [
      "The project synthesizes structural efficiency from Brutalist, Rationalist, and Art Deco references with the freeform vocabulary of Gaudi and Frank Gehry.",
      "A rational concrete core and externalized circulation are wrapped by a translucent polycarbonate skin, setting systemic order against fluid resistance.",
    ],
    bodyZh: [
      "设计在“理性”与“自由”的两端建立对照：一侧吸收粗野主义、理性主义和装饰艺术的秩序，另一侧引入高迪与盖里的有机流动。",
      "重复楼板、外置楼梯和半透明曲线外壳彼此叠合，形成工业骨架与雕塑表皮之间的视觉悖论。",
    ],
    meta: [
      ["Term", "Fall 2024"],
      ["Type", "Individual Project"],
    ],
    tone: "dark",
  },
  {
    id: "form",
    no: "05",
    title: "After the Form",
    titleZh: "余形",
    summary: "A pavilion formed through rammed earth and reusable formwork.",
    summaryZh:
      "一座由夯土与可重复利用模板筑就的展亭，将临时建造逻辑转化为永久的建构语言。",
    body: [
      "Set within a steep rocky landscape, the pavilion transforms difficult traversal into an elevated vantage point for pause, shade, and gathering.",
      "Site-sourced rammed earth walls become infrastructural guides for stairs and shelter, while reusable formwork leaves the process embedded in the final aesthetic.",
    ],
    bodyZh: [
      "展亭嵌入险峻石景，将步道、休息点和观景台合并，让地势挑战转化为可停留的公共节点。",
      "取材于场地的夯土墙不是边界，而是支撑楼梯、遮阳与动线的基础设施；周转模板的临时逻辑被保留为最终建构语言。",
    ],
    meta: [
      ["Term", "Winter 2026"],
      ["Type", "Group Project with Lester Kong"],
    ],
    tone: "light",
  },
  {
    id: "sentinel",
    no: "06",
    title: "The Nuclear Sentinel",
    titleZh: "核迹守望者",
    summary:
      "A memorial for the Indigenous islanders of Runit Island and a structural witness to rising sea levels threatening a radioactive containment dome.",
    summaryZh:
      "为冷战中失去家园的鲁尼特岛原住民建立的纪念性结构，同时预示海平面上升下放射性遗留物的泄漏风险。",
    body: [
      "Runit Island is treated as a scarred Cold War landscape where nuclear testing, Indigenous displacement, and radioactive containment meet the pressure of rising seas.",
      "The memorial morphology derives from seven Operation Hardtack I blast sites, arranged chronologically as a spatial gauge that submerges as the Pacific rises.",
    ],
    bodyZh: [
      "项目把鲁尼特岛视作冷战核试验、原住民迁离和放射性废料封存共同构成的伤痕地景。",
      "纪念碑形体提取自 Operation Hardtack I 的七处核爆遗址，并以逐层没入海水的方式成为生态风险的可视化刻度。",
    ],
    meta: [
      ["Site", "Runit, Enewetak Atoll, Marshall Islands"],
      ["Term", "Fall 2025"],
      ["Type", "Individual Project"],
    ],
    tone: "dark",
  },
];
