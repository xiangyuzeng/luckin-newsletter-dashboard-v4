// Luckin Newsletter Dashboard v7 — Report Mirror
// Tabs match report sections exactly

export const META = {
  title: 'Luckin 美国饮品市场 Newsletter',
  date: '2026年4月8日', issue: '第八期', docId: 'LCNA-PROD-NL-2026-008',
  team: '瑞幸美国产品组', period: '2026年3月 — 4月初',
  theme: '蛋白+能量+益生元三大功能同时爆发 × 冷泡沫成产品创新平台 × 市场格局加速碎片化',
  themes: [
    { t: '三大功能架构同时爆发', d: '蛋白质(Starbucks 22g RTD + Dunkin\' 15g)、能量(SBUX Refreshers + DK Zero)、益生元纤维(PepsiCo CEO称纤维=下一个蛋白质)' },
    { t: '冷泡沫+能量成为产品平台', d: '冷泡沫取代糖浆成为客制化核心载体，能量升级成为永久菜单架构，每家主流咖啡链现在直接与Monster竞争' },
    { t: '市场格局重塑', d: 'SBUX关627店+DK成NYC第一+Dutch Bros AUV超SBUX+蜜雪冰城$1.19入场+10%通用关税——竞争格局加速碎片化' },
    { t: '冷饮主导+Z世代驱动', d: '冷咖啡占31%消费量(+23%)，59%通过得来速购买(历史新高)，Z世代80%消费功能饮品，TikTok成为新菜单板' },
  ],
};

export const DASHBOARD = [
  { m: '美国每日咖啡饮用率', d: '66%成年人', c: '20年来+37%，创历史新高', i: '↑ 巨大市场基础' },
  { m: '冷饮占Starbucks销售', d: '~75%', c: '2013年仅37%，翻倍增长', i: '↑ 冷萃为核心品类' },
  { m: '精品咖啡渗透率', d: '46%（每100杯中59杯）', c: '2011年来+80%', i: '↑ 消费者愿付精品溢价' },
  { m: '功能饮品市场规模', d: '$518亿 (2025)', c: 'CAGR 6.68% → $990亿(2035)', i: '↑ 巨大增量市场' },
  { m: '蛋白质咖啡搜索增长', d: '+30.9% YoY', c: '透明蛋白饮品+54.7%', i: '↑ 必须进入的品类' },
  { m: '抹茶菜单增长', d: '+30.2% YoY', c: '社交媒体+107%，Yelp #1', i: '↑ 已是主流必备' },
  { m: '阿拉比卡期货价格', d: '~$2.90/磅 (4月)', c: '从$4.41峰值下降~34%', i: '↑ 成本改善窗口' },
  { m: 'Starbucks美国同店增长', d: '+4% (Q1 FY26)', c: '连续8季度首次正增长', i: '↓ 竞争对手复苏' },
  { m: 'SBUX+DK流量份额', d: '77.9% (2024)', c: '从2019年85.9%持续下降', i: '↑ 市场空间释放' },
  { m: 'Dutch Bros营收增长', d: '+27.9% ($16.4亿)', c: '2026年计划181家新店', i: '↓ 得来速竞争加剧' },
  { m: '7 Brew门店访问增长', d: '+87.3% YoY', c: '从14家→674+家(5年)', i: '↓ 价值赛道新王者' },
  { m: '中国茶饮美国门店数', d: '~6,500家', c: '喜茶从2→35家(1年内)', i: '↓ 直接竞争威胁' },
  { m: 'RTD即饮咖啡市场', d: '$54-83亿', c: 'CAGR 4.9-5.9%', i: '↑ 零售渠道空白' },
  { m: '数字订单占比(SBUX)', d: '30%+移动订单', c: '会员贡献57%销售', i: '↑ 瑞幸APP优势领域' },
  { m: '瑞幸全球门店数', d: '31,048家', c: 'FY2025新增8,708家', i: '— 规模优势明显' },
];

