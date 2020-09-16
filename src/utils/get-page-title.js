import defaultSettings from '@/settings'

const title = defaultSettings.title || '镜鱼门店智慧前台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
