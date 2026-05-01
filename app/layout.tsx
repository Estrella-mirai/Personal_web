import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Noto_Sans_SC, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'LY | 个人站',
  description: '一个包含时间线、个人属性、项目集和在线文档的可扩展个人网站。',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'LY | 个人站',
    description: '用于展示成长经历、简历项目、文章文档和联系入口的个人网站。',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${spaceGrotesk.variable} ${notoSansSC.variable}`}>
      <body>{children}</body>
    </html>
  );
}
