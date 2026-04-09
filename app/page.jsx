"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, Legend } from "recharts";
import { META, DASHBOARD, CONSUMER, TRENDS, BRANDS, PRODUCTS, SOCIAL, NEWS, STRATEGY, MARKET_SHARE } from "./data";

const B="#0365C0",N="#1A365D",T="#00A5A5",G="#059669",R="#DC2626",A="#D97706",t2="#6B7280",GD="#DCBD23";
const C=({children,style})=><div style={{background:"#fff",borderRadius:14,padding:24,boxShadow:"0 1px 4px rgba(0,0,0,0.06),0 0 0 1px rgba(0,0,0,0.03)",...style}}>{children}</div>;
const PB=({l})=>{const c=l==="极高"?R:l==="高"?A:"#3B82F6";return<span style={{padding:"2px 10px",borderRadius:99,fontSize:11,fontWeight:700,background:c,color:"#fff"}}>{l}</span>};
const SH=({children,style})=><h3 style={{margin:"0 0 14px",fontSize:16,fontWeight:700,color:N,...style}}>{children}</h3>;
const Callout=({type,children})=>{const s=type==="warn"?{bg:"#FFFBEB",bd:A,lbl:"竞争警示："}:type==="action"?{bg:"#EFF6FF",bd:B,lbl:"行动建议："}:{bg:"#ECFDF5",bd:G,lbl:"启示："};return<div style={{background:s.bg,borderLeft:"4px solid "+s.bd,borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:12,lineHeight:1.5}}><b style={{color:s.bd}}>{s.lbl}</b>{children}</div>};
const Tbl=({h,rows})=><div style={{overflow:"auto",marginTop:10}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}><thead><tr style={{background:N,color:"#fff"}}>{h.map(x=><th key={x} style={{padding:"7px 10px",textAlign:"left",fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i} style={{background:i%2===0?"#F9FAFB":"#fff",borderBottom:"1px solid #E5E7EB"}}>{r.map((c,j)=><td key={j} style={{padding:"7px 10px",fontWeight:j===0?600:400}}>{c}</td>)}</tr>)}</tbody></table></div>;

const tabs=["编者按","消费者与定价","市场与趋势","品牌动态","新品盘点","社交与数字化","行业要闻","综合洞察与战略"];

export default function Page(){
  const [tab,setTab]=useState(0);
  const [exp,setExp]=useState(null);
  const latteData=CONSUMER.pricing.map(p=>({name:p.b,price:parseFloat(p.p.replace(/[^0-9.]/g,""))||0,color:p.b.includes("瑞幸")?B:p.b==="Starbucks"?"#00704A":p.b==="Dutch Bros"?"#1E40AF":p.b.includes("Dunkin")?"#FF6600":p.b==="Blue Bottle"?"#6366F1":p.b==="Blank Street"?"#111827":"#FFC72C"}));

  return(
  <div style={{minHeight:"100vh",background:"#F7F8FA",fontFamily:"'DM Sans','Noto Sans SC',-apple-system,sans-serif",color:"#1F2937"}}>
    <header style={{background:`linear-gradient(135deg,${N} 0%,#0C4A6E 60%,#164E63 100%)`,color:"#fff",position:"sticky",top:0,zIndex:50}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"20px 24px 0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
              <div style={{width:28,height:28,borderRadius:7,background:"linear-gradient(135deg,#0365C0,#00A5A5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:"#fff"}}>L</div>
              <span style={{fontSize:11,fontWeight:600,color:"#93C5FD",letterSpacing:1}}>{META.docId} · {META.issue} · {META.period}</span>
            </div>
            <h1 style={{margin:0,fontSize:24,fontWeight:800,letterSpacing:"-0.02em"}}>{META.title}</h1>
            <p style={{margin:"4px 0 0",fontSize:12,color:"#BFDBFE"}}>{META.date} · {META.team}</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.06)",borderRadius:10,padding:"8px 14px",border:"1px solid rgba(255,255,255,0.1)",maxWidth:420}}>
            <div style={{fontSize:9,color:GD,fontWeight:600,letterSpacing:1}}>本期主题</div>
            <div style={{fontSize:11,fontWeight:500,lineHeight:1.3}}>{META.theme}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:1,flexWrap:"wrap",marginTop:12,borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:8,paddingBottom:8}}>
          {tabs.map((t,i)=><button key={i} onClick={()=>setTab(i)} style={{padding:"6px 12px",borderRadius:7,border:"none",cursor:"pointer",fontSize:11,fontWeight:tab===i?700:500,background:tab===i?B:"transparent",color:tab===i?"#fff":"rgba(255,255,255,0.6)",transition:"all 0.15s"}}>{t}</button>)}
        </div>
      </div>
      <div style={{height:3,background:"linear-gradient(90deg,#0365C0,#00A5A5,#DCBD23)"}}/>
    </header>
    <main style={{maxWidth:1320,margin:"0 auto",padding:"24px 24px 48px"}}>

    {/* TAB 0: 编者按 + 数据速览 */}
    {tab===0&&<>
      <C style={{marginBottom:16,padding:"20px 24px"}}>
        <SH style={{fontSize:18}}>编者按</SH>
        <div style={{fontSize:13,lineHeight:1.8,color:"#374151"}}>
          <p style={{margin:"0 0 10px"}}>本期最值得关注的三个信号：<b>一是蛋白质+能量+益生元三大功能架构同时爆发</b>——Starbucks推出Energy Refreshers永久平台和22g蛋白RTD，Dunkin'发布Zero能量饮和蛋白奶平台，PepsiCo CEO宣称「纤维将是下一个蛋白质」；<b>二是冷泡沫成为产品创新核心平台</b>——SBUX和DK本季各推4+种风味冷泡沫，取代糖浆成为主要客制化载体；<b>三是咖啡链与能量饮品类边界消失</b>——SBUX、DK、Panera、Tim Hortons同时推出能量产品。</p>
          <p style={{margin:0}}>市场格局：SBUX Q1实现8季度首次正向客流(+3%)但FY25关627店+80-90取餐店；DK超越SBUX成NYC第一；Dutch Bros AUV $210万超SBUX；蜜雪冰城$1.19入场。阿拉比卡从$4.41跌至$2.90(-34%)，但4月5日10%通用关税+越南46%增加不确定性。</p>
        </div>
      </C>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14,marginBottom:16}}>
        {META.themes.map((th,i)=><C key={i} style={{padding:"14px 18px",borderLeft:`4px solid ${[B,T,R,A][i]}`}}>
          <div style={{fontSize:13,fontWeight:700,color:N,marginBottom:4}}>{th.t}</div>
          <div style={{fontSize:11,color:t2,lineHeight:1.4}}>{th.d}</div>
        </C>)}
      </div>
      <C>
        <SH>本期数据速览</SH>
        <div style={{overflow:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
          <thead><tr style={{background:N,color:"#fff"}}>{["指标","数据","变化/趋势","对Luckin影响"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontWeight:600}}>{h}</th>)}</tr></thead>
          <tbody>{DASHBOARD.map((r,i)=>{const isUp=r.i.startsWith("↑");const isDn=r.i.startsWith("↓");return<tr key={i} style={{background:i%2===0?"#F9FAFB":"#fff",borderBottom:"1px solid #E5E7EB"}}>
            <td style={{padding:"8px 12px",fontWeight:600}}>{r.m}</td>
            <td style={{padding:"8px 12px"}}>{r.d}</td>
            <td style={{padding:"8px 12px"}}>{r.c}</td>
            <td style={{padding:"8px 12px"}}><span style={{display:"inline-block",padding:"2px 8px",borderRadius:99,fontSize:11,fontWeight:600,background:isUp?"#ECFDF5":isDn?"#FEF2F2":"#F3F4F6",color:isUp?G:isDn?R:t2}}>{r.i}</span></td>
          </tr>})}</tbody>
        </table></div>
      </C>
    </>}

    {/* TAB 1: 消费者画像与定价 */}
    {tab===1&&<>
      <SH style={{fontSize:18}}>一、消费者画像与行为洞察</SH>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:16}}>
        <C>
          <SH style={{fontSize:14}}>美国咖啡消费全景</SH>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {CONSUMER.stats.map((s,i)=><div key={i} style={{background:"#F0F9FF",borderRadius:8,padding:10}}>
              <div style={{fontSize:10,color:t2}}>{s.l}</div>
              <div style={{fontSize:22,fontWeight:800,color:B}}>{s.v}</div>
              <div style={{fontSize:9,color:t2}}>{s.d}</div>
            </div>)}
          </div>
          <Callout type="insight">菜单以冷饮为核心(冷萃/冰拿铁/Refresher)。冷萃成本低+保质期长=高效运营天然契合。</Callout>
        </C>
        <C>
          <SH style={{fontSize:14}}>Z世代行为特征(47%每日饮咖啡，15岁开始)</SH>
          {CONSUMER.genZ.map((s,i)=><div key={i} style={{fontSize:12,padding:"5px 0",borderBottom:i<4?"1px solid #F3F4F6":"none",display:"flex",gap:8}}><span style={{color:B,fontWeight:700}}>•</span>{s}</div>)}
          <Callout type="insight">{CONSUMER.genZInsight}</Callout>
        </C>
      </div>
      <C>
        <SH style={{fontSize:14}}>各品牌中杯拿铁价格对比</SH>
        <div style={{height:260}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={latteData} layout="vertical" margin={{left:80,right:30}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
              <XAxis type="number" domain={[0,8]} tickFormatter={v=>"$"+v} style={{fontSize:11}}/>
              <YAxis type="category" dataKey="name" style={{fontSize:11}} width={72}/>
              <Tooltip formatter={v=>"$"+v.toFixed(2)}/>
              <Bar dataKey="price" radius={[0,6,6,0]} barSize={24}>{latteData.map((e,i)=><Cell key={i} fill={e.color}/>)}</Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <Tbl h={["品牌","中杯拿铁","客单价","定位","备注"]} rows={CONSUMER.pricing.map(p=>[p.b,p.p,p.t,p.pos,p.note])}/>
        <Callout type="action">{CONSUMER.pricingInsight}</Callout>
      </C>
    </>}

    {/* TAB 2: 市场与趋势 */}
    {tab===2&&<>
      <SH style={{fontSize:18}}>二、市场与趋势观察</SH>
      <div style={{display:"grid",gap:14}}>
        {TRENDS.map((t,i)=><C key={i}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <span style={{fontSize:22}}>{t.icon}</span>
            <SH style={{margin:0,fontSize:15}}>{t.title}</SH>
          </div>
          <div style={{fontSize:12,lineHeight:1.6,color:"#374151"}}>{t.body}</div>
          {t.table&&<Tbl h={t.table.h} rows={t.table.rows}/>}
          {t.action&&<Callout type="action">{t.action}</Callout>}
          {t.insight&&<Callout type="insight">{t.insight}</Callout>}
        </C>)}
      </div>
    </>}

    {/* TAB 3: 品牌动态 */}
    {tab===3&&<>
      <SH style={{fontSize:18}}>三、品牌与传播动态</SH>
      <div style={{display:"grid",gap:14}}>
        {BRANDS.map((b,i)=><C key={i}>
          <SH style={{fontSize:15}}>{b.name}</SH>
          {b.data&&b.data.map((d,j)=><div key={j} style={{fontSize:12,padding:"4px 0",display:"flex",gap:8,lineHeight:1.5}}><span style={{color:B,fontWeight:700,flexShrink:0}}>•</span>{d}</div>)}
          {b.table&&<Tbl h={b.table.h} rows={b.table.rows}/>}
          {b.callout&&<Callout type={b.calloutType}>{b.callout}</Callout>}
        </C>)}
      </div>
    </>}

    {/* TAB 4: 新品盘点 */}
    {tab===4&&<>
      <SH style={{fontSize:18}}>四、新品盘点</SH>
      <div style={{display:"grid",gap:10}}>
        {PRODUCTS.map((p,i)=><C key={i} style={{padding:"16px 20px"}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"}}>
            <span style={{fontSize:14,fontWeight:700,color:N}}>{p.brand}</span>
            <span style={{fontSize:12,color:t2}}>{p.date}</span>
            <span style={{background:"#F3F4F6",borderRadius:6,padding:"2px 8px",fontSize:11}}>{p.theme}</span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:6}}>
            {p.items.map((it,j)=><span key={j} style={{background:"#EFF6FF",border:"1px solid #BFDBFE",borderRadius:6,padding:"3px 10px",fontSize:11}}>{it}</span>)}
          </div>
          <div style={{fontSize:11,color:T,fontWeight:600}}>{p.note}</div>
        </C>)}
      </div>
    </>}

    {/* TAB 5: 社交与数字化 */}
    {tab===5&&<>
      <SH style={{fontSize:18}}>五、社交媒体与数字化洞察</SH>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
        <C>
          <SH style={{fontSize:14}}>TikTok是新菜单板</SH>
          {SOCIAL.discovery.map((s,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:i<2?"1px solid #F3F4F6":"none"}}>
            <div style={{minWidth:48,fontSize:18,fontWeight:800,color:T}}>{s.s}</div>
            <div style={{fontSize:12}}>{s.l}</div>
          </div>)}
          <div style={{marginTop:12}}><div style={{fontSize:12,fontWeight:600,color:N,marginBottom:6}}>TikTok热门趋势</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {SOCIAL.tiktok.map((t,i)=><span key={i} style={{background:"#F3F4F6",borderRadius:6,padding:"3px 9px",fontSize:11}}>{t}</span>)}
            </div>
          </div>
        </C>
        <C>
          <SH style={{fontSize:14}}>网红营销ROI</SH>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[{l:"全球市场",v:SOCIAL.influencer.market},{l:"平均ROI",v:SOCIAL.influencer.roi},{l:"微网红CPM",v:SOCIAL.influencer.microCPM},{l:"互动率",v:SOCIAL.influencer.microEng}].map((s,i)=><div key={i} style={{background:"#F0F9FF",borderRadius:8,padding:10}}>
              <div style={{fontSize:10,color:t2}}>{s.l}</div>
              <div style={{fontSize:20,fontWeight:800,color:B}}>{s.v}</div>
            </div>)}
          </div>
          <div style={{background:"#FFFBEB",borderLeft:"3px solid "+A,borderRadius:6,padding:"8px 12px",marginTop:10,fontSize:11}}>
            <b>案例：</b>{SOCIAL.casestudy}
          </div>
        </C>
      </div>
      <C>
        <SH style={{fontSize:14}}>数字化忠诚度对比</SH>
        <Tbl h={["品牌","会员数","移动订单","忠诚度","AI能力","关键数据"]} rows={SOCIAL.digitalCompare.map(c=>[c.n,c.members,c.mobile,c.loyalty,c.ai,c.key])}/>
        <Callout type="action">{SOCIAL.socialAction}</Callout>
      </C>
    </>}

    {/* TAB 6: 行业要闻 */}
    {tab===6&&<>
      <SH style={{fontSize:18}}>六、行业要闻</SH>
      <div style={{display:"grid",gap:10}}>
        {NEWS.map((n,i)=><C key={i} style={{padding:"14px 18px",borderLeft:"4px solid "+(n.impact==="pos"?G:n.impact==="neg"?R:A)}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
            <span style={{fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99,background:"#F3F4F6",color:t2}}>{n.cat}</span>
            <b style={{fontSize:13,color:N}}>{n.t}</b>
            <span style={{padding:"2px 8px",borderRadius:99,fontSize:10,fontWeight:600,background:n.impact==="pos"?"#ECFDF5":n.impact==="neg"?"#FEF2F2":"#FEF9C3",color:n.impact==="pos"?G:n.impact==="neg"?R:A}}>{n.impact==="pos"?"利好":n.impact==="neg"?"风险":"关注"}</span>
          </div>
          <div style={{fontSize:12,color:"#374151",lineHeight:1.5}}>{n.d}</div>
          {n.action&&<Callout type="action">{n.action}</Callout>}
        </C>)}
      </div>
    </>}

    {/* TAB 7: 综合洞察与战略 */}
    {tab===7&&<>
      <SH style={{fontSize:18}}>七、综合洞察与对Luckin美国战略建议</SH>
      <C style={{marginBottom:14}}>
        <SH style={{fontSize:14}}>竞争格局评估</SH>
        <Tbl h={STRATEGY.landscape[0] ? Object.values(STRATEGY.landscape[0]) : []} rows={STRATEGY.landscape.slice(1).map(r=>Object.values(r))}/>
      </C>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
        <C style={{background:"#ECFDF5",border:"1px solid #A7F3D0",padding:16}}>
          <SH style={{color:G,fontSize:14}}>✅ 核心优势</SH>
          {STRATEGY.swot.str.map((s,i)=><div key={i} style={{fontSize:11,padding:"2px 0"}}>• {s}</div>)}
        </C>
        <C style={{background:"#FEF2F2",border:"1px solid #FECACA",padding:16}}>
          <SH style={{color:R,fontSize:14}}>⚠️ 主要挑战</SH>
          {STRATEGY.swot.chg.map((s,i)=><div key={i} style={{fontSize:11,padding:"2px 0"}}>• {s}</div>)}
        </C>
      </div>
      <SH style={{fontSize:15}}>五大优先行动建议</SH>
      <div style={{display:"grid",gap:8,marginBottom:16}}>
        {STRATEGY.actions.map(a=><C key={a.id} style={{padding:0,overflow:"hidden",cursor:"pointer",border:exp===a.id?"2px solid "+B:"2px solid transparent"}} onClick={()=>setExp(exp===a.id?null:a.id)}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:exp===a.id?"#EFF6FF":"#fff"}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:28,height:28,borderRadius:6,background:a.p==="极高"?R:a.p==="高"?A:"#3B82F6",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800}}>{a.id}</div>
              <div><div style={{fontSize:13,fontWeight:700,color:N}}>{a.t}</div><div style={{fontSize:10,color:t2}}>{a.tl}</div></div>
            </div>
            <PB l={a.p}/>
          </div>
          {exp===a.id&&<div style={{padding:"8px 16px 14px",borderTop:"1px solid #E5E7EB"}}>
            {a.items.map((it,j)=><div key={j} style={{fontSize:12,padding:"5px 0",borderBottom:j<a.items.length-1?"1px solid #F3F4F6":"none",display:"flex",gap:8}}><span style={{color:B}}>•</span>{it}</div>)}
          </div>}
        </C>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
        <C>
          <SH style={{fontSize:14}}>竞争监控机制</SH>
          {STRATEGY.monitor.map((m,i)=><div key={i} style={{padding:"8px 0",borderBottom:i<4?"1px solid #F3F4F6":"none"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}><b style={{fontSize:12,color:N}}>{m.target}</b><span style={{fontSize:11,color:A}}>{m.level}</span></div>
            <div style={{fontSize:11,color:t2}}>{m.focus}</div>
          </div>)}
        </C>
        <C>
          <SH style={{fontSize:14}}>关键时间节点</SH>
          {STRATEGY.timeline.map((t,i)=><div key={i} style={{display:"flex",gap:12,paddingBottom:12,borderLeft:i<3?"2px solid #D1D5DB":"none",marginLeft:6,paddingLeft:18,position:"relative"}}>
            <div style={{position:"absolute",left:-1,top:0,width:12,height:12,borderRadius:99,background:i===0?B:"#D1D5DB",border:"2px solid #fff",marginLeft:-7}}/>
            <div><div style={{fontSize:12,fontWeight:700,color:N,marginBottom:3}}>{t.d}</div>{t.evs.map((e,j)=><div key={j} style={{fontSize:11,padding:"1px 0"}}>• {e}</div>)}</div>
          </div>)}
        </C>
      </div>
    </>}
    </main>
    <footer style={{background:N,color:"#94A3B8",textAlign:"center",fontSize:10}}>
      <div style={{height:2,background:"linear-gradient(90deg,#0365C0,#00A5A5,#DCBD23)"}}/>
      <div style={{padding:"14px 0"}}>
        <div>{META.team} · {META.docId} · {META.date} · 内部使用 · v7.0</div>
        <div style={{fontSize:9,color:"#64748B",marginTop:2}}>数据来源：NCA, Starbucks IR, Dunkin' Newsroom, Dutch Bros 10-K, Placer.ai, Tastewise, Spate, Trading Economics, SEC, CNBC, Food Dive, QSR Magazine</div>
      </div>
    </footer>
  </div>);
}