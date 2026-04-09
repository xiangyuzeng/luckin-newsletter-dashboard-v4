// Luckin Newsletter Dashboard Data v4
// Integrated: 20-F financials + Competitive Site Selection Addendum

export const META = {
  title: 'Luckin 美国饮品市场 Newsletter',
  date: '2026年4月8日', issue: '第八期', docId: 'LCNA-PROD-NL-2026-008',
  team: '瑞幸美国产品组', period: '2026年3月 — 4月初',
  theme: '功能化升级 × 能量品类融合 × 中国茶饮品牌集体进入',
};

export const EXEC_SIGNALS = [
  { title: '功能性咖啡已成行业标配', detail: 'Starbucks和Dunkin同时推出蛋白产品线和能量饮品，咖啡向多功能健康平台转变不可逆转。', source: 'Starbucks/Dunkin官方' },
  { title: '中国品牌进入+SBUX关627店=窗口期', detail: '喜茶1年2到35家、霸王茶姬IPO $4.11亿。SBUX FY2025关闭627家北美门店+80-90纯取餐店，为瑞幸创造填补空白的窗口。', source: 'Bloomberg, SBUX 10-K' },
  { title: '强劲财务+Blue Bottle支撑美国扩张', detail: '瑞幸FY25营收RMB 493亿(+43%)，FCF RMB 34.7亿，现金+投资RMB 89.7亿。以不到$4亿收购Blue Bottle打造双品牌。', source: 'Luckin 20-F, Semafor' },
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
  { label: '瑞幸FY25营收', value: 'RMB493亿', sub: '+43% YoY', trend: 'up', delta: 'FCF RMB34.7亿', src: '20-F' },
  { label: '每日咖啡饮用率', value: '66%', sub: '美国成年人', trend: 'up', delta: '+37%(20年)', src: 'NCA' },
  { label: '冷饮销售占比', value: '75%', sub: 'SBUX全渠道', trend: 'up', delta: '2013仅37%', src: 'SBUX IR' },
  { label: '阿拉比卡期货', value: '$3.10', sub: '/磅(4月)', trend: 'down', delta: '从$4.40跌25%', src: 'Barchart' },
  { label: '功能饮品市场', value: '$518亿', sub: '2025年', trend: 'up', delta: 'CAGR 6.68%', src: 'Precedence' },
  { label: 'SBUX关闭门店', value: '627家', sub: 'FY25北美', trend: 'down', delta: '+80-90取餐店', src: 'SBUX 10-K' },
  { label: '双巨头份额', value: '77.9%', sub: 'SBUX+DK', trend: 'down', delta: '从85.9%降8ppt', src: 'Placer.ai' },
  { label: '瑞幸市值', value: '~$95亿', sub: 'P/S 1.3x', trend: 'up', delta: '目标$44-52(+37-63%)', src: 'OTC/分析师' },
];

export const LUCKIN_PL = [
  { year: 'FY2023', rev: 24.9, opIncome: 3.0, netIncome: 2.84, opMargin: 12.1, netMargin: 11.4, delivery: 2.0, delivPct: 8.1 },
  { year: 'FY2024', rev: 34.5, opIncome: 3.6, netIncome: 3.0, opMargin: 10.4, netMargin: 8.6, delivery: 2.8, delivPct: 8.2 },
  { year: 'FY2025', rev: 49.3, opIncome: 5.1, netIncome: 3.6, opMargin: 10.3, netMargin: 7.3, delivery: 6.9, delivPct: 13.9 },
];

export const LUCKIN_CF = [
  { year: 'FY2023', ocf: 2.90, capex: 2.75, fcf: 0.15 },
  { year: 'FY2024', ocf: 4.23, capex: 2.30, fcf: 1.93 },
  { year: 'FY2025', ocf: 6.09, capex: 2.62, fcf: 3.47 },
];

export const LUCKIN_OPS = {
  stores: { total: 31048, selfOp: 20234, partner: 10814, pickupPct: 99.1, cn: 30888, sg: 81, my: 70, us: 9 },
  sss: { fy25: '+7.5%', fy24: '-16.7%', q4: '+1.2%' },
  delivery: { fy23: 19.0, fy24: 17.1, fy25: 34.7 },
  mau: '9,840万', cumUsers: '4.512亿', gmv: 'RMB566亿', items: '44亿件', avgItem: 'RMB12.9',
  intlRev: 'RMB2.845亿', intlLoss: 'RMB1.371亿',
  val: { mktCap: '~$95亿', evEbit: '~11x', ps: '~1.3x', ads: '$32', target: '$44-52' },
  cnUnit: { inv: '~$5万(SBUX 1/15)', be: '200-250单/天', payback: '12-18月', survival: '93%(从63%)' },
  renov: { fy23: 'RMB20.6万', fy25: 'RMB19.2万' },
};

