"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, Legend } from "recharts";
import { META, EXEC_SIGNALS, MARKET_SHARE, KEY_METRICS, PRICING_STRATEGY, PROTEIN_COMPARE, ENERGY_COMPARE, PRODUCT_PIPELINE, STORE_STRATEGY, SOCIAL_STRATEGY, COMPETITORS_COMPACT, CHINESE_BRANDS, TIMELINE, LUCKIN_SWOT, SOURCES } from "./data";

const B="#0365C0",N="#1A365D",T="#00A5A5",G="#059669",R="#DC2626",A="#D97706",t2="#6B7280",GOLD="#DCBD23";
const Card=({children,style})=><div style={{background:"#fff",borderRadius:14,padding:24,boxShadow:"0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)",...style}}>{children}</div>;
const PB=({l})=>{const c=l==="极高"?R:l==="高"?A:"#3B82F6";return<span style={{padding:"2px 10px",borderRadius:99,fontSize:11,fontWeight:700,background:c,color:"#fff"}}>{l}</span>};
const SH=({children,s,style})=><h3 style={{margin:"0 0 16px",fontSize:16,fontWeight:700,color:N,...style}}>{children}{s&&<span style={{fontSize:10,color:"#94A3B8",marginLeft:6}}>({s})</span>}</h3>;
const Dot=()=><div style={{width:5,height:5,borderRadius:99,background:B,flexShrink:0,marginTop:6}}/>;

const tabs=["编者按","产品创新战略","定价与门店","品牌竞争","社交与营销","行动计划"];