// Section 1: Consumer
export const CONSUMER = {
  stats: [
    { l: '每日饮用率', v: '66%', d: '超过瓶装水(64%)和茶(44%)' },
    { l: '冷咖啡占比', v: '31%', d: '+23% YoY，冷萃+50%(2020来)' },
    { l: 'DT购买占比', v: '59%', d: '外出咖啡，历史新高' },
    { l: 'APP下单', v: '36%', d: '+6% YoY' },
    { l: '精品渗透', v: '46%', d: '每100杯中59杯精品' },
    { l: '冷饮(SBUX)', v: '~75%', d: '2013年仅37%' },
  ],
  genZ: [
    '65%偏好功能性成分，80%至少每两周消费功能饮品(EY)',
    '75%通过社交媒体发现品牌，72%每月尝新，38%要认知/情绪增强',
    '64%使用TikTok作为搜索引擎',
    '强烈偏好定制化、非乳制品奶、视觉吸引力强的饮品',
    '注重价值感知：愿为品质付费，但抗拒「被收割」',
  ],
  genZInsight: '瑞幸APP定制化能力、$2-3定价和中国品牌「新鲜感」与Z世代需求高度匹配。应优先投入社交媒体营销和KOL合作。',
  pricing: [
    { b: 'Blue Bottle', p: '~$7.50', t: '$9.34', pos: '超高端', note: '精品手冲' },
    { b: 'Starbucks', p: '~$5.00-5.25', t: '$9.34', pos: '中高端', note: 'FY25冻价，取消非乳附加费' },
    { b: 'Dutch Bros', p: '~$4.25-5.50', t: '$8.44', pos: '亲民精品', note: '24oz中杯' },
    { b: 'Blank Street', p: '~$4.35', t: 'N/A', pos: '精品平价', note: '低于SBUX 20-30¢' },
    { b: "Dunkin'", p: '~$4.29-4.59', t: '$4.68', pos: '大众价值', note: '$2/$3价值菜单' },
    { b: '瑞幸(美国)', p: '~$2.00-3.00', t: 'N/A', pos: '极致性价比', note: '$0.99新用户' },
    { b: "McDonald's", p: '~$1.00(美式)', t: 'N/A', pos: '快餐附属', note: '任意杯$1' },
  ],
  pricingInsight: '建议三档价格体系：$1.99基础款（美式/冷萃）→ $2.99主力款（拿铁/生椰系列）→ $3.99功能款（蛋白质/抹茶/能量升级），覆盖从拉新到提升客单价完整路径。',
};

// Section 2: Market Trends
export const TRENDS = [
  { title: '蛋白质咖啡与功能性营养全面爆发', icon: '🧬',
    body: '功能饮品市场$518亿(2025)→$990亿(2035)。proffee搜索+30.9%，透明蛋白+54.7%。PepsiCo CEO称纤维=下一个蛋白质。PepsiCo $19.5亿收购Poppi。全球肠道健康产品+61%。',
    table: { h: ['品牌','产品','蛋白质','糖','特点'], rows: [
      ['Starbucks RTD','Coffee+Protein','22g','2g','+5g益生元纤维'],
      ["Dunkin'",'蛋白奶平台','15g/杯','未披露','可加入任何饮品'],
      ['Bolthouse','MAX Protein','38g','低糖','零售渠道'],
      ['Silk(达能)','高蛋白植物奶','行业最高','减半','+纤维，无人工甜味剂'],
    ]},
    action: '研发「蛋白质生椰拿铁」「高纤维陨石拿铁」，探索蛋白质/纤维作为可选加费升级项(参考SBUX $0.80模式)。Q3 2026推2-3款。' },
  { title: '抹茶从小众走向主流', icon: '🍵',
    body: '抹茶菜单+30.2%，社交+107%，调味抹茶搜索+180%+，礼仪抹茶+210%。Yelp评2026 #1食品趋势。Blank Street品牌化为Coffee & Matcha Shop。',
    action: '开发抹茶产品线：纯抹茶拿铁($2.5-3)→水果抹茶(草莓/芒果,$3)→功能抹茶(+蛋白/胶原,$3.99)。瑞幸作为中国品牌的天然优势品类。' },
  { title: '亚洲风味加速渗透美国主流', icon: '🌏',
    body: 'Starbucks以紫薯(ube)+椰子构建春季菜单身份——首次将亚洲风味作为季节主题。柚子、火龙果、班兰、桂花全面兴起。65%千禧接受新风味。香蕉成2026春季突破风味(DK 10+款)。',
    insight: '充分利用生椰、桂花、荔枝、白桃乌龙等差异化原料，打造「只有瑞幸能做」的亚洲风味矩阵。' },
  { title: '能量饮与咖啡融合创造新品类', icon: '⚡',
    body: 'SBUX Energy Refreshers(125mg,+$0.80永久平台)。DK Zero(145mg,零糖,6口味)。Panera新Energy Refreshers。Tim Hortons TimBoost。Dutch Bros Blue Rebel=24%销售。',
    table: { h: ['维度','Starbucks','Dunkin\'','Luckin机会'], rows: [
      ['咖啡因','125mg(天然+B族)','145mg(瓜拉纳)','APP可定制调节'],
      ['定价','+$0.80升级','$2.99-3.49独立','+$0.30-0.50(低于竞品)'],
      ['糖','可选含糖/无糖','零糖20卡','多糖度(APP)'],
      ['差异化','永久平台双向调节','独立品类零糖','APP咖啡因可调=独特'],
    ]},
    action: '探索「能量加强」选项：+$0.30-0.50升级咖啡因。利用APP实现咖啡因可调(标准/加强/去咖啡因)——SBUX和DK难以复制。' },
  { title: '质感创新驱动Z世代', icon: '✨',
    body: '31%消费者关注质感，Z世代达75-80%。冷泡沫是最大创新维度。社交「丝滑」帖子+40%。Dutch Bros引入爆炸珠+巧克力脆片。Innova「Layers of Delight」列为2026十大趋势。' },
];

