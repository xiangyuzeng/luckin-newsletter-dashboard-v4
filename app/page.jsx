'use client';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, Legend } from 'recharts';
import { META, EXEC_SIGNALS, MARKET_SHARE, KEY_METRICS, LUCKIN_PL, LUCKIN_CF, LUCKIN_OPS, DASHBOARD_ROWS, PRICING, COMPETITORS, CHINESE_BRANDS, STORE_ECON, NEW_PRODUCTS, INDUSTRY_NEWS, DIGITAL_DATA, ACTIONS, TIMELINE, LUCKIN_SWOT, SOURCES } from './data';

const B='#0365C0',N='#1A365D',T='#00A5A5',G='#059669',R='#DC2626',A='#D97706',t2='#6B7280';
const Card=({children,style})=><div style={{background:'#fff',borderRadius:12,padding:24,boxShadow:'0 1px 3px rgba(0,0,0,0.08)',...style}}>{children}</div>;
const Badge=({type,children})=>{const c=type==='pos'?{b:'#ECFDF5',c:G}:type==='neg'?{b:'#FEF2F2',c:R}:{b:'#F3F4F6',c:t2};return<span style={{display:'inline-block',padding:'2px 8px',borderRadius:99,fontSize:11,fontWeight:600,background:c.b,color:c.c}}>{children}</span>};
const PB=({l})=>{const c=l==='极高'?R:l==='高'?A:'#3B82F6';return<span style={{padding:'2px 10px',borderRadius:99,fontSize:11,fontWeight:700,background:c,color:'#fff'}}>{l}</span>};
const SH=({children,s})=><h3 style={{margin:'0 0 16px',fontSize:16,fontWeight:700,color:N}}>{children}{s&&<span style={{fontSize:10,color:'#94A3B8',marginLeft:6}}>({s})</span>}</h3>;
const Dot=()=><div style={{width:5,height:5,borderRadius:99,background:B,flexShrink:0,marginTop:6}}/>;

const tabs=['编者按','瑞幸财务','数据总览','消费者与定价','品牌与竞争','新品与行业','战略建议'];

