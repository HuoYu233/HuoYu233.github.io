import type { LocaleText } from '@/types/i18n'

interface Experience {
	title: LocaleText;
	time: LocaleText;
	img_path: string;
	description: LocaleText;
	link: LocaleText;
}

const experiences: Experience[] = [
  {
		title: {
			en: "KUSART",
			zh: "KUSART"
		},
		time: {
			en: "April 2026 - Present",
			zh: "2026.4 - 至今"
		},
		img_path: "/experiences/kusart.png",
		description: {
			en: "I work on inference optimization for multimodal generative models in the ComfyUI ecosystem, the development of multimodal content-creation agents, and the operation and maintenance of computing clusters.",
			zh: "主要负责 ComfyUI 生态中的多模态生成模型推理优化、多模态内容创作 Agent 研发，以及计算集群的日常运维。"
		},
		link: { en: "", zh: "" }
	},
	{
		title: {
			en: "Xiamen University (XMU)",
			zh: "厦门大学"
		},
		time: {
			en: "September 2025 - Present",
			zh: "2025.9 - 至今"
		},
		img_path: "/experiences/xmu.jpg",
		description: {
			en: `Under the supervision of Prof. <a href="https://life.xmu.edu.cn/info/1039/2095.htm" target="_blank">Yongyou Zhang</a>, I conduct research on <b>AI-driven protein design</b> and <b>bioinformatics</b>.`,
			zh: `在<a href="https://life.xmu.edu.cn/info/1039/2095.htm" target="_blank">张永有教授</a>的指导下开展研究，主要关注<b>AI 驱动的蛋白质设计</b>与<b>生物信息学</b>。`
		},
		link: {
			en: "https://en.xmu.edu.cn/",
			zh: "https://www.xmu.edu.cn/"
		}
	},
	{
		title: { en: "Fuzhou University (FZU)", zh: "福州大学" },
		time: { en: "September 2021 - June 2025", zh: "2021.9 - 2025.6" },
		img_path: "/experiences/fzu.jpg",
		description: {
			en: `As an undergraduate member of the <a href="https://www.fzu-urbansensing.com/" target="_blank">Human-Computer Collaborative Intelligence Research Group</a>, I contributed to the development of a crowdsensing platform for smart-city applications.`,
			zh: `本科期间加入<a href="https://www.fzu-urbansensing.com/" target="_blank">人机共融智能课题组</a>，参与面向智慧城市应用的群智感知平台研发。`
		},
		link: { en: "https://www.fzu.edu.cn/", zh: "https://www.fzu.edu.cn/" }
	}
]

export {experiences, type Experience}