// Section 3: Brand Moves
export const BRANDS = [
  { name: 'Starbucks「Back to Starbucks」', data: [
    'Q1 FY2026营收$99亿(+6%)，美国同店+4%，8季度来首次正向交易增长(+3%)',
    'FY2025关闭627家北美门店+80-90家纯取餐店，回归咖啡馆体验',
    '翻新1,000家美国门店，新增25,000+座位，4分钟出杯目标',
    '投入近$6亿员工薪酬改善，年度绩效奖金$1,200',
    'Rewards三级体系(Green/Gold/Reserve)，35.5M会员贡献~60%收入($130亿+)，但改版引反弹',
    '门店运营费用升至营收45.9%(从42.3%)。纽约已被DK超越成#2',
    '品牌合作：MrBeast/Beast Games、Kim Kardashian蛋白联名、Poppi入店、疑似Harry Potter系列',
  ], callout: '竞争警示：SBUX复苏与收缩并行——关闭取餐店=瑞幸步行式直接竞争减少。监控关店地图，空白区优先布局。', calloutType: 'warn' },
  { name: "Dunkin' 三支柱战略", data: [
    '1月蛋白奶平台(15g/杯)，Megan Thee Stallion联名(限量杯秒售罄)',
    '3月Zero能量饮(145mg/零糖/6口味)+香蕉系列8款',
    'Sabrina Carpenter「Shake That Ess\'」127亿媒体曝光+3240万IG浏览',
    'Ben Affleck第4次超级碗广告(Good Will Dunkin\'+Aniston/LeBlanc/Brady)',
    '4/29 OREO全联名+Dirty Soda(百事+咖啡奶+冷泡沫=首创汽水咖啡混合)+Cherry Daydream',
    '~13,700家美国加盟，纽约最大咖啡连锁。Inspire探索~$200亿IPO',
  ] },
  { name: 'Dutch Bros 创纪录年份', data: [
    'FY2025营收$16.4亿(+28%)，系统AUV $210万(超Starbucks)',
    '2026计划181家新店，目标2029年2,029家。投资$170→$130万',
    'USC Walk-thru(无得来速)=全系统最高业绩——验证城市步行模式',
    '收购Clutch Coffee Bar 20店。食物推广300→全国',
    '选址创新：手机位置分析+分层市场进入(郊区→农村→填充)',
  ] },
  { name: 'Blank Street 转型', data: [
    '~90-97家美国，估值$5亿，融资$1亿+目标$10亿(FT 2026.04)',
    '从350sqft微型转向1,300+sqft大咖啡馆(对话包厢+TikTok设计)',
    '品牌化为「Coffee & Matcha Shop」。进LA Beverly Hills(6月)+费城Penn',
    '14家初始店全部1月内盈利，运营成本低~20%',
  ], callout: '启示：微型门店可行性=瑞幸中国模式。', calloutType: 'insight' },
  { name: '中国茶饮品牌集体进入', table: { h: ['品牌','美国布局','定价','门店','竞争分析'], rows: [
    ['喜茶','NYC~15+湾区~7+LA~3，TEALAB日销3500+杯','$6-9','26-35家','茶饮主打，定位重叠'],
    ['霸王茶姬','IPO $4.11亿，加州9家，聘Emily Chang CCO','$5-7','9/6440全球','营收RMB124亿(+167%)'],
    ['蜜雪冰城','2025.12.19好莱坞首店+曼哈顿','$1.19-3.49','50000+全球','直接价格竞争威胁'],
    ['库迪咖啡','曼哈顿/布鲁克林/加州,$0.99入门','$0.99-2.99','18000+全球','前瑞幸高管创办'],
  ]}, callout: '竞争警示：蜜雪超低价+库迪前瑞幸背景=直接威胁。', calloutType: 'warn' },
  { name: 'Coca-Cola vs PepsiCo 对决', data: [
    'PepsiCo $19.5亿收购Poppi(功能饮品史上最大退出)→推出Pepsi Prebiotic Cola(3g纤维/30卡)',
    'Coca-Cola以Simply Pop反击(6g益生元纤维/$2.49)',
    '益生元汽水品类$1.97亿(2020)→$4.4亿(2024)(+301.5%)→$20亿(2029)',
    'PepsiCo CEO: 纤维将是下一个蛋白质',
  ] },
];

