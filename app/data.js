// Luckin Newsletter Dashboard v6 — Strategy-Focused
// Rebuilt to center strategic recommendations with full report content

export const META = {
  title: 'Luckin 美国饮品市场 Newsletter',
  date: '2026年4月8日', issue: '第八期', docId: 'LCNA-PROD-NL-2026-008',
  team: '瑞幸美国产品组', period: '2026年3月 — 4月初',
  theme: '蛋白+能量+益生元三大功能同时爆发 × 冷泡沫成产品创新平台 × 市场格局加速碎片化',
};

export const EXEC_SIGNALS = [
  { title: '三大功能架构同时爆发', detail: 'SBUX推出Energy Refreshers永久平台+22g蛋白RTD，DK发布Zero能量饮+蛋白奶平台，PepsiCo CEO宣称「纤维将是下一个蛋白质」。', source: 'Starbucks/Dunkin官方, CNBC', color: '#0365C0' },
  { title: '冷泡沫+能量=产品创新核心平台', detail: '冷泡沫取代糖浆成客制化核心（SBUX/DK各推4+种）。能量升级成永久菜单——每家主流咖啡链现直接与Monster/Celsius竞争。', source: 'Starbucks IR, Dunkin Newsroom', color: '#00A5A5' },
  { title: '市场碎片化=瑞幸历史窗口', detail: 'SBUX关627店+DK成NYC#1+Dutch Bros AUV$210万超SBUX+蜜雪$1.19入场+10%关税。双巨头份额5年降8ppt。', source: 'Placer.ai, SBUX 10-K', color: '#DC2626' },
];

export const MARKET_SHARE = [
  { year: '2019', sbuxDk: 85.9, mid: 10.8, small: 3.3 },
  { year: '2020', sbuxDk: 84.2, mid: 12.1, small: 3.7 },
  { year: '2021', sbuxDk: 82.5, mid: 13.5, small: 4.0 },
  { year: '2022', sbuxDk: 81.0, mid: 14.8, small: 4.2 },
  { year: '2023', sbuxDk: 79.5, mid: 16.2, small: 4.3 },
  { year: '2024', sbuxDk: 77.9, mid: 17.6, small: 4.5 },
];

export const KEY_METRICS = [
  { label: '每日咖啡饮用率', value: '66%', sub: '美国成年人', trend: 'up', delta: '精品46%', src: 'NCA' },
  { label: '冷咖啡占比', value: '31%', sub: '+23% YoY', trend: 'up', delta: 'DT 59%', src: 'NCA' },
  { label: '阿拉比卡', value: '$2.90', sub: '/磅', trend: 'down', delta: '从$4.41跌34%', src: 'TE' },
  { label: '功能饮品', value: '$518亿', sub: 'CAGR 6.68%', trend: 'up', delta: '→$990亿', src: 'Prec' },
  { label: 'SBUX关店', value: '627家', sub: 'FY25北美', trend: 'down', delta: '+80-90取餐', src: '10-K' },
  { label: '双巨头份额', value: '77.9%', sub: '-8ppt(5年)', trend: 'down', delta: '空间释放', src: 'Plac' },
  { label: '10%关税', value: '4月5日', sub: '所有进口', trend: 'down', delta: '越南46%', src: 'WH' },
  { label: '蛋白搜索', value: '+30.9%', sub: 'YoY', trend: 'up', delta: '80%优先蛋白', src: 'Spate' },
];

// === STRATEGIC CONTENT (from docx) ===

export const PRICING_STRATEGY = {
  tiers: [
    { name: '基础款', price: '$1.99', items: '美式/冷萃/冰美式', goal: '拉新获客', benchmark: 'McDonald $1, DK $2/$3菜单' },
    { name: '主力款', price: '$2.99', items: '拿铁/生椰系列/冰拿铁', goal: '复购+品牌认知', benchmark: 'DK $4.68, SBUX $5.13' },
    { name: '功能款', price: '$3.99', items: '蛋白/抹茶/能量升级', goal: '提升客单价', benchmark: 'SBUX RTD $3.99, BB $7.50' },
  ],
  insight: '咖啡需求弹性极低(-0.26)，10%涨价仅减2.6%销量。$3-5为习惯购买甜蜜区。瑞幸$2-3定价处于市场最低端，极强获客力。',
};