export const DASHBOARD_ROWS = [
  { cat: '瑞幸', m: 'FY25营收', d: 'RMB493亿(+43%)', c: '3年翻倍', impact: 'pos', s: '20-F' },
  { cat: '瑞幸', m: '运营现金流', d: 'RMB60.9亿', c: 'FCF RMB34.7亿', impact: 'pos', s: '20-F' },
  { cat: '瑞幸', m: '同店增长', d: '+7.5%(FY25)', c: '从FY24的-16.7%大幅改善', impact: 'pos', s: '20-F' },
  { cat: '瑞幸', m: '外卖订单占比', d: '34.7%(FY25)', c: '从17.1%翻倍，费用占比14%', impact: 'neu', s: '20-F' },
  { cat: '瑞幸', m: '海外P&L', d: '收入RMB2.8亿', c: '亏损RMB1.4亿,<1%总收入', impact: 'neg', s: '20-F' },
  { cat: '瑞幸', m: '估值', d: '~$95亿(P/S 1.3x)', c: '分析师目标$44-52(+37-63%)', impact: 'pos', s: 'OTC' },
  { cat: '市场', m: '功能饮品', d: '$518亿(2025)', c: 'CAGR 6.68%', impact: 'pos', s: 'Precedence' },
  { cat: '市场', m: 'RTD咖啡', d: '$54-83亿', c: 'CAGR 5%+', impact: 'pos', s: 'Mordor' },
  { cat: '消费者', m: '每日饮用率', d: '66%', c: '+37%(20年)', impact: 'pos', s: 'NCA' },
  { cat: '消费者', m: '冷饮占比', d: '75%(SBUX)', c: '2013仅37%', impact: 'pos', s: 'SBUX' },
  { cat: '趋势', m: '蛋白咖啡搜索', d: '+30.9%', c: '透明蛋白+54.7%', impact: 'pos', s: 'Spate' },
  { cat: '趋势', m: '抹茶菜单', d: '+30.2%', c: 'Yelp #1趋势', impact: 'pos', s: 'Tastewise' },
  { cat: '供应链', m: '阿拉比卡', d: '$3.10/磅', c: '从$4.40跌25%', impact: 'pos', s: 'Barchart' },
  { cat: '竞争', m: 'SBUX关店', d: '627家(FY25)', c: '+80-90取餐店=填空窗口', impact: 'pos', s: 'SBUX 10-K' },
  { cat: '竞争', m: '双巨头份额', d: '77.9%', c: '从85.9%降', impact: 'pos', s: 'Placer.ai' },
  { cat: '竞争', m: '7Brew增长', d: '+87.3%访问', c: '$238万/店', impact: 'neg', s: 'Placer.ai' },
  { cat: '竞争', m: '中国茶饮', d: '~6,500家美国', c: '喜茶2到35(1年)', impact: 'neg', s: 'China Daily' },
  { cat: '数字', m: 'SBUX会员', d: '35.5M', c: '57%销售,AI卖增15-20%', impact: 'neg', s: 'SBUX Q1' },
];

export const PRICING = [
  { brand: 'Blue Bottle', latte: 7.50, color: '#6366F1', note: '精品手冲' },
  { brand: 'Starbucks', latte: 5.13, color: '#00704A', note: 'FY25冻价' },
  { brand: 'Dutch Bros', latte: 4.88, color: '#1E40AF', note: '24oz大杯' },
  { brand: 'Blank St.', latte: 4.35, color: '#111827', note: '低SBUX 20-30c' },
  { brand: "Dunkin'", latte: 4.44, color: '#FF6600', note: '$2/$3菜单' },
  { brand: 'Luckin', latte: 2.50, color: '#0365C0', note: '$0.99新用户' },
  { brand: "McDonald's", latte: 1.00, color: '#FFC72C', note: '任意杯$1' },
];