// Section 4: New Products
export const PRODUCTS = [
  { brand: 'Starbucks', date: '3月3日', theme: '紫薯+椰子+薰衣草', items: ['紫薯椰子玛奇朵(ube分层视觉)', '烤椰子奶油冷萃(常驻)', '冰薰衣草奶油Chai', 'Poppi益生元汽水入店'], note: '首次将亚洲风味(ube)作为季节主题' },
  { brand: 'Starbucks', date: '4月7日', theme: '能量+芒果+抹茶', items: ['Energy Refreshers永久平台(+$0.80/125mg+B族)', '冰芒果奶油抹茶/Chai(冒顶系列)', '紫薯椰子Shaken Espresso', 'Reserve椰子威士忌桶陈冷萃'], note: '能量饮成永久平台——战略级品类投入' },
  { brand: "Dunkin'", date: '1月', theme: '蛋白质', items: ['蛋白奶平台(15g/杯)', 'Megan Thee Stallion联名'], note: '名人+功能性成功模板' },
  { brand: "Dunkin'", date: '3月', theme: '能量+香蕉', items: ['Zero能量饮(6口味/145mg/零糖)', '香蕉系列9款', 'Berry Açaí常驻'], note: '全面进入能量赛道' },
  { brand: "Dunkin'", date: '4月预告', theme: 'OREO+跨界', items: ['Dirty Soda(百事+咖啡奶+冷泡沫)', 'OREO Cloud Latte', '棉花糖冷泡沫拿铁', 'Cherry Daydream系列'], note: '首创汽水咖啡混合新品类' },
  { brand: 'Dutch Bros', date: '1-3月', theme: '质感创新', items: ['棕色黄油巧克力脆片拿铁', '芒果爆炸珠饮品', '酸糖棒果汁'], note: '多感官质感元素引领体验' },
  { brand: '7 Brew', date: '3月14日', theme: 'RTD进入', items: ['首款RTD咖啡3口味($2.98/罐)', 'Walmart首发，真奶油+100% Arabica'], note: '得来速品牌进$54-83亿RTD市场' },
];

