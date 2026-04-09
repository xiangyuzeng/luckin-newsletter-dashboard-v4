// Luckin Newsletter Dashboard Data v5 — Fresh Research Apr 2026
// NO 瑞幸财务 tab — product/market focused
// BI-WEEKLY: Update META, KEY_METRICS, NEW_PRODUCTS, TIMELINE

export const META = {
  title: 'Luckin 美国饮品市场 Newsletter',
  date: '2026年4月8日', issue: '第八期', docId: 'LCNA-PROD-NL-2026-008',
  team: '瑞幸美国产品组', period: '2026年3月 — 4月初',
  theme: '蛋白+能量+益生元三大功能同时爆发 × 冷泡沫成产品创新平台 × 市场格局加速碎片化',
};

export const EXEC_SIGNALS = [
  { title: '三大功能架构同时爆发', detail: 'Starbucks推出Energy Refreshers永久平台+22g蛋白RTD，Dunkin发布Zero能量饮+蛋白奶平台，PepsiCo CEO宣称「纤维将是下一个蛋白质」——功能化不可逆转。', source: 'Starbucks/Dunkin官方, CNBC' },
  { title: '冷泡沫+能量成为产品创新核心平台', detail: '冷泡沫正在取代糖浆成为主要客制化载体（SBUX/DK本季各推4+种风味泡沫）。能量升级成为永久菜单架构——每家主流咖啡链现在直接与Monster和Celsius竞争。', source: 'Starbucks IR, Dunkin Newsroom' },
  { title: '市场格局加速碎片化=瑞幸窗口', detail: 'SBUX关627店+DK成NYC第一+Dutch Bros AUV$210万超SBUX+蜜雪冰城$1.19入场+10%通用关税。双巨头份额5年降8ppt(85.9%→77.9%)，中型连锁+6.8ppt。', source: 'Placer.ai, SBUX 10-K, Reuters' },
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
  { label: '每日咖啡饮用率', value: '66%', sub: '美国成年人(20年新高)', trend: 'up', delta: '精品渗透46%', src: 'NCA 2025' },
  { label: '冷咖啡消费占比', value: '31%', sub: '所有咖啡消费', trend: 'up', delta: '+23% YoY', src: 'NCA' },
  { label: '得来速购买占比', value: '59%', sub: '外出咖啡(历史新高)', trend: 'up', delta: 'APP下单36%(+6%)', src: 'NCA' },
  { label: '阿拉比卡期货', value: '$2.90', sub: '/磅(4月)', trend: 'down', delta: '从$4.41跌34%', src: 'Trading Econ' },
  { label: '功能饮品市场', value: '$518亿', sub: '2025年', trend: 'up', delta: 'CAGR 6.68%', src: 'Precedence' },
  { label: 'SBUX关闭门店', value: '627家', sub: 'FY25北美', trend: 'down', delta: '+80-90取餐店', src: 'SBUX 10-K' },
  { label: '双巨头份额', value: '77.9%', sub: 'SBUX+DK', trend: 'down', delta: '5年降8ppt', src: 'Placer.ai' },
  { label: '10%通用关税', value: '4月5日', sub: '所有进口含咖啡', trend: 'down', delta: '越南46%', src: 'White House' },
];

