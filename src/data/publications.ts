import type { LocaleText } from '@/types/i18n'

interface Publication {
  title: string;
  authors: string;
  time: string;
  img_path: string;
  description: LocaleText;
  submit_status: LocaleText;
  link: string;
}

const publications: Publication[] = []

export { publications, type Publication }