// Section 5: Social & Digital
export const SOCIAL = {
  discovery: [
    { s: '75%', l: 'Z世代通过社交媒体发现新品牌' },
    { s: '64%', l: '使用TikTok作为搜索引擎' },
    { s: '150%', l: 'Z世代咖啡社交对话YoY增长' },
  ],
  influencer: { market: '$405亿(2026全球)', roi: '$5.78/$1', microCPM: '$119', microEng: '6.15-6.76%' },
  casestudy: "Dunkin' Sabrina Carpenter「Shake That Ess'」：127亿+媒体曝光，3240万IG浏览，冰浓缩销售双位数增长",
  tiktok: ['云朵咖啡(椰子水+浓缩)', '紫薯拿铁(ube)', '开心果咖啡(迪拜巧克力延伸)', '蘑菇/适应原咖啡(菜单+4.2x)', 'proffee(蛋白咖啡2000万+帖子)', '32oz冰咖啡桶(病毒式传播)'],
  digitalCompare: [
    { n: 'Starbucks', members: '35.5M', mobile: '30%+', loyalty: '~60%收入($130亿+)', ai: 'Deep Brew AI(推荐+库存+排队)', key: 'AI卖增15-20%，DT缩短18秒' },
    { n: "Dunkin'", members: '~20-24M', mobile: '25-30%', loyalty: '~60%收入', ai: 'Tango Analytics', key: '30秒选址预测(年省5000工时)' },
    { n: 'Dutch Bros', members: '1500万', mobile: '11%', loyalty: '73%交易', ai: '手机位置分析', key: '会员渗透最高(73%)但移动低(11%)' },
    { n: '瑞幸(中国)', members: '9840万MAU', mobile: '~99%+', loyalty: '核心', ai: 'APP+RF/XGBoost', key: '全球领先移动咖啡，需复制美国' },
  ],
  socialAction: '建议$50-100K/月用于社交+网红。TikTok「瑞幸隐藏菜单」挑战。微网红NYC/LA(CPM$119)。UGC $2拿铁vs$5 SBUX对比。',
};

// Section 6: Industry News
export const NEWS = [
  { cat: '供应链', t: '咖啡期货从$4.41跌至$2.90(-34%)', d: '巴西2026/27预计创纪录66-76百万袋(+17-21%)。全球盈余1000万袋。零售价滞后$9.37/磅(+33%)。', impact: 'pos', action: '利用成本优势加大创新投入，强化「高性价比」品牌心智。' },
  { cat: '并购', t: 'KDP收购JDE Peet\'s($180亿,4月交割)', d: '合并后年咖啡$160亿=全球最大纯咖啡公司。拆分饮料+咖啡两公司。Royal Cup收购Farmer Brothers。', impact: 'neg' },
  { cat: '竞争', t: 'SBUX FY25关627家北美门店', d: '90%+北美。另关80-90纯取餐店。新原型成本降30%。中国JV Boyu Capital(8011店→授权模式)。', impact: 'pos', action: '映射关店地图，空白区优先选址。特别关注取餐店位置——客流和形态与瑞幸最匹配。' },
  { cat: '关税', t: '10%通用关税(4月5日)+越南46%', d: '所有进口含咖啡。中国杯/包装35-41.5%。94%关税成本由企业/消费者承担(纽约联储)。', impact: 'neg' },
  { cat: '监管', t: 'FDA纯咖啡列为「健康」+咖啡因安全法案', d: 'FDA新规利好。Sarah Katz法案(H.R.2511)审议中。', impact: 'neu' },
  { cat: '劳动力', t: '22州涨最低工资', d: 'DC $17.95，加州$16.90，NYC $17。SBUX门店运营费升至营收45.9%。', impact: 'neg' },
  { cat: '可持续', t: '植物奶主流化，燕麦奶33%份额', d: '51%偏好植物奶。$8.6亿市场(CAGR 12.65%)。SBUX取消非乳附加费(~50%客户降价10%)。', impact: 'pos', action: '默认提供燕麦奶(无附加费)，采用可回收杯具。' },
];