export const COMPETITORS = [
  { n: 'Starbucks', s: '~16,900', t: '$9.34', f: '咖啡厅+DT', fn: '蛋白+能量', dg: 'Atlas+Deep Brew,35.5M', th: 5, move: 'Q1同店+4%,FY25关627店+80-90取餐店.新店成本降30%.选址Atlas+RF+LSTM,1mi内竞品蚕食1.2%' },
  { n: "Dunkin'", s: '~10,000', t: '$4.68', f: 'NextGen DT', fn: '蛋白+Zero能量', dg: 'Tango 30秒预测,20-24M', th: 4, move: '能量饮/Dirty Soda.Tango年省5000工时.DT店销售高40%.NextGen超4000家' },
  { n: 'Dutch Bros', s: '~1,136', t: '$8.44', f: 'DT+Walk-thru', fn: '有限', dg: '手机位置,73%会员', th: 3, move: '系统均$210万/店.USC Walk-thru=系统最高业绩.投资$170->$130万.目标2029年2029家' },
  { n: '7 Brew', s: '674+', t: '~$5', f: '纯DT', fn: 'RTD', dg: '低', th: 3, move: '+87.3%访问,$238万/店.RTD进Walmart.$60-150万投资' },
  { n: 'Blank St.', s: '~100', t: '~$4.50', f: '微型转大店', fn: '无', dg: '中等', th: 2, move: '$1亿+融资$10亿+估值.350sqft:14家全1月盈利,成本低20%.进LA费城' },
  { n: 'Luckin', s: '10美/31048全球', t: '$2-3', f: '步行+APP', fn: '待开发', dg: '99%+移动(中国)', th: 0, move: 'BB<$4亿.中国:$5万/店(SBUX 1/15),200-250单盈亏,93%存活,RF/XGBoost选址90%准确' },
];

export const CHINESE_BRANDS = [
  { n: '喜茶', st: 35, p: '$5-8', risk: '高', rc: '#D97706', d: '时代广场日销2000+杯', k: '1年2到35家' },
  { n: '霸王茶姬', st: 9, p: '$5-7', risk: '高', rc: '#D97706', d: 'NASDAQ IPO $4.11亿', k: 'IPO后计划+200家' },
  { n: '蜜雪冰城', st: 2, p: '$1.19-3.49', risk: '中', rc: '#3B82F6', d: '全球45,000+最大餐饮', k: '$1.19冲击' },
  { n: '库迪咖啡', st: 4, p: '$0.99-2.99', risk: '极高', rc: '#DC2626', d: '前瑞幸高管,正转品质', k: '7500+全球' },
];

export const STORE_ECON = [
  { c: 'Starbucks', s: 16900, rev: 181, inv: '高', fmt: '70%DT+咖啡厅(~2000sqft)', gr: 'FY25净关627家', note: '新原型成本降30%,关80-90取餐店.蚕食模型:1mi竞品-1.2%' },
  { c: 'Dutch Bros', s: 1136, rev: 210, inv: '$130万(从$170万降)', fmt: '纯DT+Walk-thru(~900sqft)', gr: '+181/年', note: 'USC Walk-thru=系统最高业绩,验证城市步行.手机位置选址.目标现金回报率40%' },
  { c: '7 Brew', s: 674, rev: 238, inv: '$60-150万', fmt: '纯DT(~500sqft)', gr: '+29/月', note: '5年14到674+.Blackstone支持.2万+风味组合' },
  { c: "Scooter's", s: 850, rev: 85, inv: '$79-115万', fmt: 'DT+窗口(~660sqft)', gr: '+83/年', note: '2025 IPO $12.7亿估值' },
  { c: 'Blank St.', s: 100, rev: null, inv: '<传统1/4', fmt: '350-400sqft微型', gr: '进LA/费城', note: '14家全1月盈利.成本低20%.月租几千vs$1-1.5万' },
  { c: '瑞幸(中国)', s: 31048, rev: null, inv: '~$5万(SBUX 1/15)', fmt: '取餐20-60sqm(99.1%)', gr: '+8708/年', note: '200-250单盈亏.12-18月回本.存活率63%到93%.外卖先验证再开店.RF选址90%准确' },
];