export const PROTEIN_COMPARE = [
  { brand: 'Starbucks RTD', product: 'Coffee & Protein', protein: '22g', sugar: '2g', fiber: '5g益生元', price: '$3.99/瓶', format: '即饮RTD' },
  { brand: "Dunkin'", product: '蛋白奶平台', protein: '15g/杯', sugar: '未披露', fiber: '—', price: '门店加入', format: '现制可选' },
  { brand: 'Tim Hortons', product: '蛋白拿铁/Quenchers', protein: '11-23g', sugar: '低', fiber: '—', price: '门店', format: '现制' },
  { brand: 'Bolthouse MAX', product: 'MAX Protein', protein: '38g', sugar: '低', fiber: '—', price: '零售', format: '12oz瓶' },
  { brand: 'Silk (达能)', product: '高蛋白植物奶', protein: '行业最高', sugar: '减半', fiber: '+纤维', price: '零售', format: '乳品' },
  { brand: '瑞幸(建议)', product: '蛋白生椰拿铁', protein: '15-20g', sugar: '可调', fiber: '可选+$0.30', price: '$3.49-3.99', format: '现制+APP定制' },
];

export const ENERGY_COMPARE = [
  { dim: '咖啡因', sbux: '125mg(天然+B族)', dk: '145mg(瓜拉纳)', luckin: '可APP定制调节' },
  { dim: '定价', sbux: '+$0.80加费升级', dk: '$2.99-3.49独立', luckin: '+$0.30-0.50(低于竞品)' },
  { dim: '糖含量', sbux: '可选含糖/无糖', dk: '零糖20卡', luckin: '多糖度选择(APP)' },
  { dim: '口味', sbux: '3种基底', dk: '6种口味', luckin: 'APP无限组合' },
  { dim: '渠道', sbux: '门店现制', dk: '门店+零售', luckin: '门店+外卖' },
  { dim: '差异化', sbux: '永久平台(双向调节)', dk: '独立品类(零糖)', luckin: 'APP咖啡因可调=独特优势' },
];

export const PRODUCT_PIPELINE = [
  { category: '蛋白质系列', skus: ['蛋白质生椰拿铁(15-20g)', '蛋白质陨石拿铁', '高纤维冷萃(+5g益生元)'], price: '$3.49-3.99', timeline: 'Q3 2026', priority: '极高', benchmark: 'SBUX 22g/$3.99, DK 15g' },
  { category: '能量升级', skus: ['任何饮品+「能量加强」(100-150mg)', '咖啡因可调(标准/加强/去咖啡因)'], price: '+$0.30-0.50', timeline: 'Q3 2026', priority: '极高', benchmark: 'SBUX +$0.80, DK $2.99' },
  { category: '抹茶产品线', skus: ['纯抹茶拿铁', '草莓/桂花抹茶', '抹茶+蛋白/胶原蛋白'], price: '$2.50→$3.00→$3.99', timeline: 'Q3 2026', priority: '高', benchmark: 'SBUX $5+, Blank St品牌化' },
  { category: '冷泡沫平台', skus: ['生椰冷泡沫', '桂花冷泡沫', '芒果冷泡沫', '抹茶冷泡沫'], price: '+$0.50-0.80', timeline: 'Q3 2026', priority: '高', benchmark: 'SBUX/DK各4+种泡沫' },
  { category: '亚洲风味矩阵', skus: ['桂花拿铁', '荔枝冰茶', '白桃乌龙', '生椰升级系列'], price: '$2.99-3.50', timeline: 'Q3 2026', priority: '中', benchmark: 'SBUX ube主题,DK香蕉系列' },
  { category: 'Blue Bottle RTD', skus: ['BB品牌高端冷萃RTD', 'BB蛋白质RTD', 'BB抹茶RTD'], price: '$4-5/罐', timeline: 'Q4 2026', priority: '高', benchmark: 'SBUX占RTD 39%, 7Brew$2.98' },
];

export const STORE_STRATEGY = {
  formats: [
    { type: '城市核心(步行式)', size: '350-400sqft', invest: '~$5万', target: '曼哈顿/大学城', benchmark: 'Blank St 14家全1月盈利,中国93%存活', priority: '立即', opportunity: 'SBUX关627家+80-90取餐店=空白填充' },
    { type: '郊区(得来速窗口)', size: '500-700sqft', invest: '$60-150万', target: '郊区/二线城市', benchmark: '7Brew $204万AUV,$4604/sqft', priority: '中期', opportunity: 'DT占59%外出咖啡(历史新高)' },
    { type: '校园(超小型)', size: '165-200sqft', invest: '最低', target: '大学校园', benchmark: '7Brew大学校园店,Blank St Penn', priority: '中期', opportunity: 'Z世代47%每日饮咖啡,15岁开始' },
  ],
  siteSelection: 'Placer.ai移动数据($200-500/月)替代人工估算.对标Dutch Bros手机位置分析.复制中国「外卖先验证→开店」方法论.',
};