export const DASHBOARD_ROWS = [
  { cat: '市场', m: '咖啡店行业', d: '$3,430亿/年', c: '66%日饮率(20年高)', impact: 'pos', s: 'NCA/IBISWorld' },
  { cat: '市场', m: '功能饮品', d: '$518亿(2025)', c: 'CAGR 6.68%→$990亿', impact: 'pos', s: 'Precedence' },
  { cat: '市场', m: 'RTD咖啡', d: '$54-83亿', c: 'CAGR 5%+', impact: 'pos', s: 'Mordor' },
  { cat: '市场', m: '益生元汽水', d: '~$4.4亿(2024)', c: '+301.5%(2023),→$20亿(2029)', impact: 'pos', s: 'Coca-Cola预测' },
  { cat: '消费者', m: '冷咖啡占比', d: '31%消费量', c: '+23% YoY, 冷萃+50%', impact: 'pos', s: 'NCA' },
  { cat: '消费者', m: 'DT购买占比', d: '59%(历史新高)', c: 'APP下单36%(+6%)', impact: 'pos', s: 'NCA' },
  { cat: '消费者', m: 'Z世代功能饮品', d: '80%至少每两周', c: '72%每月尝新', impact: 'pos', s: 'EY' },
  { cat: '趋势', m: '蛋白咖啡搜索', d: '+30.9% YoY', c: '80%美国人优先蛋白', impact: 'pos', s: 'Spate/IFIC' },
  { cat: '趋势', m: '抹茶菜单', d: '+30.2% YoY', c: '社交+107%,Yelp #1', impact: 'pos', s: 'Tastewise' },
  { cat: '趋势', m: '爆炸珠市场', d: '$37.7亿(全球)', c: 'CAGR 11.1%', impact: 'pos', s: 'BRI' },
  { cat: '供应链', m: '阿拉比卡', d: '$2.88-2.93/磅', c: '从$4.41跌34%', impact: 'pos', s: 'Trading Econ' },
  { cat: '供应链', m: '10%通用关税', d: '4月5日生效', c: '越南46%,中国杯35-41.5%', impact: 'neg', s: 'White House' },
  { cat: '竞争', m: 'SBUX Q1 FY26', d: '+4%同店/+3%交易', c: '但关627店,利润率11.9%', impact: 'neg', s: 'SBUX Q1' },
  { cat: '竞争', m: 'DK成NYC第一', d: '13,700家美国', c: 'Inspire探索$200亿IPO', impact: 'neg', s: 'Tracxn' },
  { cat: '竞争', m: 'Dutch Bros AUV', d: '$210万(超SBUX)', c: '$16.4亿营收(+28%)', impact: 'neg', s: 'BROS 10-K' },
  { cat: '竞争', m: '7 Brew爆发', d: '600+店(38州)', c: '系统销售865%增长', impact: 'neg', s: 'Franchise Times' },
  { cat: '竞争', m: '中国品牌进入', d: '蜜雪50000+/霸王6440+', c: '蜜雪$1.19冲击', impact: 'neg', s: 'NRN/KrASIA' },
  { cat: '并购', m: 'KDP+JDE $180亿', d: '4月初交割', c: '全球最大纯咖啡公司', impact: 'neg', s: 'SEC/Bev Daily' },
  { cat: '并购', m: 'Luckin收购BB', d: '$4亿(3月4日)', c: '独有双品牌优势', impact: 'pos', s: 'Sprudge' },
];

export const PRICING = [
  { brand: 'Blue Bottle', latte: 7.50, color: '#6366F1', note: '精品手冲' },
  { brand: 'Starbucks', latte: 5.13, color: '#00704A', note: '利润率降至11.9%' },
  { brand: 'Dutch Bros', latte: 4.88, color: '#1E40AF', note: 'AUV$210万超SBUX' },
  { brand: 'Blank St.', latte: 4.35, color: '#111827', note: '估值$5→10亿' },
  { brand: "Dunkin'", latte: 4.44, color: '#FF6600', note: 'NYC第一大咖啡链' },
  { brand: 'Luckin', latte: 2.50, color: '#0365C0', note: '$0.99新用户' },
  { brand: "McDonald's", latte: 1.00, color: '#FFC72C', note: '任意杯$1' },
];

export const COMPETITORS = [
  { n: 'Starbucks', s: '16,911', t: '$9.34', f: '咖啡厅+DT', fn: '蛋白RTD(22g)+Energy Refreshers(125mg)', dg: '35.5M会员(~60%收入),Deep Brew AI', th: 5, move: 'Q1$99亿(+6%),同店+4%但利润率11.9%.关627店+80-90取餐.翻新1000店+25K座.Rewards三级改版引反弹.中国JV Boyu Capital' },
  { n: "Dunkin'", s: '~13,700', t: '$4.68', f: 'NextGen DT', fn: '蛋白奶(15g)+Zero能量(145mg)', dg: 'Tango 30秒预测,DK Rewards', th: 4, move: 'NYC第一.4/29 OREO全联名+Dirty Soda+Cherry Daydream.Sabrina 127亿曝光.Inspire探索$200亿IPO' },
  { n: 'Dutch Bros', s: '~1,136', t: '$8.44', f: 'DT+Walk-thru', fn: 'Blue Rebel能量(24%销售)', dg: '1500万会员,73%交易', th: 3, move: '$16.4亿营收(+28%),AUV$210万.USC Walk-thru=系统最佳.投资$170→$130万.收购Clutch 20店.食物300店推全国' },
  { n: '7 Brew', s: '600+(38州)', t: '~$5', f: '纯DT模块(500-700sqft)', fn: '首款RTD', dg: '低', th: 3, move: '系统销售$52M→$502M(865%).AUV$204万/$250万(公司).RTD进Walmart.大学校园店.#1 Fast&Serious' },
  { n: 'Blank St.', s: '~90-97', t: '~$4.50', f: '微型→大店转型', fn: '抹茶核心', dg: '中等', th: 2, move: '$5亿估值,融$1亿+目标$10亿.LA Beverly Hills 6月.费城Penn夏季.品牌化Coffee&Matcha Shop' },
  { n: 'Luckin', s: '10美/31048全球', t: '$2-3', f: '步行+APP', fn: '待开发', dg: '99%+移动(中国)', th: 0, move: 'BB$4亿收购(3/4交割).中国:$5万/店,93%存活,RF选址90%准确.FY25营收RMB493亿(+43%)' },
];