export default function Page(){
  const [tab,setTab]=useState(0);
  const [exp,setExp]=useState(null);

  return(
  <div style={{minHeight:"100vh",background:"#F7F8FA",fontFamily:"'DM Sans','Noto Sans SC',-apple-system,sans-serif",color:"#1F2937"}}>
    <header style={{background:`linear-gradient(135deg,${N} 0%,#0C4A6E 60%,#164E63 100%)`,color:"#fff",position:"sticky",top:0,zIndex:50}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"24px 24px 0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
              <div style={{width:30,height:30,borderRadius:8,background:"linear-gradient(135deg,#0365C0,#00A5A5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,color:"#fff"}}>L</div>
              <div style={{fontSize:11,fontWeight:600,color:"#93C5FD",letterSpacing:1}}>{META.docId} · {META.issue}</div>
            </div>
            <h1 style={{margin:0,fontSize:27,fontWeight:800,letterSpacing:"-0.02em"}}>{META.title}</h1>
            <p style={{margin:"5px 0 0",fontSize:13,color:"#BFDBFE"}}>{META.date} · {META.team} · {META.period}</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.06)",borderRadius:12,padding:"10px 18px",border:"1px solid rgba(255,255,255,0.1)",backdropFilter:"blur(8px)",maxWidth:440}}>
            <div style={{fontSize:10,color:GOLD,fontWeight:600,letterSpacing:1,marginBottom:2}}>本期主题</div>
            <div style={{fontSize:12,fontWeight:500,lineHeight:1.4}}>{META.theme}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:2,flexWrap:"wrap",marginTop:14,borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:10,paddingBottom:10}}>
          {tabs.map((t,i)=><button key={i} onClick={()=>setTab(i)} style={{padding:"7px 16px",borderRadius:8,border:"none",cursor:"pointer",fontSize:12,fontWeight:tab===i?700:500,background:tab===i?B:"transparent",color:tab===i?"#fff":"rgba(255,255,255,0.65)",transition:"all 0.15s"}}>{t}</button>)}
        </div>
      </div>
      <div style={{height:3,background:"linear-gradient(90deg,#0365C0,#00A5A5,#DCBD23)"}}/>
    </header>

    <main style={{maxWidth:1320,margin:"0 auto",padding:"28px 24px 56px"}}>

    {/* === TAB 0: EXEC SUMMARY === */}
    {tab===0&&<>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))",gap:14,marginBottom:20}}>
        {EXEC_SIGNALS.map((s,i)=>(
          <Card key={i} style={{borderLeft:`4px solid ${s.color}`,padding:"18px 20px"}}>
            <div style={{fontSize:14,fontWeight:700,color:N,marginBottom:6}}>{i+1}. {s.title}</div>
            <div style={{fontSize:12,color:"#374151",lineHeight:1.6,marginBottom:6}}>{s.detail}</div>
            <div style={{fontSize:10,color:"#94A3B8"}}>来源: {s.source}</div>
          </Card>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:16}}>
        <Card>
          <SH s="Placer.ai">市场份额变迁</SH>
          <div style={{height:250}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MARKET_SHARE} margin={{left:10,right:30}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
                <XAxis dataKey="year" style={{fontSize:11}}/>
                <YAxis domain={[0,100]} tickFormatter={v=>v+"%"} style={{fontSize:11}}/>
                <Tooltip formatter={v=>v+"%"}/>
                <Legend wrapperStyle={{fontSize:11}}/>
                <Area type="monotone" dataKey="sbuxDk" name="SBUX+DK" stackId="1" fill="#00704A" stroke="#00704A" fillOpacity={0.7}/>
                <Area type="monotone" dataKey="mid" name="中型连锁" stackId="1" fill={B} stroke={B} fillOpacity={0.7}/>
                <Area type="monotone" dataKey="small" name="小型连锁" stackId="1" fill={T} stroke={T} fillOpacity={0.7}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <Card style={{background:"#ECFDF5",border:"1px solid #A7F3D0",flex:1,padding:16}}>
            <SH style={{color:G,fontSize:14}}>核心优势</SH>
            {LUCKIN_SWOT.str.map((s,i)=><div key={i} style={{fontSize:11,padding:"2px 0",display:"flex",gap:6}}><Dot/><span style={{marginTop:1}}>{s}</span></div>)}
          </Card>
          <Card style={{background:"#FEF2F2",border:"1px solid #FECACA",flex:1,padding:16}}>
            <SH style={{color:R,fontSize:14}}>主要挑战</SH>
            {LUCKIN_SWOT.chg.map((s,i)=><div key={i} style={{fontSize:11,padding:"2px 0",display:"flex",gap:6}}><Dot/><span style={{marginTop:1}}>{s}</span></div>)}
          </Card>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(155px,1fr))",gap:10}}>
        {KEY_METRICS.map((m,i)=><Card key={i} style={{padding:"12px 14px"}}><div style={{fontSize:10,color:t2}}>{m.label}</div><div style={{fontSize:22,fontWeight:800,color:m.trend==="up"?G:R,margin:"2px 0"}}>{m.value}</div><div style={{fontSize:9,color:t2}}>{m.sub}</div><div style={{fontSize:9,fontWeight:600,color:m.trend==="up"?G:R}}>{m.delta}</div></Card>)}
      </div>
    </>}

    {/* === TAB 1: PRODUCT INNOVATION STRATEGY (NEW - centerpiece) === */}
    {tab===1&&<>
      <SH style={{fontSize:18,marginBottom:16}}>产品创新路线图</SH>
      <div style={{display:"grid",gap:12,marginBottom:24}}>
        {PRODUCT_PIPELINE.map((p,i)=>(
          <Card key={i} style={{padding:0,overflow:"hidden",border:exp===("p"+i)?"2px solid "+B:"2px solid transparent",cursor:"pointer"}} onClick={()=>setExp(exp===("p"+i)?null:"p"+i)}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",background:exp===("p"+i)?"#EFF6FF":"#fff"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:8,height:40,borderRadius:4,background:p.priority==="极高"?R:p.priority==="高"?A:"#3B82F6"}}/>
                <div>
                  <div style={{fontSize:14,fontWeight:700,color:N}}>{p.category}</div>
                  <div style={{fontSize:11,color:t2}}>{p.timeline} · {p.price}</div>
                </div>
              </div>
              <PB l={p.priority}/>
            </div>
            {exp===("p"+i)&&(
              <div style={{padding:"0 18px 16px",borderTop:"1px solid #E5E7EB"}}>
                <div style={{fontSize:11,color:B,fontWeight:600,marginTop:10,marginBottom:8}}>竞品基准: {p.benchmark}</div>
                {p.skus.map((s,j)=><div key={j} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"6px 0",borderBottom:j<p.skus.length-1?"1px solid #F3F4F6":"none"}}><Dot/><span style={{fontSize:12,marginTop:1}}>{s}</span></div>)}
              </div>
            )}
          </Card>
        ))}
      </div>

      <SH style={{fontSize:16}}>蛋白质咖啡产品对比</SH>
      <Card style={{marginBottom:16}}>
        <div style={{overflow:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
            <thead><tr style={{background:N,color:"#fff"}}>
              {["品牌","产品","蛋白质","糖","纤维","价格","形态"].map(h=><th key={h} style={{padding:"8px 10px",textAlign:"left",fontWeight:600}}>{h}</th>)}
            </tr></thead>
            <tbody>{PROTEIN_COMPARE.map((r,i)=>(
              <tr key={i} style={{background:r.brand.includes("瑞幸")?"#EFF6FF":i%2===0?"#F9FAFB":"#fff",borderBottom:"1px solid #E5E7EB",fontWeight:r.brand.includes("瑞幸")?700:400}}>
                <td style={{padding:"8px 10px",fontWeight:600,color:r.brand.includes("瑞幸")?B:N}}>{r.brand}</td>
                <td style={{padding:"8px 10px"}}>{r.product}</td>
                <td style={{padding:"8px 10px",fontWeight:700,color:G}}>{r.protein}</td>
                <td style={{padding:"8px 10px"}}>{r.sugar}</td>
                <td style={{padding:"8px 10px"}}>{r.fiber}</td>
                <td style={{padding:"8px 10px"}}>{r.price}</td>
                <td style={{padding:"8px 10px"}}>{r.format}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Card>

      <SH style={{fontSize:16}}>能量产品对比: Starbucks vs Dunkin' vs Luckin机会</SH>
      <Card>
        <div style={{overflow:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr style={{background:N,color:"#fff"}}>
              {["维度","Starbucks Energy","Dunkin' Zero","Luckin 机会"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontWeight:600}}>{h}</th>)}
            </tr></thead>
            <tbody>{ENERGY_COMPARE.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?"#F9FAFB":"#fff",borderBottom:"1px solid #E5E7EB"}}>
                <td style={{padding:"8px 12px",fontWeight:700,color:N}}>{r.dim}</td>
                <td style={{padding:"8px 12px"}}>{r.sbux}</td>
                <td style={{padding:"8px 12px"}}>{r.dk}</td>
                <td style={{padding:"8px 12px",color:B,fontWeight:600}}>{r.luckin}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div style={{background:"#EFF6FF",borderLeft:"4px solid "+B,borderRadius:8,padding:"10px 14px",marginTop:14,fontSize:12}}>
          <b>核心差异化:</b> 瑞幸APP客制化功能可实现咖啡因水平可调(标准/加强/去咖啡因)——这是SBUX和DK难以复制的独特优势。建议+$0.30-0.50能量加强选项(低于SBUX的+$0.80)。
        </div>
      </Card>
    </>}

    {/* === TAB 2: PRICING & STORE STRATEGY === */}
    {tab===2&&<>
      <SH style={{fontSize:18}}>三档定价体系</SH>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:20}}>
        {PRICING_STRATEGY.tiers.map((t,i)=>(
          <Card key={i} style={{textAlign:"center",border:`2px solid ${[T,B,GOLD][i]}`,padding:"20px 16px"}}>
            <div style={{fontSize:36,fontWeight:800,color:[T,B,GOLD][i],marginBottom:4}}>{t.price}</div>
            <div style={{fontSize:15,fontWeight:700,color:N,marginBottom:4}}>{t.name}</div>
            <div style={{fontSize:12,color:t2,marginBottom:8}}>{t.items}</div>
            <div style={{fontSize:11,fontWeight:600,color:[T,B,GOLD][i],marginBottom:4}}>目标: {t.goal}</div>
            <div style={{fontSize:10,color:"#94A3B8"}}>基准: {t.benchmark}</div>
          </Card>
        ))}
      </div>
      <Card style={{marginBottom:20}}>
        <div style={{background:"#FFFBEB",borderLeft:"3px solid "+A,borderRadius:6,padding:"10px 14px",fontSize:12}}>
          <b>定价洞察:</b> {PRICING_STRATEGY.insight}
        </div>
      </Card>

      <SH style={{fontSize:18}}>门店格式战略</SH>
      <div style={{display:"grid",gap:12,marginBottom:16}}>
        {STORE_STRATEGY.formats.map((f,i)=>(
          <Card key={i} style={{padding:"16px 20px",borderLeft:`4px solid ${[B,T,GOLD][i]}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
              <div>
                <div style={{fontSize:15,fontWeight:700,color:N}}>{f.type}</div>
                <div style={{fontSize:12,color:t2}}>{f.size} · 投资{f.invest} · {f.target}</div>
              </div>
              <span style={{fontSize:11,fontWeight:700,padding:"2px 10px",borderRadius:99,background:f.priority==="立即"?R:A,color:"#fff"}}>{f.priority}</span>
            </div>
            <div style={{fontSize:12,color:G,fontWeight:600,marginBottom:4}}>验证: {f.benchmark}</div>
            <div style={{fontSize:12,color:B,fontWeight:600}}>机会: {f.opportunity}</div>
          </Card>
        ))}
      </div>
      <Card style={{background:"#F0F9FF"}}>
        <SH style={{fontSize:14}}>选址升级</SH>
        <div style={{fontSize:12}}>{STORE_STRATEGY.siteSelection}</div>
      </Card>
    </>}

    {/* === TAB 3: BRAND COMPETITION === */}
    {tab===3&&<>
      <Card style={{marginBottom:14}}>
        <SH>竞争格局</SH>
        <div style={{overflow:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
          <thead><tr style={{background:N,color:"#fff"}}>{["品牌","门店","AUV","威胁","本期关键动作"].map(h=><th key={h} style={{padding:"8px 10px",textAlign:"left",fontWeight:600}}>{h}</th>)}</tr></thead>
          <tbody>{COMPETITORS_COMPACT.map((c,i)=><tr key={i} style={{background:c.n==="Luckin"?"#EFF6FF":i%2===0?"#F9FAFB":"#fff",borderBottom:"1px solid #E5E7EB"}}>
            <td style={{padding:"8px 10px",fontWeight:700,color:c.n==="Luckin"?B:N}}>{c.n}</td>
            <td style={{padding:"8px 10px"}}>{c.s}</td>
            <td style={{padding:"8px 10px",fontWeight:700,color:G}}>{c.auv}</td>
            <td style={{padding:"8px 10px"}}>{c.threat>0?"\u2605".repeat(c.threat)+"\u2606".repeat(5-c.threat):"\u2014"}</td>
            <td style={{padding:"8px 10px",fontSize:11,maxWidth:300}}>{c.move}</td>
          </tr>)}</tbody>
        </table></div>
      </Card>
      <Card>
        <SH style={{color:R}}>中国品牌竞争监控</SH>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12}}>
          {CHINESE_BRANDS.map((b,i)=><div key={i} style={{border:"1px solid #FCA5A5",borderRadius:10,padding:14,background:"#FEF2F2"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
              <b style={{fontSize:13,color:N}}>{b.n}</b>
              <span style={{fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99,background:b.rc,color:"#fff"}}>风险{b.risk}</span>
            </div>
            <div style={{fontSize:11,color:t2}}>{b.d}</div>
            <div style={{fontSize:11,marginTop:4}}><b>美国{b.st}店</b> · {b.p} · {b.k}</div>
          </div>)}
        </div>
      </Card>
    </>}

    {/* === TAB 4: SOCIAL & MARKETING === */}
    {tab===4&&<>
      <Card style={{marginBottom:16}}>
        <SH>社交媒体营销体系</SH>
        <div style={{background:"#EFF6FF",borderRadius:10,padding:16,marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <div>
            <div style={{fontSize:11,color:t2}}>建议月度预算</div>
            <div style={{fontSize:28,fontWeight:800,color:B}}>{SOCIAL_STRATEGY.budget}</div>
          </div>
          <div style={{display:"flex",gap:16}}>
            {[{l:"网红ROI",v:"$5.78/$1"},{l:"微网红CPM",v:"$119"},{l:"互动率",v:"6.15%"}].map((s,i)=><div key={i} style={{textAlign:"center"}}>
              <div style={{fontSize:9,color:t2}}>{s.l}</div>
              <div style={{fontSize:18,fontWeight:800,color:N}}>{s.v}</div>
            </div>)}
          </div>
        </div>
        {SOCIAL_STRATEGY.channels.map((c,i)=>(
          <div key={i} style={{padding:"12px 0",borderBottom:i<2?"1px solid #F3F4F6":"none"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
              <b style={{fontSize:13,color:N}}>{c.platform}</b>
              <span style={{fontSize:10,color:t2}}>{c.data}</span>
            </div>
            <div style={{fontSize:12,color:"#374151"}}>{c.action}</div>
            <div style={{fontSize:11,color:G,fontWeight:600,marginTop:2}}>案例: {c.roi}</div>
          </div>
        ))}
      </Card>
      <Card>
        <SH>TikTok热门咖啡趋势(2026春)</SH>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          {SOCIAL_STRATEGY.tiktokTrends.map((t,i)=><span key={i} style={{background:"#F3F4F6",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:500}}>{t}</span>)}
        </div>
      </Card>
    </>}

    {/* === TAB 5: ACTION PLAN === */}
    {tab===5&&<>
      <SH style={{fontSize:18,marginBottom:16}}>关键时间节点</SH>
      <Card style={{marginBottom:20}}>
        <div style={{display:"flex",flexDirection:"column",gap:0}}>
          {TIMELINE.map((t,i)=><div key={i} style={{display:"flex",gap:14,paddingBottom:14,borderLeft:i<TIMELINE.length-1?"2px solid #D1D5DB":"none",marginLeft:7,paddingLeft:20,position:"relative"}}>
            <div style={{position:"absolute",left:-1,top:0,width:14,height:14,borderRadius:99,background:i===0?B:"#D1D5DB",border:"3px solid #fff",marginLeft:-8}}/>
            <div><div style={{fontSize:13,fontWeight:700,color:N,marginBottom:4}}>{t.d}</div>{t.evs.map((e,j)=><div key={j} style={{fontSize:12,padding:"2px 0"}}>• {e}</div>)}</div>
          </div>)}
        </div>
      </Card>

      <Card style={{background:"#F9FAFB"}}>
        <SH>数据来源</SH>
        <div style={{display:"flex",flexWrap:"wrap",gap:5}}>{SOURCES.map((s,i)=><span key={i} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:4,padding:"2px 7px",fontSize:10,color:t2}}>{s}</span>)}</div>
      </Card>
    </>}
    </main>
    <footer style={{background:N,color:"#94A3B8",textAlign:"center",fontSize:10}}>
      <div style={{height:2,background:"linear-gradient(90deg,#0365C0,#00A5A5,#DCBD23)"}}/>
      <div style={{padding:"16px 0"}}>
        <div>{META.team} · {META.docId} · {META.date} · 内部使用 · v6.0</div>
      </div>
    </footer>
  </div>);
}