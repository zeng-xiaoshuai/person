import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "ivf",
    name: "试管婴儿 IVF",
    tagline: "The Quiet Beginning",
    shortDesc: "第三代试管婴儿技术，为每一颗胚胎倾注温柔。",
    longDesc:
      "蕊安采用第三代试管婴儿技术（IVF-ET），结合胚胎植入前遗传学检测（PGT），在严格质控的胚胎实验室中培育每一颗胚胎。我们的目标是最大化单胎健康妊娠率，同时最小化对母体的负担。",
    icon: "sparkles",
    suitableFor: ["输卵管因素", "排卵障碍", "子宫内膜异位症", "男性少弱精", "高龄备孕", "反复流产"],
    process: [
      { step: 1, title: "首诊评估", desc: "2 小时深度问诊 + 个体化方案制定" },
      { step: 2, title: "促排卵", desc: "10–14 天精准调控，B 超实时监测" },
      { step: 3, title: "取卵取精", desc: "麻醉下无创取卵，全程 15 分钟" },
      { step: 4, title: "胚胎培养", desc: "Time-lapse 监控，5–6 天囊胚培养" },
      { step: 5, title: "PGT 检测", desc: "可选 24 全染色体筛查" },
      { step: 6, title: "移植与验孕", desc: "单胚胎移植，12 天后查血值" },
    ],
    priceRange: { min: 80000, max: 180000, unit: "元 / 周期" },
    successRate: 68.4,
    duration: "约 2–3 个月 / 周期",
    highlights: ["Time-lapse 胚胎观察", "PGT-A 全染色体筛查", "单胎移植策略", "24h 胚胎师轮值"],
    faqs: [
      {
        q: "试管婴儿的成功率有多高？",
        a: "蕊安 35 岁以下女性单周期临床妊娠率为 68.4%，与全球顶尖生殖中心持平。35–38 岁约为 56%，38–40 岁约为 42%，具体方案需结合个人卵巢储备与子宫环境评估。",
      },
      {
        q: "做试管婴儿会加速衰老吗？",
        a: "不会。每个月经周期本身就有一批卵泡被募集，促排卵只是让本应被淘汰的卵泡同步发育，并不透支未来的卵巢储备。",
      },
      {
        q: "是否可以选择性别？",
        a: "中国大陆法律禁止非医学指征的性别选择。仅在严重的 X 连锁遗传病等医学指征下，经伦理委员会审批方可实施。",
      },
    ],
  },
  {
    slug: "iui",
    name: "人工授精 IUI",
    tagline: "A Gentle First Step",
    shortDesc: "贴近自然的孕育方式，温和而有效。",
    longDesc:
      "宫腔内人工授精（IUI）是将优化处理后的精子直接送入宫腔，缩短精子与卵子相遇的距离。适用于轻度男性因素、排卵障碍、宫颈因素及不明原因不孕。",
    icon: "leaf",
    suitableFor: ["排卵障碍", "轻度少精", "宫颈因素", "不明原因不孕", "异地夫妇"],
    process: [
      { step: 1, title: "周期监测", desc: "B 超 + 激素联合监测排卵" },
      { step: 2, title: "精液优化", desc: "上游法 + 密度梯度法双重筛选" },
      { step: 3, title: "精准授精", desc: "排卵前后两次，5 分钟内完成" },
      { step: 4, title: "黄体支持", desc: "个性化黄体酮方案" },
      { step: 5, title: "验孕随访", desc: "14 天后查血值" },
    ],
    priceRange: { min: 8000, max: 15000, unit: "元 / 周期" },
    successRate: 18.6,
    duration: "约 1 个月 / 周期",
    highlights: ["自然周期友好", "无麻醉、无取卵", "可连做 3 周期", "费用亲民"],
    faqs: [
      {
        q: "IUI 的成功率是多少？",
        a: "单周期约 15–20%，3 周期累计妊娠率可达 50% 左右。我们建议 35 岁以下、输卵管通畅的女性先尝试 IUI。",
      },
      {
        q: "IUI 流程痛苦吗？",
        a: "IUI 类似一次妇科检查，无麻醉、无痛感，术后可立即正常生活。",
      },
    ],
  },
  {
    slug: "egg-freezing",
    name: "冻卵 · 生育力保存",
    tagline: "Time, in a Glass",
    shortDesc: "为未来的自己，保留一份从容的选择。",
    longDesc:
      "采用玻璃化冷冻技术（Vitrification），卵子复苏率超过 98%。从促排到取卵全程约 14 天，冻存期限最长可达 30 年，让你与时间从容相处。",
    icon: "orbit",
    suitableFor: ["事业上升期女性", "暂无生育计划", "肿瘤治疗前", "家族早绝经史", "35 岁前规划"],
    process: [
      { step: 1, title: "生育力评估", desc: "AMH + B 超 + 基础激素" },
      { step: 2, title: "促排卵", desc: "10–12 天温和方案" },
      { step: 3, title: "取卵", desc: "静脉麻醉，10–15 分钟" },
      { step: 4, title: "玻璃化冷冻", desc: "实验室 -196℃ 液氮保存" },
      { step: 5, title: "年度随访", desc: "免费卵子活力评估" },
    ],
    priceRange: { min: 38000, max: 60000, unit: "元（含首年存储）" },
    successRate: 98.6,
    duration: "约 14 天完成取卵",
    highlights: ["玻璃化冷冻", "复苏率 98%+", "存储期长达 30 年", "全程麻醉"],
    faqs: [
      {
        q: "最佳冻卵年龄是？",
        a: "25–35 岁是黄金期。35 岁后卵子数量与质量均明显下降，建议尽早评估。",
      },
      {
        q: "冻卵会影响未来生育吗？",
        a: "不会。冻卵仅取出当周期可用的卵子，不影响卵巢储备与未来自然受孕。",
      },
    ],
  },
  {
    slug: "pgt",
    name: "胚胎遗传学检测 PGT",
    tagline: "Read the Stars",
    shortDesc: "在生命最开始，剔除那些不确定。",
    longDesc:
      "PGT 是在胚胎移植前对活检细胞进行遗传学分析，筛选染色体正常或不携带致病基因的胚胎。分为 PGT-A（非整倍体）、PGT-M（单基因病）、PGT-SR（结构重排）三类。",
    icon: "shield",
    suitableFor: ["高龄女性", "反复流产", "染色体平衡易位", "单基因病家族史", "反复 IVF 失败"],
    process: [
      { step: 1, title: "遗传咨询", desc: "1 小时家系分析与风险评估" },
      { step: 2, title: "IVF 周期", desc: "完成促排、取卵、胚胎培养" },
      { step: 3, title: "胚胎活检", desc: "5/6 天囊胚期滋养层细胞活检" },
      { step: 4, title: "NGS 检测", desc: "24 全染色体测序" },
      { step: 5, title: "健康胚胎移植", desc: "单囊胚移植" },
    ],
    priceRange: { min: 30000, max: 80000, unit: "元 / 周期" },
    successRate: 95.2,
    duration: "附加于 IVF 周期 + 2–4 周",
    highlights: ["NGS 平台", "24h 出报告", "活检细胞数 ≤ 5", "准确率 99%+"],
    faqs: [
      {
        q: "PGT 会损伤胚胎吗？",
        a: "PGT 仅在 5/6 天囊胚期取 5–8 个滋养层细胞（未来发育为胎盘），对内细胞团（发育为胎儿）无影响，多项研究证实活检胚胎活产率与未活检无显著差异。",
      },
    ],
  },
  {
    slug: "rpl",
    name: "复发性流产诊治",
    tagline: "Hold the Thread",
    shortDesc: "为你解开反复流产的隐形结。",
    longDesc:
      "连续 2 次或以上自然流产即为复发性流产。蕊安设立专病门诊，从染色体、解剖、内分泌、免疫、凝血、感染六大维度系统排查，并提供中西医结合保胎方案。",
    icon: "heart",
    suitableFor: ["反复自然流产", "生化妊娠", "空囊", "胎停育", "免疫性流产"],
    process: [
      { step: 1, title: "全面病因筛查", desc: "夫妻染色体 + 宫腔镜 + 免疫 + 凝血" },
      { step: 2, title: "病因诊断", desc: "分子病理 + 多学科会诊" },
      { step: 3, title: "孕前干预", desc: "3–6 个月精准调理" },
      { step: 4, title: "孕早期保胎", desc: "个性化 hCG/孕酮方案" },
      { step: 5, title: "NT 通过后转产科", desc: "全程心理支持" },
    ],
    priceRange: { min: 20000, max: 50000, unit: "元（不含 IVF）" },
    successRate: 82.5,
    duration: "3–6 个月调理 + 全孕期管理",
    highlights: ["六维病因筛查", "多学科 MDT", "中西医结合", "全程心理支持"],
    faqs: [
      {
        q: "流产 2 次需要做什么检查？",
        a: "建议夫妻双方染色体、女性宫腔镜、甲状腺功能、抗磷脂抗体谱、淋巴细胞亚群、易栓症筛查，必要时胚胎绒毛染色体。",
      },
    ],
  },
  {
    slug: "fertility-care",
    name: "孕前调理与中医助孕",
    tagline: "Quiet the Garden",
    shortDesc: "调身、调心、调息，为生命播种。",
    longDesc:
      "结合现代生殖医学与传统中医，由生殖妇科医师与中医妇科医师联合坐诊。提供针灸、艾灸、中药膏方、营养处方、运动处方与心理咨询的整合调理方案。",
    icon: "feather",
    suitableFor: ["卵巢功能下降", "薄型子宫内膜", "多囊卵巢综合征", "试管前调理", "反复移植失败"],
    process: [
      { step: 1, title: "中医四诊", desc: "舌脉 + 现代医学指标" },
      { step: 2, title: "调理方案", desc: "膏方 + 针灸 + 生活方式" },
      { step: 3, title: "周期监测", desc: "B 超 + 中医证候随访" },
      { step: 4, title: "备孕指导", desc: "同房时机 + 心理支持" },
    ],
    priceRange: { min: 5000, max: 30000, unit: "元 / 3 个月" },
    successRate: 45.8,
    duration: "3–6 个月",
    highlights: ["中西医结合", "针灸助孕", "膏方调理", "心理疏导"],
    faqs: [
      {
        q: "中医调理真的能提高试管成功率吗？",
        a: "多项随机对照研究显示，针刺与中药可改善卵巢储备、提高内膜容受性、降低焦虑评分。蕊安 2024 年数据显示，配合调理者胚胎着床率提升 12%。",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
