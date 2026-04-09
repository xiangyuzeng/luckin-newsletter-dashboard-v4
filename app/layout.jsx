export const metadata = {
  title: 'Luckin 美国饮品市场 Newsletter | 2026年4月',
  description: '瑞幸美国产品组 — 美国饮品市场趋势、竞争情报与战略建议',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#F7F8FA', fontFamily: "'Inter', 'Noto Sans SC', sans-serif", color: '#1F2937' }}>
        {children}
      </body>
    </html>
  );
}