export const CHINESE_BRANDS = [
  { n: '喜茶', st: '26-35', p: '$6-9', risk: '高', rc: '#D97706', d: '时代广场TEALAB开业日3500+杯,持续2000+/日', k: 'NYC~15+湾区~7+LA~3' },
  { n: '霸王茶姬', st: '9', p: '$5-7', risk: '高', rc: '#D97706', d: '2024营收RMB124亿(+167%),利润RMB25.2亿(+213%)', k: 'IPO$4.11亿,聘Emily Chang北美CCO' },
  { n: '蜜雪冰城', st: '2+', p: '$1.19-3.49', risk: '中', rc: '#3B82F6', d: '2025.12.19好莱坞首店+曼哈顿,排队绕街区', k: '50000+全球最大餐饮,$1.19冲击' },
  { n: '库迪咖啡', st: '4+', p: '$0.99-2.99', risk: '极高', rc: '#DC2626', d: '前瑞幸高管,18000+店33国,$0.99入门咖啡', k: '最懂瑞幸模式的竞争对手' },
];

export const STORE_ECON = [
  { c: 'Starbucks', s: '16,911', rev: '181', inv: '高', fmt: '70%DT+咖啡厅', gr: 'FY25关627家', note: '利润率11.9%.翻新1000店.新店成本降30%.Rewards改版反弹' },
  { c: 'Dutch Bros', s: '1,136', rev: '210', inv: '$130万(从$170万)', fmt: 'DT+Walk-thru(~900sqft)', gr: '+181/年', note: 'USC Walk-thru=系统最佳.手机位置选址.食物推全国.目标7000店' },
  { c: '7 Brew', s: '600+', rev: '204/250(公司)', inv: '$60-150万', fmt: '纯DT模块(500-700sqft)', gr: '2年翻倍', note: '系统销售865%增长.RTD进Walmart.$4604+/sqft.大学校园店' },
  { c: "Scooter's", s: '900+', rev: '88/127(前25%)', inv: '$79-115万', fmt: 'DT+窗口(664sqft)', gr: '+100/年', note: '利润率14.8%/20.5%(前25%).6个配送中心.目标1000店' },
  { c: 'Blank St.', s: '90-97', rev: '未披露', inv: '<传统1/4', fmt: '350sqft→1300sqft转型', gr: '进LA/费城', note: '$5亿估值→$10亿.14家1月盈利.成本低20%.品牌化Matcha Shop' },
  { c: '瑞幸(中国)', s: '31,048', rev: '未披露', inv: '~$5万(SBUX 1/15)', fmt: '取餐20-60sqm(99.1%)', gr: '+8708/年', note: '200-250单盈亏.93%存活.外卖验证→开店.RF选址90%准确' },
];