export const SOCIAL_STRATEGY = {
  budget: '$50-100K/月',
  channels: [
    { platform: 'TikTok', action: '「瑞幸隐藏菜单」挑战+Cloud Coffee内容', data: '64% Z世代用TikTok搜索', roi: 'SBUX雇2名全职TikTok创作者' },
    { platform: '微网红(1-10万)', action: 'NYC/LA本地KOL合作,UGC$2拿铁对比内容', data: 'CPM仅$119,互动6.15%', roi: '$5.78/$1 ROI(11x传统数字广告)' },
    { platform: 'Instagram', action: '视觉冲击冷泡沫分层照片,ube紫色系', data: 'DK Sabrina 3240万IG浏览', roi: '127亿媒体曝光(DK案例)' },
  ],
  tiktokTrends: ['Cloud Coffee(椰子水+浓缩)', 'ube紫薯拿铁', '开心果咖啡(迪拜巧克力延伸)', '蘑菇/适应原咖啡(+4.2x)', '32oz冰咖啡桶'],
};

export const COMPETITORS_COMPACT = [
  { n: 'Starbucks', s: '16,911', auv: '$181万', move: 'Q1$99亿(+6%).关627+80取餐.利润率11.9%.Rewards改版反弹.NYC#2', threat: 5 },
  { n: "Dunkin'", s: '13,700', auv: '未披露', move: 'NYC#1.Zero能量饮.OREO联名.Sabrina 127亿曝光.Inspire IPO $200亿', threat: 4 },
  { n: 'Dutch Bros', s: '1,136', auv: '$210万', move: 'AUV超SBUX.USC Walk-thru=最佳.投资$170→$130万.食物全国推广', threat: 3 },
  { n: '7 Brew', s: '600+', auv: '$204万', move: '系统销售865%增长.RTD进Walmart.$4604/sqft.大学校园', threat: 3 },
  { n: 'Blank St.', s: '~95', auv: '未披露', move: '$5亿→$10亿估值.LA Beverly Hills 6月.品牌化Coffee&Matcha', threat: 2 },
  { n: 'Luckin', s: '10/31048全球', auv: '—', move: 'BB$4亿收购.中国$5万/店93%存活.APP 99%+移动', threat: 0 },
];

export const CHINESE_BRANDS = [
  { n: '喜茶', st: '26-35', p: '$6-9', risk: '高', rc: '#D97706', d: 'TEALAB旗舰3500+杯/日', k: 'NYC~15+湾区~7+LA~3' },
  { n: '霸王茶姬', st: '9', p: '$5-7', risk: '高', rc: '#D97706', d: '营收RMB124亿(+167%)', k: 'IPO$4.11亿+Emily Chang CCO' },
  { n: '蜜雪冰城', st: '2+', p: '$1.19-3.49', risk: '中', rc: '#3B82F6', d: '50000+全球最大餐饮', k: '$1.19冰淇淋冲击' },
  { n: '库迪咖啡', st: '4+', p: '$0.99-2.99', risk: '极高', rc: '#DC2626', d: '前瑞幸高管,18000+/33国', k: '$0.99入门咖啡' },
];

export const TIMELINE = [
  { d: '4月下旬', evs: ['DK 4/29 OREO+Dirty Soda+Cherry上市效果', 'SBUX Energy Refreshers首月数据'] },
  { d: '5月', evs: ['SBUX FQ2财报(关店+利润率)', '咖啡商品价格(巴西产季)', 'Inspire/DK IPO进展'] },
  { d: '6月', evs: ['Blank Street LA Beverly Hills', '各品牌夏季菜单', '霸王茶姬扩张'] },
  { d: '持续', evs: ['10%关税影响', 'SBUX关店地图(填空)', '库迪/蜜雪进展'] },
];

export const LUCKIN_SWOT = {
  str: ['极致价格($2-3 vs $4-7)', 'APP 99%+移动(中国验证)', 'Blue Bottle双品牌(3/4交割,$4亿)', '亚洲风味供应链', '全球31048家规模', '$5万/店93%存活模式', 'SBUX关627店=窗口', 'Z世代对亚洲品牌好奇'],
  chg: ['美国仅10店', '步行vs得来速59%主流', '10%关税+中国杯35-41.5%', '品牌知名度低', '蜜雪$1.19+库迪$0.99竞争', 'SBUX复苏(Q1+4%)', '劳动力高(NYC $17+)', 'DK已成NYC第一'],
};

export const SOURCES = [
  'NCA 2025', 'Starbucks 10-K/IR/Q1 FY26', "Dunkin' Newsroom",
  'Dutch Bros 10-K', '7 Brew/Business Wire', 'Blank Street/FT',
  'Placer.ai', 'Precedence Research', 'Tastewise', 'Spate',
  'Trading Economics', 'SEC EDGAR', 'CNBC', 'Food Dive',
  'QSR Magazine', 'Franchise Times', 'KrASIA', 'Semafor',
];