export default function Page(){
  const [tab,setTab]=useState(0);
  const [exp,setExp]=useState(null);
  const [dc,setDc]=useState('全部');
  const cats=['全部','瑞幸','市场','消费者','趋势','供应链','竞争','数字'];
  const fRows=dc==='全部'?DASHBOARD_ROWS:DASHBOARD_ROWS.filter(r=>r.cat===dc);
  const plChart=LUCKIN_PL.map(p=>({name:p.year,营收:p.rev,运营利润:p.opIncome,净利润:p.netIncome}));
  const cfChart=LUCKIN_CF.map(c=>({name:c.year,运营现金流:c.ocf,资本支出:c.capex,自由现金流:c.fcf}));
  const delivChart=LUCKIN_PL.map(p=>({name:p.year,外卖费用占比:p.delivPct,运营利润率:p.opMargin,净利润率:p.netMargin}));

  return(
  <div style={{minHeight:'100vh',background:'#F7F8FA',fontFamily:"'Inter','Noto Sans SC',system-ui,sans-serif",color:'#1F2937'}}>
    <header style={{background:`linear-gradient(135deg,${N} 0%,#0C4A6E 100%)`,color:'#fff'}}>
      <div style={{maxWidth:1320,margin:'0 auto',padding:'32px 24px 16px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:12}}>
          <div>
            <div style={{fontSize:11,fontWeight:600,color:'#93C5FD',letterSpacing:1,marginBottom:4}}>{META.docId} · {META.issue} · {META.period}</div>
            <h1 style={{margin:0,fontSize:26,fontWeight:800}}>{META.title}</h1>
            <p style={{margin:'4px 0 0',fontSize:13,color:'#BFDBFE'}}>{META.date} · {META.team}</p>
          </div>
          <div style={{background:'rgba(255,255,255,0.08)',borderRadius:10,padding:'8px 16px',border:'1px solid rgba(255,255,255,0.15)'}}>
            <div style={{fontSize:10,color:'#93C5FD'}}>本期主题</div>
            <div style={{fontSize:12,fontWeight:600}}>{META.theme}</div>
          </div>
        </div>
        <div style={{display:'flex',gap:3,flexWrap:'wrap',marginTop:14}}>
          {tabs.map((t,i)=><button key={i} onClick={()=>setTab(i)} style={{padding:'6px 14px',borderRadius:7,border:'none',cursor:'pointer',fontSize:12,fontWeight:tab===i?700:500,background:tab===i?B:'rgba(255,255,255,0.08)',color:'#fff'}}>{t}</button>)}
        </div>
      </div>
    </header>

    <main style={{maxWidth:1320,margin:'0 auto',padding:'24px 24px 56px'}}>

    {/* === TAB 0: EXEC SUMMARY === */}
    {tab===0&&<>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))',gap:14,marginBottom:20}}>
        {EXEC_SIGNALS.map((s,i)=>(
          <Card key={i} style={{borderLeft:`4px solid ${[B,R,G][i]}`,padding:'18px 20px'}}>
            <div style={{fontSize:14,fontWeight:700,color:N,marginBottom:6}}>{i+1}. {s.title}</div>
            <div style={{fontSize:12,color:'#374151',lineHeight:1.6,marginBottom:6}}>{s.detail}</div>
            <div style={{fontSize:10,color:'#94A3B8'}}>来源: {s.source}</div>
          </Card>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:16}}>
        <Card>
          <SH s="Placer.ai">美国咖啡市场份额变迁</SH>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MARKET_SHARE} margin={{left:10,right:30}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
                <XAxis dataKey="year" style={{fontSize:11}}/>
                <YAxis domain={[0,100]} tickFormatter={v=>v+'%'} style={{fontSize:11}}/>
                <Tooltip formatter={v=>v+'%'}/>
                <Legend wrapperStyle={{fontSize:11}}/>
                <Area type="monotone" dataKey="sbuxDk" name="SBUX+DK" stackId="1" fill="#00704A" stroke="#00704A" fillOpacity={0.7}/>
                <Area type="monotone" dataKey="mid" name="中型连锁" stackId="1" fill={B} stroke={B} fillOpacity={0.7}/>
                <Area type="monotone" dataKey="small" name="小型连锁" stackId="1" fill={T} stroke={T} fillOpacity={0.7}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{background:'#FFFBEB',borderLeft:'3px solid '+A,borderRadius:6,padding:'8px 12px',marginTop:10,fontSize:11}}>
            <b>关键洞察：</b>SBUX+DK份额5年降8ppt(85.9%→77.9%)，中型连锁+6.8ppt。SBUX FY25再关627家——瑞幸进入最佳窗口。
          </div>
        </Card>
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <Card style={{background:'#ECFDF5',border:'1px solid #A7F3D0',flex:1}}>
            <SH style={{color:G}}>核心优势</SH>
            {LUCKIN_SWOT.str.map((s,i)=><div key={i} style={{fontSize:11,padding:'2px 0',display:'flex',gap:6}}><Dot/><span style={{marginTop:1}}>{s}</span></div>)}
          </Card>
          <Card style={{background:'#FEF2F2',border:'1px solid #FECACA',flex:1}}>
            <SH style={{color:R}}>主要挑战</SH>
            {LUCKIN_SWOT.chg.map((s,i)=><div key={i} style={{fontSize:11,padding:'2px 0',display:'flex',gap:6}}><Dot/><span style={{marginTop:1}}>{s}</span></div>)}
          </Card>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(175px,1fr))',gap:10}}>
        {KEY_METRICS.map((m,i)=><Card key={i} style={{padding:'12px 14px'}}><div style={{fontSize:10,color:t2}}>{m.label}</div><div style={{fontSize:24,fontWeight:800,color:m.trend==='up'?G:R,margin:'2px 0'}}>{m.value}</div><div style={{fontSize:9,color:t2}}>{m.sub}</div><div style={{fontSize:9,fontWeight:600,color:m.trend==='up'?G:R}}>{m.delta}</div><div style={{fontSize:8,color:'#CBD5E1'}}>{m.src}</div></Card>)}
      </div>
    </>}

    {/* === TAB 1: LUCKIN FINANCIALS (NEW) === */}
    {tab===1&&<>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
        <Card>
          <SH s="20-F FY2023-2025">损益表趋势 (RMB 十亿)</SH>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={plChart} margin={{left:10,right:10}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
                <XAxis dataKey="name" style={{fontSize:11}}/>
                <YAxis style={{fontSize:11}}/>
                <Tooltip/>
                <Legend wrapperStyle={{fontSize:11}}/>
                <Bar dataKey="营收" fill={B} radius={[4,4,0,0]}/>
                <Bar dataKey="运营利润" fill={G} radius={[4,4,0,0]}/>
                <Bar dataKey="净利润" fill={T} radius={[4,4,0,0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <SH s="20-F FY2023-2025">现金流趋势 (RMB 十亿)</SH>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cfChart} margin={{left:10,right:10}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
                <XAxis dataKey="name" style={{fontSize:11}}/>
                <YAxis style={{fontSize:11}}/>
                <Tooltip/>
                <Legend wrapperStyle={{fontSize:11}}/>
                <Bar dataKey="运营现金流" fill={B} radius={[4,4,0,0]}/>
                <Bar dataKey="资本支出" fill={A} radius={[4,4,0,0]}/>
                <Bar dataKey="自由现金流" fill={G} radius={[4,4,0,0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
        <Card>
          <SH>外卖占比 vs 利润率变化</SH>
          <div style={{overflow:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:12}}>
              <thead><tr style={{background:N,color:'#fff'}}>{['年份','外卖费用占比','运营利润率','净利润率','外卖订单占比'].map(h=><th key={h} style={{padding:'8px 10px',textAlign:'left'}}>{h}</th>)}</tr></thead>
              <tbody>{LUCKIN_PL.map((p,i)=><tr key={i} style={{background:i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
                <td style={{padding:'8px 10px',fontWeight:700}}>{p.year}</td>
                <td style={{padding:'8px 10px',color:R,fontWeight:600}}>{p.delivPct}%</td>
                <td style={{padding:'8px 10px'}}>{p.opMargin}%</td>
                <td style={{padding:'8px 10px'}}>{p.netMargin}%</td>
                <td style={{padding:'8px 10px'}}>{LUCKIN_OPS.delivery['fy'+(23+i)]}%</td>
              </tr>)}</tbody>
            </table>
          </div>
          <div style={{background:'#FEF2F2',borderLeft:'3px solid '+R,borderRadius:6,padding:'8px 12px',marginTop:10,fontSize:11}}>
            <b>关键警示：</b>外卖订单占比从17.1%翻倍至34.7%，外卖费用从RMB 28亿飙升至RMB 69亿(+146%)，是利润率压缩的主因。美国市场需审慎管理外卖比例。
          </div>
        </Card>
        <Card>
          <SH>运营关键指标</SH>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            {[
              {l:'全球门店',v:'31,048',d:'FY25+8,708家'},
              {l:'自营/加盟',v:'20,234/10,814',d:'99.1%取餐店'},
              {l:'月活用户',v:'9,840万',d:'累计4.512亿'},
              {l:'同店增长',v:'+7.5%(FY25)',d:'FY24为-16.7%'},
              {l:'GMV',v:'RMB566亿',d:'44亿件,均RMB12.9/件'},
              {l:'现金+投资',v:'RMB89.7亿',d:'+51% YoY'},
              {l:'海外营收',v:'RMB2.8亿(<1%)',d:'亏损RMB1.4亿'},
              {l:'估值',v:'~$95亿',d:'P/S 1.3x,目标$44-52'},
            ].map((s,i)=><div key={i} style={{background:'#F0F9FF',borderRadius:6,padding:10}}>
              <div style={{fontSize:10,color:t2}}>{s.l}</div>
              <div style={{fontSize:18,fontWeight:800,color:B}}>{s.v}</div>
              <div style={{fontSize:9,color:t2}}>{s.d}</div>
            </div>)}
          </div>
          <div style={{background:'#F0FDF4',borderLeft:'3px solid '+G,borderRadius:6,padding:'8px 12px',marginTop:10,fontSize:11}}>
            <b>中国单店模型(美国参考)：</b>投资~$5万(SBUX 1/15)，200-250单/天盈亏平衡，12-18月回本，存活率从63%(2019)提升至93%(2021)。选址RF/XGBoost准确率90%。
          </div>
        </Card>
      </div>
    </>}

    {/* === TAB 2: DATA DASHBOARD === */}
    {tab===2&&<>
      <Card>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14,flexWrap:'wrap',gap:8}}>
          <SH style={{margin:0}}>完整数据仪表盘 ({fRows.length}项)</SH>
          <div style={{display:'flex',gap:3,flexWrap:'wrap'}}>
            {cats.map(c=><button key={c} onClick={()=>setDc(c)} style={{padding:'3px 10px',borderRadius:5,border:'none',cursor:'pointer',fontSize:11,fontWeight:dc===c?700:500,background:dc===c?B:'#F3F4F6',color:dc===c?'#fff':'#374151'}}>{c}</button>)}
          </div>
        </div>
        <div style={{overflow:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:12}}>
            <thead><tr style={{background:N,color:'#fff'}}>{['分类','指标','数据','变化','影响','来源'].map(h=><th key={h} style={{padding:'8px 10px',textAlign:'left',fontWeight:600}}>{h}</th>)}</tr></thead>
            <tbody>{fRows.map((r,i)=><tr key={i} style={{background:i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
              <td style={{padding:'7px 10px',fontWeight:600,color:B,whiteSpace:'nowrap'}}>{r.cat}</td>
              <td style={{padding:'7px 10px',fontWeight:600}}>{r.m}</td>
              <td style={{padding:'7px 10px'}}>{r.d}</td>
              <td style={{padding:'7px 10px'}}>{r.c}</td>
              <td style={{padding:'7px 10px'}}><Badge type={r.impact}>{r.impact==='pos'?'利好':r.impact==='neg'?'风险':'中性'}</Badge></td>
              <td style={{padding:'7px 10px',fontSize:10,color:'#94A3B8'}}>{r.s}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </Card>
    </>}

    {/* === TAB 3: CONSUMER & PRICING === */}
    {tab===3&&<>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
        <Card>
          <SH s="NCA 2025">消费全景</SH>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            {[{l:'每日饮用率',v:'66%',d:'超瓶装水64%'},{l:'冷饮占比',v:'75%',d:'SBUX全渠道'},{l:'精品渗透',v:'46%',d:'100杯中59杯'},{l:'DT交易占比',v:'59%',d:'历史新高'},{l:'日消费量',v:'4亿杯',d:'人均~3杯'},{l:'咖啡店市场',v:'$743亿',d:'全球最大'}].map((s,i)=><div key={i} style={{background:'#F0F9FF',borderRadius:6,padding:10}}><div style={{fontSize:10,color:t2}}>{s.l}</div><div style={{fontSize:20,fontWeight:800,color:B}}>{s.v}</div><div style={{fontSize:9,color:t2}}>{s.d}</div></div>)}
          </div>
        </Card>
        <Card>
          <SH s="NCA, Tastewise">Z世代画像</SH>
          {[{p:'47%',t:'每日饮咖啡(增长最快)'},{p:'65%',t:'偏好功能性成分'},{p:'75%',t:'社交媒体发现品牌'},{p:'64%',t:'TikTok搜索产品'},{p:'57%',t:'第一杯是冷饮'},{p:'~15岁',t:'开始喝咖啡(历史最早)'}].map((s,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'6px 0',borderBottom:i<5?'1px solid #F3F4F6':'none'}}><div style={{minWidth:44,fontSize:16,fontWeight:800,color:T}}>{s.p}</div><div style={{fontSize:12}}>{s.t}</div></div>)}
        </Card>
      </div>
      <Card>
        <SH>中杯拿铁价格对比</SH>
        <div style={{height:260}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PRICING} layout="vertical" margin={{left:76,right:30}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
              <XAxis type="number" domain={[0,8]} tickFormatter={v=>'$'+v} style={{fontSize:11}}/>
              <YAxis type="category" dataKey="brand" style={{fontSize:11}} width={70}/>
              <Tooltip formatter={v=>'$'+v.toFixed(2)}/>
              <Bar dataKey="latte" radius={[0,6,6,0]} barSize={24}>{PRICING.map((e,i)=><Cell key={i} fill={e.color}/>)}</Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{background:'#EFF6FF',borderLeft:'4px solid '+B,borderRadius:6,padding:'10px 14px',marginTop:14,fontSize:12}}>
          <b>定价策略：</b><span style={{color:B,fontWeight:700}}>$1.99基础款</span>(美式/冷萃) → <span style={{color:B,fontWeight:700}}>$2.99主力款</span>(拿铁/生椰) → <span style={{color:B,fontWeight:700}}>$3.99功能款</span>(蛋白/抹茶/能量)。$3-5为习惯购买甜蜜区，瑞幸$2-3具极强获客力。咖啡需求弹性仅-0.26。
        </div>
      </Card>
    </>}

    {/* === TAB 4: BRANDS & COMPETITION === */}
    {tab===4&&<>
      <Card style={{marginBottom:14}}>
        <SH>竞争格局矩阵</SH>
        <div style={{overflow:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:11}}>
          <thead><tr style={{background:N,color:'#fff'}}>{['品牌','门店','客单','格式','功能性','数字化/选址','威胁','本期关键'].map(h=><th key={h} style={{padding:'7px 8px',textAlign:'left',fontWeight:600}}>{h}</th>)}</tr></thead>
          <tbody>{COMPETITORS.map((c,i)=><tr key={i} style={{background:c.n==='Luckin'?'#EFF6FF':i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
            <td style={{padding:'7px 8px',fontWeight:700,color:c.n==='Luckin'?B:'#1F2937'}}>{c.n}</td>
            <td style={{padding:'7px 8px'}}>{c.s}</td><td style={{padding:'7px 8px'}}>{c.t}</td>
            <td style={{padding:'7px 8px'}}>{c.f}</td><td style={{padding:'7px 8px'}}>{c.fn}</td>
            <td style={{padding:'7px 8px',fontSize:10}}>{c.dg}</td>
            <td style={{padding:'7px 8px'}}>{c.th>0?'\u2605'.repeat(c.th)+'\u2606'.repeat(5-c.th):'\u2014'}</td>
            <td style={{padding:'7px 8px',fontSize:10,maxWidth:240}}>{c.move}</td>
          </tr>)}</tbody>
        </table></div>
      </Card>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}}>
        <Card>
          <SH style={{color:R}}>中国品牌竞争监控</SH>
          {CHINESE_BRANDS.map((b,i)=><div key={i} style={{border:'1px solid #FCA5A5',borderRadius:8,padding:12,background:'#FEF2F2',marginBottom:i<3?8:0}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
              <b style={{fontSize:13,color:N}}>{b.n}</b>
              <span style={{fontSize:10,fontWeight:700,padding:'1px 6px',borderRadius:99,background:b.rc,color:'#fff'}}>风险{b.risk}</span>
            </div>
            <div style={{fontSize:11,color:t2}}>{b.d}</div>
            <div style={{fontSize:11,marginTop:4}}><b>美国{b.st}店</b> · {b.p} · 关键:{b.k}</div>
          </div>)}
        </Card>
        <Card>
          <SH s="各公司10-K, VettedBiz, 选址附录">门店格式经济学</SH>
          <div style={{overflow:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:11}}>
            <thead><tr style={{background:N,color:'#fff'}}>{['品牌','门店','年均收入','投资','格式','备注'].map(h=><th key={h} style={{padding:'6px 8px',textAlign:'left'}}>{h}</th>)}</tr></thead>
            <tbody>{STORE_ECON.map((s,i)=><tr key={i} style={{background:s.c.includes('瑞幸')?'#EFF6FF':i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
              <td style={{padding:'6px 8px',fontWeight:600}}>{s.c}</td>
              <td style={{padding:'6px 8px'}}>{s.s.toLocaleString()}</td>
              <td style={{padding:'6px 8px',fontWeight:700,color:G}}>{s.rev?'$'+s.rev+'\u4e07':'\u2014'}</td>
              <td style={{padding:'6px 8px'}}>{s.inv}</td>
              <td style={{padding:'6px 8px',fontSize:10}}>{s.fmt}</td>
              <td style={{padding:'6px 8px',fontSize:10}}>{s.note}</td>
            </tr>)}</tbody>
          </table></div>
        </Card>
      </div>
      <Card>
        <SH>数字化与选址能力对比</SH>
        <div style={{overflow:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:11}}>
          <thead><tr style={{background:N,color:'#fff'}}>{['品牌','会员','移动订单','忠诚度','AI/选址能力','关键数据'].map(h=><th key={h} style={{padding:'7px 8px',textAlign:'left'}}>{h}</th>)}</tr></thead>
          <tbody>{DIGITAL_DATA.chains.map((c,i)=><tr key={i} style={{background:c.n.includes('瑞幸')?'#EFF6FF':i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
            <td style={{padding:'7px 8px',fontWeight:700,color:c.n.includes('瑞幸')?B:'#1F2937'}}>{c.n}</td>
            <td style={{padding:'7px 8px'}}>{c.members}</td><td style={{padding:'7px 8px'}}>{c.mobile}</td>
            <td style={{padding:'7px 8px'}}>{c.loyalty}</td><td style={{padding:'7px 8px',fontSize:10}}>{c.ai}</td>
            <td style={{padding:'7px 8px',fontSize:10}}>{c.hl}</td>
          </tr>)}</tbody>
        </table></div>
      </Card>
    </>}

    {/* === TAB 5: PRODUCTS & INDUSTRY === */}
    {tab===5&&<>
      <SH style={{fontSize:17,marginBottom:12}}>新品盘点</SH>
      <div style={{display:'grid',gap:8,marginBottom:24}}>
        {NEW_PRODUCTS.map((p,i)=><Card key={i} style={{padding:'14px 18px'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6,flexWrap:'wrap'}}>
            <span style={{fontSize:16}}>{p.c}</span>
            <b style={{fontSize:13,color:N}}>{p.b}</b>
            <span style={{fontSize:11,color:t2}}>{p.d}</span>
            <Badge type="neu">{p.tag}</Badge>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:5,marginBottom:6}}>
            {p.items.map((it,j)=><span key={j} style={{background:'#F3F4F6',borderRadius:4,padding:'2px 8px',fontSize:11}}>{it}</span>)}
          </div>
          <div style={{fontSize:11,color:T,fontWeight:600}}>{p.insight}</div>
        </Card>)}
      </div>
      <SH style={{fontSize:17,marginBottom:12}}>行业要闻</SH>
      <div style={{display:'grid',gap:8}}>
        {INDUSTRY_NEWS.map((n,i)=><Card key={i} style={{padding:'12px 16px',borderLeft:'4px solid '+(n.impact==='pos'?G:n.impact==='neg'?R:A)}}>
          <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:4}}>
            <span style={{fontSize:10,fontWeight:700,padding:'1px 6px',borderRadius:99,background:'#F3F4F6',color:t2}}>{n.cat}</span>
            <b style={{fontSize:12,color:N}}>{n.t}</b>
            <Badge type={n.impact}>{n.impact==='pos'?'利好':n.impact==='neg'?'风险':'关注'}</Badge>
          </div>
          <div style={{fontSize:11,color:'#374151',lineHeight:1.4}}>{n.d}</div>
          <div style={{fontSize:9,color:'#94A3B8',marginTop:2}}>来源: {n.s}</div>
        </Card>)}
      </div>
    </>}

    {/* === TAB 6: STRATEGY === */}
    {tab===6&&<>
      <SH style={{fontSize:17,marginBottom:12}}>六大优先行动</SH>
      <div style={{display:'grid',gap:8,marginBottom:20}}>
        {ACTIONS.map(a=><Card key={a.id} style={{padding:0,overflow:'hidden',cursor:'pointer',border:exp===a.id?'2px solid '+B:'2px solid transparent'}} onClick={()=>setExp(exp===a.id?null:a.id)}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 16px',background:exp===a.id?'#EFF6FF':'#fff'}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:30,height:30,borderRadius:6,background:a.pc,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:800}}>{a.id}</div>
              <div><div style={{fontSize:13,fontWeight:700,color:N}}>{a.t}</div><div style={{fontSize:10,color:t2}}>{a.tl}</div></div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:6}}><PB l={a.p}/><span style={{fontSize:14,color:t2,transform:exp===a.id?'rotate(180deg)':'none',transition:'0.2s'}}>{'\u25BE'}</span></div>
          </div>
          {exp===a.id&&<div style={{padding:'10px 16px 14px',borderTop:'1px solid #E5E7EB'}}>
            <div style={{fontSize:11,color:B,fontWeight:600,marginBottom:8,background:'#EFF6FF',padding:'5px 10px',borderRadius:5}}>依据: {a.why}</div>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:11}}>
              <thead><tr style={{background:'#F9FAFB'}}><th style={{padding:'5px 8px',textAlign:'left',color:t2}}>行动项</th><th style={{padding:'5px 8px',textAlign:'left',color:t2}}>定价</th><th style={{padding:'5px 8px',textAlign:'left',color:t2}}>竞品基准</th></tr></thead>
              <tbody>{a.items.map((it,j)=><tr key={j} style={{borderBottom:'1px solid #F3F4F6'}}><td style={{padding:'6px 8px'}}>{it.a}</td><td style={{padding:'6px 8px',fontWeight:600,color:B}}>{it.pr}</td><td style={{padding:'6px 8px',color:t2}}>{it.bm}</td></tr>)}</tbody>
            </table>
          </div>}
        </Card>)}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:16}}>
        <Card>
          <SH>社交媒体关键数据</SH>
          {DIGITAL_DATA.social.disc.map((s,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'6px 0',borderBottom:i<2?'1px solid #F3F4F6':'none'}}><div style={{minWidth:44,fontSize:16,fontWeight:800,color:T}}>{s.s}</div><div style={{fontSize:12}}>{s.l}</div></div>)}
          <div style={{background:'#F0F9FF',borderRadius:6,padding:10,marginTop:10}}>
            <div style={{fontSize:10,color:t2}}>网红营销ROI</div>
            <div style={{fontSize:17,fontWeight:800,color:N}}>每$1\u2192{DIGITAL_DATA.social.roi.per$}</div>
            <div style={{fontSize:10,color:t2}}>微网红CPM {DIGITAL_DATA.social.roi.cpm}, 互动{DIGITAL_DATA.social.roi.eng}</div>
          </div>
        </Card>
        <Card>
          <SH>关键时间节点</SH>
          {TIMELINE.map((t,i)=><div key={i} style={{display:'flex',gap:12,paddingBottom:12,borderLeft:i<TIMELINE.length-1?'2px solid #D1D5DB':'none',marginLeft:6,paddingLeft:18,position:'relative'}}>
            <div style={{position:'absolute',left:-1,top:0,width:12,height:12,borderRadius:99,background:i===0?B:'#D1D5DB',border:'2px solid #fff',marginLeft:-7}}/>
            <div><div style={{fontSize:12,fontWeight:700,color:N,marginBottom:3}}>{t.d}</div>{t.evs.map((e,j)=><div key={j} style={{fontSize:11,padding:'1px 0'}}>{'\u2022'} {e}</div>)}</div>
          </div>)}
        </Card>
      </div>
      <Card style={{background:'#F9FAFB'}}>
        <SH>数据来源</SH>
        <div style={{display:'flex',flexWrap:'wrap',gap:5}}>{SOURCES.map((s,i)=><span key={i} style={{background:'#fff',border:'1px solid #E5E7EB',borderRadius:4,padding:'2px 7px',fontSize:10,color:t2}}>{s}</span>)}</div>
      </Card>
    </>}
    </main>
    <footer style={{background:N,color:'#94A3B8',padding:'16px 0',textAlign:'center',fontSize:10}}>
      <div>{META.team} \u00B7 {META.docId} \u00B7 {META.date} \u00B7 \u5185\u90E8\u4F7F\u7528 \u00B7 v4.0</div>
      <div style={{marginTop:3,fontSize:9,color:'#64748B'}}>\u672C\u62A5\u544A\u57FA\u4E8E\u516C\u5F00\u6570\u636E\u6E90\u7F16\u5236\uFF0C\u4EC5\u4F9B\u5185\u90E8\u53C2\u8003\u3002\u6570\u636E\u622A\u81F3{META.date}\u3002\u8D22\u52A1\u6570\u636E\u6765\u6E90Luckin 20-F (FY2025, filed Mar 27 2026)\u3002</div>
    </footer>
  </div>);
}