// Section 7: Strategic Recommendations
export const STRATEGY = {
  landscape: [
    { dim: '竞争维度', sbux: 'Starbucks', dk: "Dunkin'", db: 'Dutch Bros', brew: '7 Brew', bs: 'Blank St.', lk: 'Luckin' },
    { dim: '美国门店', sbux: '~16,900', dk: '~13,700', db: '~1,136', brew: '600+', bs: '~95', lk: '10' },
    { dim: '客单价', sbux: '$9.34', dk: '$4.68', db: '$8.44', brew: '~$5', bs: '~$4.50', lk: '$2-3' },
    { dim: '核心格式', sbux: '咖啡厅+DT', dk: 'NextGen DT', db: '纯DT', brew: '纯DT', bs: '微型店', lk: '步行式' },
    { dim: '功能性', sbux: '蛋白RTD+能量', dk: '蛋白+能量饮', db: '有限', brew: 'RTD', bs: '无', lk: '待开发' },
    { dim: '数字化', sbux: 'AI驱动', dk: '中等', db: '73%会员', brew: '低', bs: '中等', lk: 'APP领先' },
    { dim: '威胁级别', sbux: '★★★★★', dk: '★★★★', db: '★★★', brew: '★★★', bs: '★★', lk: '—' },
  ],
  swot: {
    str: ['极致价格($2-3 vs $4-7)', 'APP 99%+移动(中国验证)', 'Blue Bottle双品牌(3/4交割)', '亚洲风味供应链', '全球31048家规模', '$5万/店93%存活模式', 'SBUX关627店=窗口', 'Z世代对亚洲品牌好奇'],
    chg: ['美国仅10店', '步行vs得来速59%主流', '10%关税+中国杯35-41.5%', '品牌知名度低(非华人)', '蜜雪$1.19+库迪$0.99竞争', 'SBUX复苏(Q1+4%)', '劳动力高(NYC $17+)', 'DK已成NYC第一'],
  },
  actions: [
    { id: 1, t: '建立功能性咖啡产品矩阵', tl: 'Q3 2026启动', p: '极高', items: ['蛋白质系列：蛋白质生椰拿铁(15-20g)，$3.49-3.99', '能量系列：+$0.30-0.50升级「能量加强」(100-150mg+B族)', '肠道健康系列：益生元纤维可选+$0.30，从冷萃开始'] },
    { id: 2, t: '开发抹茶产品线', tl: 'Q3 2026', p: '高', items: ['基础：纯抹茶拿铁($2.50-3.00)', '融合：抹茶生椰/草莓/桂花($3.00-3.50)', '功能：+蛋白/胶原蛋白($3.99)'] },
    { id: 3, t: 'Blue Bottle双品牌+RTD', tl: '持续', p: '极高', items: ['品牌互补：Luckin平价/BB高端', 'RTD：BB品牌推高端RTD进$54-83亿市场', '供应链协同：共享采购烘焙物流'] },
    { id: 4, t: '社交媒体营销体系', tl: '立即', p: '高', items: ['TikTok：「瑞幸隐藏菜单」挑战+Cloud Coffee内容', '微网红：NYC/LA 1-10万(CPM$119,ROI $5.78/$1)', '月度预算$50-100K'] },
    { id: 5, t: '优化门店格式+SBUX空白填充', tl: '中期', p: '中', items: ['城市核心：步行350sqft(填SBUX取餐店空白,参考Blank St+中国93%)', '郊区：评估DT(7Brew AUV$204万,$4604/sqft)', '选址：接入Placer.ai($200-500/月)'] },
  ],
  timeline: [
    { d: '4月下旬', evs: ['DK 4/29 Dirty Soda+OREO+Cherry效果', 'SBUX Energy Refreshers首月反馈'] },
    { d: '5月', evs: ['SBUX FQ2财报(关店+利润率)', '咖啡价格走势', 'KDP-JDE整合'] },
    { d: '6月', evs: ['Blank Street LA开业', '夏季菜单', '霸王茶姬扩张'] },
    { d: '持续', evs: ['10%关税影响', 'SBUX关店地图(填空)', '库迪/蜜雪进展'] },
  ],
  monitor: [
    { target: 'Starbucks', focus: '关627店地图+转型效果+新原型+Rewards影响', level: '★★★★★' },
    { target: '7 Brew', focus: 'DT扩张+RTD+大学校园(AUV$204万)', level: '★★★' },
    { target: '库迪咖啡', focus: '品质升级+美国新店(前瑞幸高管)', level: '★★★★' },
    { target: '蜜雪冰城', focus: '超低价冲击+美国新店速度', level: '★★★' },
    { target: '霸王茶姬', focus: 'IPO后扩张+北美CCO动向', level: '★★★' },
  ],
};
