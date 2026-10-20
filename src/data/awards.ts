import type { LocaleText } from '@/types/i18n'

type AwardCategory = 'undergraduate' | 'highSchool'

interface Award {
  date: string;
  category: AwardCategory;
  name: LocaleText;
}

const awards: Award[] = [
  { date: '2025.4', category: 'undergraduate', name: { en: 'Second Prize (Provincial), C/C++ Group A, 16th Lanqiao Cup Software Competition', zh: '第十六届蓝桥杯软件赛 C/C++ A 组省二等奖' } },
  { date: '2025.4', category: 'undergraduate', name: { en: 'Third Prize, 22nd Fuzhou University Programming Contest and ACM/ICPC Training Team Selection', zh: '福州大学第二十二届程序设计竞赛暨校 ACM/ICPC 集训队选拔赛三等奖' } },
  { date: '2024.12', category: 'undergraduate', name: { en: 'First Prize (National), C++ Programming, 6th National College Computer Skills Challenge', zh: '第六届全国高校计算机能力挑战赛 C++ 程序设计国赛一等奖' } },
  { date: '2024.7', category: 'undergraduate', name: { en: 'First Prize, 16th CSEE Cup National Undergraduate Electrical Mathematical Modeling Competition', zh: '第十六届“中国电机工程学会杯”全国大学生电工数学建模竞赛一等奖' } },
  { date: '2024.5', category: 'undergraduate', name: { en: 'Honorable Mention, COMAP 2024 MCM/ICM Contest', zh: 'COMAP 2024 MCM/ICM 数学建模竞赛荣誉奖（Honorable Mention）' } },
  { date: '2024.4', category: 'undergraduate', name: { en: 'Third Prize, 8th Fuzhou University Cybersecurity Competition', zh: '福州大学第八届网络信息安全竞赛三等奖' } },
  { date: '2019.10', category: 'highSchool', name: { en: 'Third Prize, 10th National Youth Science Film Festival', zh: '第十届全国青少年科学影像节三等奖' } },
  { date: '2019.6', category: 'highSchool', name: { en: 'Second Prize (Fujian Division), FLTRP Cup National Secondary School Foreign Language Literacy Competition', zh: '“外研社杯”全国中学生外语素养大赛福建赛区二等奖' } },
]

export { awards, type Award, type AwardCategory }