export const NEW_PRODUCTS = [
  { b: 'Starbucks', d: '3月3日', items: ['紫薯椰子玛奇朵(ube)', '烤椰子奶油冷萃', '薰衣草Chai(4款回归)', 'Poppi益生元汽水入店'], tag: '亚洲风味+益生元', c: '\u{1F7E2}', insight: '首次将亚洲风味(ube)作为季节主题而非边缘限定' },
  { b: 'Starbucks', d: '4月7日', items: ['Energy Refreshers永久平台(+$0.80/125mg)', '芒果冷泡沫+芒果糖浆(永久)', '紫薯椰子Shaken Espresso'], tag: '能量+芒果', c: '\u{1F7E2}', insight: '能量+芒果均成永久菜单——战略级品类投入' },
  { b: 'Starbucks', d: '3月23日', items: ['Coffee & Protein RTD(22g蛋白+5g纤维/$3.99)', 'Khloud/Kardashian 47g蛋白联名'], tag: 'RTD蛋白', c: '\u{1F7E2}', insight: 'SBUX正式进入$54-83亿RTD蛋白咖啡市场' },
  { b: "Dunkin'", d: '1月7日', items: ['蛋白奶平台(15g/杯)', 'Megan Thee Stallion联名(限量杯秒售罄)'], tag: '蛋白质', c: '\u{1F7E0}', insight: '名人+功能性的成功模板，驱动品类认知' },
  { b: "Dunkin'", d: '3月4日', items: ['Zero能量饮(6味/145mg/零糖)', '香蕉系列8款(Cloud Latte/Matcha等)'], tag: '能量+香蕉', c: '\u{1F7E0}', insight: '全面进入能量赛道，香蕉成春季突破风味' },
  { b: "Dunkin'", d: '4月29日', items: ['OREO全联名(Cloud/Coolatta/Matcha)', 'Dirty Soda(百事+咖啡奶+冷泡沫)', 'Cherry Daydream(黑樱桃系列)', 'Arctic Cherry能量饮'], tag: 'OREO+Dirty Soda', c: '\u{1F7E0}', insight: 'Dirty Soda=大型连锁首创汽水咖啡混合新品类' },
  { b: 'Dutch Bros', d: '1-3月', items: ['棕色黄油巧克力脆片拿铁', '芒果爆炸珠(boba)', '酸糖棒果汁', '水果潘趣+酸candy straw'], tag: '质感+boba', c: '\u{1F535}', insight: 'Blue Rebel能量占24%销售，boba质感创新引领体验' },
  { b: '7 Brew', d: '3月14日', items: ['RTD 3口味($2.98/罐)', 'Walmart Arkansas首发', '真奶油+100%Arabica'], tag: 'RTD进入', c: '\u{1F7E4}', insight: '系统销售865%增长后首次进入$54-83亿RTD市场' },
  { b: 'Tim Hortons', d: '1月/4月', items: ['蛋白拿铁(11-23g)', '蛋白Quenchers(14g/4月2日)', 'TimBoost能量饮'], tag: '蛋白+能量', c: '\u{26AA}', insight: '又一连锁同时进入蛋白+能量双品类' },
  { b: 'Panera', d: '3月11日', items: ['Energy Refreshers(替代争议Charged Lemonade)', 'Frescas果汁系列'], tag: '能量重启', c: '\u{26AA}', insight: '停售争议产品后以新能量饮重新入场' },
];

export const INDUSTRY_NEWS = [
  { cat: '供应链', t: '阿拉比卡从$4.41跌至$2.90(-34%)', d: '巴西2026/27预计创纪录66-76百万袋(+17-21%).StoneX预测盈余1000万袋.零售价滞后:$9.37/磅(+33% YoY).', impact: 'pos', s: 'Trading Economics, Rabobank' },
  { cat: '关税', t: '4月5日起10%通用关税+越南46%', d: '所有进口含咖啡.越南46%威胁Robusta供应链.中国杯/包装35-41.5%.纽约联储:94%关税成本由美国企业/消费者承担.', impact: 'neg', s: 'White House, NY Fed' },
  { cat: '竞争', t: 'SBUX关627店+DK成NYC第一', d: 'FY25关627家北美(90%+)+80-90纯取餐店.DK超越SBUX成NYC最大.SBUX投$6亿薪酬,Rewards改版引反弹.', impact: 'pos', s: 'SBUX 10-K, QSR' },
  { cat: '并购', t: 'KDP+JDE $180亿(4月交割)', d: '全球最大纯咖啡公司($160亿咖啡年销售).Keurig/Peets/Jacobs/LOR.年底拆分饮料+咖啡两公司.Royal Cup收购Farmer Brothers.', impact: 'neg', s: 'SEC, Bev Daily' },
  { cat: '并购', t: 'Blue Bottle $4亿(3月4日)', d: 'Luckin收购BB,Nestle原$7亿.创建独有双品牌.BB保留grocery/RTD portfolio.', impact: 'pos', s: 'Sprudge, World Coffee Portal' },
  { cat: '功能', t: 'PepsiCo $19.5亿收购Poppi+推Pepsi益生元可乐', d: '功能饮品史上最大退出.Pepsi Prebiotic Cola(3g纤维/30卡).Coca-Cola反击Simply Pop(6g纤维/$2.49).CEO称纤维=下一个蛋白质.', impact: 'pos', s: 'CNBC, Food Dive' },
  { cat: '劳动力', t: '22州涨最低工资', d: 'DC $17.95,加州$16.90,NYC $17.SBUX门店运营费用升至营收45.9%(从42.3%).', impact: 'neg', s: 'NELP, SBUX Q1' },
  { cat: '可持续', t: '燕麦奶33%份额,SBUX取消附加费', d: '51%偏好植物奶.燕麦奶$8.6亿.SBUX取消非乳附加费(约50%定制客户降价~10%).', impact: 'pos', s: 'Mordor Intel' },
];