export const NEW_PRODUCTS = [
  { b: 'Starbucks', d: '3月3日', items: ['紫薯椰子玛奇朵', '烤椰子冷萃', '薰衣草Chai', 'Poppi入店'], tag: '亚洲风味', c: '\u{1F7E2}', insight: '首次亚洲风味作季节主题' },
  { b: 'Starbucks', d: '4月7日', items: ['Energy Refreshers(+$0.80)', '芒果抹茶', '紫薯Espresso'], tag: '能量+抹茶', c: '\u{1F7E2}', insight: '能量饮成永久平台' },
  { b: "Dunkin'", d: '1月', items: ['蛋白奶(15g)', 'Megan联名'], tag: '蛋白质', c: '\u{1F7E0}', insight: '名人+功能性模板' },
  { b: "Dunkin'", d: '3月', items: ['Zero能量饮(145mg)', '香蕉9款'], tag: '能量+香蕉', c: '\u{1F7E0}', insight: '全面进入能量赛道' },
  { b: "Dunkin'", d: '4月预告', items: ['Dirty Soda', 'OREO Cloud', '$6套餐'], tag: '跨界', c: '\u{1F7E0}', insight: '首创汽水咖啡混合' },
  { b: 'Dutch Bros', d: '1-3月', items: ['黄油巧克力脆片', '芒果爆炸珠'], tag: '质感', c: '\u{1F535}', insight: '多感官创新' },
  { b: '7 Brew', d: '3月14日', items: ['RTD 3口味$2.98', 'Walmart首发'], tag: 'RTD', c: '\u{1F7E4}', insight: 'DT品牌进RTD市场' },
];

export const INDUSTRY_NEWS = [
  { cat: '供应链', t: '咖啡期货回落25%', d: '$4.40到$3.10.巴西+10-17%,盈余1000万袋.零售$9.46/磅仍高.', impact: 'pos', s: 'Barchart,Rabobank' },
  { cat: '竞争', t: 'SBUX FY25关627家北美门店', d: '90%+在北美.另关80-90纯取餐店,回归咖啡馆.为瑞幸创造填空窗口.', impact: 'pos', s: 'SBUX 10-K,QSR' },
  { cat: '并购', t: 'KDP+JDE Peet\'s=$160亿巨头', d: 'Keurig/Peet\'s/L\'OR.拆分饮料+咖啡两公司.', impact: 'neg', s: 'SEC 8-K' },
  { cat: '并购', t: '瑞幸<$4亿收购Blue Bottle', d: 'Nestle原$7亿.Centurium执行.独有双品牌.', impact: 'pos', s: 'Semafor' },
  { cat: '关税', t: '中国包装关税35-41.5%', d: 'Section 301+122.2月最高法院裁定部分违宪.', impact: 'neg', s: 'KimEcopak' },
  { cat: '监管', t: 'FDA:纯咖啡首次列为「健康」', d: '自动符合新健康标签.', impact: 'pos', s: 'FDA' },
  { cat: '劳动力', t: '19州涨最低工资', d: '加州$20/hr,NYC $17.SBUX $17-18(NYC $22-23).', impact: 'neg', s: 'Restaurant Biz' },
  { cat: '可持续', t: '燕麦奶占非乳33%', d: '51%偏好植物奶.$8.6亿市场.SBUX取消附加费.', impact: 'pos', s: 'Mordor' },
];

export const DIGITAL_DATA = {
  chains: [
    { n: 'Starbucks', members: '35.5M', mobile: '30%+', loyalty: '57%销售', ai: 'Atlas GIS+Deep Brew全栈', hl: 'AI卖增15-20%,DT缩18秒,选址RF+LSTM+Huff蚕食' },
    { n: "Dunkin'", members: '20-24M', mobile: '25-30%', loyalty: '~60%', ai: 'Tango Analytics', hl: '30秒预测(省5000工时),IG 33600+参与/帖' },
    { n: 'Dutch Bros', members: '1500万', mobile: '11%', loyalty: '73%交易', ai: '手机位置分析', hl: '会员GPS选址,分层进入,USC Walk-thru验证' },
    { n: '瑞幸(中国)', members: '9840万MAU', mobile: '99%+', loyalty: '核心', ai: 'APP全链路+RF/XGBoost', hl: '外卖先验证再开店,选址准确率90%,99%取餐店' },
  ],
  social: {
    disc: [{ s: '75%', l: 'Z世代社交发现品牌' }, { s: '64%', l: 'TikTok搜索产品' }, { s: '150%', l: '咖啡社交对话增长' }],
    roi: { mkt: '$405亿', per$: '$5.78', cpm: '$119', eng: '6.15-6.76%' },
  },
};

