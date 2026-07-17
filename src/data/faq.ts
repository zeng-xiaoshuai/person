import type { FAQItem, Testimonial, StatItem } from "@/lib/types";

export const faqs: FAQItem[] = [
  {
    id: "first-visit",
    category: "流程",
    question: "第一次来诊需要准备什么？",
    answer:
      "建议携带：夫妻双方既往检查报告（半年内有效）、身份证 / 护照、既往手术记录。女方建议月经干净后 3–7 天首诊，男方建议禁欲 2–7 天后做精液检查。",
  },
  {
    id: "success-rate",
    category: "服务",
    question: "蕊安的成功率与同行相比如何？",
    answer:
      "蕊安 35 岁以下女性单周期临床妊娠率为 68.4%，与全球顶尖生殖中心持平。我们以「单胎健康活产」为核心指标，避免以多胎妊娠换取表面数字。",
  },
  {
    id: "privacy",
    category: "隐私",
    question: "我的就诊信息会被保密吗？",
    answer:
      "绝对保密。蕊安采用独立诊室、一对一咨询、电子病历双因素认证、就诊记录仅本人可查。我们不与第三方共享任何医疗数据。",
  },
  {
    id: "cost-ivf",
    category: "费用",
    question: "试管婴儿一个周期的费用是多少？",
    answer:
      "标准 IVF 周期费用为 8–12 万元，含促排药物、取卵、胚胎培养、移植与黄体支持。如选择 PGT-A 检测，附加 3–5 万元。所有费用公开透明，无隐藏收费。",
  },
  {
    id: "waiting-time",
    category: "流程",
    question: "从首诊到移植一般需要多久？",
    answer:
      "标准流程 2–3 个月。如需孕前调理或病因排查，建议预留 3–6 个月。特殊方案（如第三方辅助、跨境医疗）需 6–12 个月。",
  },
  {
    id: "single-women",
    category: "服务",
    question: "单身女性可以做试管婴儿吗？",
    answer:
      "中国大陆地区目前不允许单身女性实施 IVF。但我们提供：1) 卵子冻存服务；2) 海外（美国、泰国、格鲁吉亚）医疗咨询与转诊协助，全程专业陪诊。",
  },
  {
    id: "after-failure",
    category: "服务",
    question: "试管失败了还能再做吗？",
    answer:
      "可以。我们建议在两次 IVF 之间至少休息 2–3 个月，并进行详细的失败原因分析（内膜容受性、胚胎染色体、免疫等）。75% 的第二次 IVF 会成功。",
  },
  {
    id: "insurance",
    category: "费用",
    question: "辅助生殖可以医保报销吗？",
    answer:
      "目前北京、上海等部分城市已将促排卵药物纳入医保。试管婴儿手术费用暂未纳入医保范围，但部分商业保险产品已覆盖。我们可提供正规发票供保险理赔。",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "L 女士",
    city: "上海",
    quote: "在蕊安，我第一次觉得自己不是「患者」，而是一个被认真倾听的人。",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    service: "IVF",
    year: 2024,
  },
  {
    id: "t2",
    name: "M 先生",
    city: "深圳",
    quote: "显微取精成功那天，周医生笑着从手术室出来，我们全家都哭了。",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    service: "显微取精",
    year: 2024,
  },
  {
    id: "t3",
    name: "Y 女士",
    city: "北京",
    quote: "冻卵让我不再被 35 岁的倒计时追着跑。我拥有了选择权。",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    service: "冻卵",
    year: 2024,
  },
  {
    id: "t4",
    name: "W 家庭",
    city: "成都",
    quote: "三次胎停后，蕊安让我们第一次敢期待「下一次」。",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    service: "复发性流产",
    year: 2023,
  },
  {
    id: "t5",
    name: "C 女士",
    city: "杭州",
    quote: "心理咨询师林玫老师陪我走过了最难的两周等待期。",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    service: "IVF",
    year: 2024,
  },
  {
    id: "t6",
    name: "S 家庭",
    city: "香港",
    quote: "作为同性家庭，我们被尊重、被理解，没有任何异样眼光。",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&q=80",
    service: "IVF + 第三方辅助",
    year: 2024,
  },
];

export const stats: StatItem[] = [
  { value: 68.4, suffix: "%", label: "<35 岁单周期临床妊娠率", note: "2024 院内数据" },
  { value: 12000, suffix: "+", label: "累计 IVF 周期", note: "自 2014 年" },
  { value: 98.6, suffix: "%", label: "卵子冻存复苏率", note: "玻璃化冷冻技术" },
  { value: 38, suffix: "+", label: "国家与地区患者", note: "国际化诊疗服务" },
];