export const DIGITAL_DATA = {
  chains: [
    { n: 'Starbucks', members: '35.5M', mobile: '30%+', loyalty: '~60%收入($130亿+)', ai: 'Deep Brew AI全栈', hl: 'Rewards三级改版引反弹.聘时尚/美妆营销总监(前elf).雇2名全职TikTok内容创作者全球咖啡之旅' },
    { n: "Dunkin'", members: 'DK Rewards', mobile: '25-30%', loyalty: '~60%', ai: 'Tango Analytics', hl: 'Sabrina 127亿曝光/3240万IG.Affleck第4次超级碗.Megan蛋白限量杯秒售罄' },
    { n: 'Dutch Bros', members: '1500万', mobile: '11%', loyalty: '73%交易', ai: '手机位置选址', hl: '会员GPS驱动分层选址.食物推全国300→全部.Blue Rebel能量24%销售' },
    { n: '瑞幸(中国)', members: '9840万MAU', mobile: '99%+', loyalty: '核心', ai: 'APP+RF/XGBoost', hl: '外卖验证→开店.选址90%准确.99%取餐店.中国模式待复制美国' },
  ],
  social: {
    disc: [{ s: '75%', l: 'Z世代社交发现品牌' }, { s: '64%', l: 'TikTok搜索产品' }, { s: '150%', l: 'Z世代咖啡社交对话增长' }],
    roi: { mkt: '$405亿(2026)', per$: '$5.78', cpm: '$119', eng: '6.15-6.76%' },
    tiktok: ['Cloud Coffee(椰子水+浓缩)', '紫薯拿铁(ube)', '开心果咖啡(迪拜巧克力延伸)', '蘑菇/适应原咖啡(菜单+4.2x)', '冰咖啡桶(32oz透明桶病毒式传播)'],
  },
};