export const ACTIONS = [
  { id: 1, t: '功能性咖啡产品矩阵', tl: 'Q3 2026', p: '极高', pc: '#DC2626', why: '$518亿市场,蛋白+30.9%.FCF RMB34.7亿提供研发弹药.',
    items: [{ a: '蛋白生椰拿铁(15-20g)', pr: '$3.49-3.99', bm: 'SBUX 22g/$5+' }, { a: '能量加强选项', pr: '+$0.30-0.50', bm: 'SBUX +$0.80' }, { a: '益生元纤维', pr: '+$0.30', bm: 'Poppi 6g' }] },
  { id: 2, t: '抹茶产品线', tl: 'Q3 2026', p: '高', pc: '#F59E0B', why: '菜单+30.2%,Yelp #1.Blank Street品牌化Coffee&Matcha.',
    items: [{ a: '基础抹茶拿铁', pr: '$2.50-3.00', bm: 'SBUX $5+' }, { a: '融合:生椰/草莓/桂花抹茶', pr: '$3.00-3.50', bm: '亚洲差异化' }, { a: '功能:+蛋白/胶原', pr: '$3.99', bm: '交叉创新' }] },
  { id: 3, t: 'Blue Bottle双品牌+RTD', tl: '持续', p: '极高', pc: '#DC2626', why: '<$4亿收购.RTD $54-83亿无中国品牌.',
    items: [{ a: 'Luckin平价/BB高端互补', pr: '---', bm: '全球独有' }, { a: 'BB品牌RTD', pr: '$4-5/罐', bm: 'SBUX占RTD 39%' }, { a: '供应链协同', pr: '成本优化', bm: '规模效应' }] },
  { id: 4, t: '社交媒体营销', tl: '立即', p: '高', pc: '#F59E0B', why: '75% Z世代社交发现.ROI $5.78/$1.',
    items: [{ a: 'TikTok隐藏菜单挑战', pr: '---', bm: '64% TikTok搜索' }, { a: '微网红NYC/LA', pr: 'CPM$119', bm: '6.15%互动' }, { a: '月度$50-100K', pr: '$50-100K', bm: 'DK 127亿曝光' }] },
  { id: 5, t: '门店格式+选址升级', tl: '中期', p: '中', pc: '#3B82F6', why: 'SBUX关627店=窗口.Dutch Bros Walk-thru验证步行.中国$5万/店93%存活.',
    items: [{ a: '城市:步行350sqft(填SBUX空白)', pr: '~$5万', bm: 'BS 1月盈利,中国93%' }, { a: '郊区:评估DT窗口', pr: '$60-150万', bm: '7Brew $238万/年' }, { a: 'Placer.ai移动数据选址', pr: '$200-500/月', bm: 'Dutch Bros已用' }] },
  { id: 6, t: '竞争监控', tl: '持续', p: '高', pc: '#F59E0B', why: 'SBUX关店=窗口,中国品牌进入,市场快变.',
    items: [{ a: 'SBUX关店地图+小型门店', pr: '---', bm: '★★★★★' }, { a: '库迪品质升级+新店', pr: '---', bm: '★★★★前瑞幸' }, { a: '7Brew/Dutch Bros DT', pr: '---', bm: '★★★格式' }] },
];

export const TIMELINE = [
  { d: '4月下旬', evs: ['DK Dirty Soda效果', 'SBUX Energy Refreshers反馈'] },
  { d: '5月', evs: ['SBUX FQ2财报', '咖啡商品价格', 'KDP-JDE整合'] },
  { d: '6月', evs: ['Blank Street LA开业', '夏季菜单', '霸王茶姬扩张'] },
  { d: '持续', evs: ['SBUX关店地图(填空)', '库迪品质', '包装关税'] },
];

export const LUCKIN_SWOT = {
  str: ['极致价格($2-3 vs $4-7)', 'APP 99%+移动下单', 'Blue Bottle双品牌(独有)', 'FCF RMB34.7亿弹药', '全球31048家规模', '$5万/店93%存活模式', '亚洲风味供应链', 'Z世代好奇亚洲品牌'],
  chg: ['美国仅10店(海外亏RMB1.4亿)', '步行式vs得来速主流', '包装关税35-41.5%', '品牌知名度低(非华人)', '库迪/蜜雪直接竞争', 'SBUX转型复苏', '劳动力高(NYC $17-23)', 'DOJ调查+新加坡诉讼未结'],
};

export const SOURCES = [
  'Luckin 20-F (FY2025, Mar 27 2026)', 'Luckin Q4/FY25 Earnings (Feb 26 2026)',
  'Starbucks 10-K/IR/Q1 FY26', "Dunkin' Newsroom/Tango Analytics",
  'Dutch Bros 10-K/IR', 'NCA 2025', 'Placer.ai', 'IBISWorld',
  'Mordor Intelligence', 'Precedence Research', 'Tastewise', 'Spate',
  'Innova Market Insights', 'SEC EDGAR', 'Bloomberg', 'Reuters',
  'Barchart', 'Semafor', 'Food Navigator', 'QSR Magazine',
  'KimEcopak (tariff analysis)', '竞争选址分析附录(Appendix D)',
];