export const ACTIONS = [
  { id: 1, t: '功能性咖啡产品矩阵', tl: 'Q3 2026', p: '极高', pc: '#DC2626', why: '$518亿市场.蛋白搜索+30.9%.80%美国人优先蛋白.SBUX/DK/Tim Hortons/Panera全部同时发力.',
    items: [{ a: '蛋白生椰拿铁(15-20g)', pr: '$3.49-3.99', bm: 'SBUX RTD 22g, DK 15g, Tim 23g' }, { a: '能量加强选项(任意饮品)', pr: '+$0.30-0.50', bm: 'SBUX +$0.80, DK Zero独立$2.99' }, { a: '益生元纤维可选', pr: '+$0.30', bm: 'PepsiCo CEO:纤维=下一个蛋白质' }] },
  { id: 2, t: '冷泡沫+抹茶双平台', tl: 'Q3 2026', p: '高', pc: '#F59E0B', why: '冷泡沫取代糖浆成客制化核心.抹茶菜单+30.2%,Yelp #1.Blank Street品牌化Coffee&Matcha.',
    items: [{ a: '4+风味冷泡沫平台(生椰/桂花/抹茶/芒果)', pr: '+$0.50-0.80', bm: 'SBUX/DK各推4+种泡沫' }, { a: '抹茶三档:纯$2.5/融合$3/功能$3.99', pr: '$2.50-3.99', bm: 'SBUX $5+' }, { a: '爆炸珠/质感升级($37.7亿boba市场)', pr: '+$0.75-1.25', bm: 'Dutch Bros已推芒果boba' }] },
  { id: 3, t: 'Blue Bottle双品牌+RTD', tl: '持续', p: '极高', pc: '#DC2626', why: '$4亿收购3/4交割.RTD $54-83亿(SBUX占39%).无中国品牌RTD.',
    items: [{ a: 'Luckin平价/BB高端互补', pr: '---', bm: '全球独有双品牌' }, { a: 'BB品牌RTD(蛋白+冷萃)', pr: '$4-5/罐', bm: 'SBUX RTD 22g/$3.99, 7Brew$2.98' }, { a: '供应链协同+BB美国门店网络', pr: '成本优化', bm: '规模效应' }] },
  { id: 4, t: '社交媒体营销体系', tl: '立即', p: '高', pc: '#F59E0B', why: '75% Z世代社交发现.ROI $5.78/$1.DK Sabrina案例127亿曝光.',
    items: [{ a: 'TikTok隐藏菜单挑战+Cloud Coffee内容', pr: '---', bm: '64% Z世代TikTok搜索' }, { a: '微网红NYC/LA 1-10万', pr: 'CPM$119', bm: 'SBUX雇2名全职TikTok创作者' }, { a: '月度$50-100K预算', pr: '$50-100K', bm: 'DK Sabrina:127亿曝光' }] },
  { id: 5, t: '门店格式+SBUX空白填充', tl: '中期', p: '中', pc: '#3B82F6', why: 'SBUX关627店+80-90取餐=窗口.Dutch Bros Walk-thru验证.中国$5万/店93%存活.',
    items: [{ a: '城市:步行350sqft(填SBUX取餐店空白)', pr: '~$5万', bm: 'BS 1月盈利,中国93%,DutchBros Walk-thru最佳' }, { a: '郊区:评估DT窗口', pr: '$60-150万', bm: '7Brew AUV$204万, $4604/sqft' }, { a: 'Placer.ai移动数据选址', pr: '$200-500/月', bm: 'Dutch Bros/Tango已用' }] },
];

export const TIMELINE = [
  { d: '4月下旬', evs: ['DK 4/29 OREO+Dirty Soda+Cherry', 'SBUX Energy Refreshers首月数据', 'KDP-JDE整合启动'] },
  { d: '5月', evs: ['SBUX FQ2财报(关店+利润率趋势)', '咖啡商品价格(巴西产季)', 'Inspire/DK IPO进展'] },
  { d: '6月', evs: ['Blank Street LA Beverly Hills开业', '各品牌夏季菜单', '霸王茶姬美国扩张(IPO后)'] },
  { d: '持续', evs: ['10%关税影响评估', 'SBUX关店地图(填空机会)', '库迪/蜜雪美国进展'] },
];

export const LUCKIN_SWOT = {
  str: ['极致价格($2-3 vs $4-7)', 'APP 99%+移动下单(中国验证)', 'Blue Bottle双品牌(3/4交割)', '亚洲风味供应链(ube/椰子/桂花)', '全球31048家规模效应', '$5万/店93%存活中国模式', 'SBUX关627店+80-90取餐=窗口', 'Z世代对亚洲品牌天然好奇'],
  chg: ['美国仅10店,规模极有限', '步行式vs得来速59%主流', '10%通用关税+中国杯35-41.5%', '品牌知名度低(非华人市场)', '蜜雪$1.19+库迪$0.99直接竞争', 'SBUX转型复苏(Q1+4%)', '劳动力高(NYC $17+,SBUX 45.9%)', 'DK已成NYC第一,份额压力'],
};

export const SOURCES = [
  'NCA 2025', 'Starbucks 10-K/IR/Q1 FY26', "Dunkin' Newsroom/Inspire",
  'Dutch Bros 10-K', '7 Brew/Business Wire', 'Blank Street/FT/Consumer Edge',
  'Placer.ai', 'IBISWorld', 'Mordor Intelligence', 'Precedence Research',
  'Tastewise', 'Spate', 'Innova Market Insights', 'Trading Economics',
  'SEC EDGAR', 'Bloomberg', 'Reuters', 'CNBC', 'Food Dive',
  'QSR Magazine', 'Franchise Times', 'KrASIA', 'Semafor', 'Sprudge',
  'White House (tariff orders)', 'NY Fed', 'NELP (min wage)',
];
