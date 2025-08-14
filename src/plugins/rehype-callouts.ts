import rehypeCallouts from 'rehype-callouts'
import { type IconifyJSON, icons } from '@iconify-json/lucide'
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils'
import type { RehypePlugin } from 'node_modules/@astrojs/markdown-remark/dist/types'

// Return the svg (html) code of a current icon set from iconify
const getSVG = (iconSet: IconifyJSON, name: string) => {
  const iconData = getIconData(iconSet, name)

  if (!iconData) {
    throw new Error(`Icon not found ${name}`)
  }
  const data = iconToSVG(iconData, {
    height: '1em',
    width: '1em',
  })
  return iconToHTML(replaceIDs(data.body), data.attributes)
}

type calloutType = {
  title: string
  indicator: string
  style: string
  textColor: string
}

type calloutListType = {
  [key: string]: calloutType
}

type pluginConfigType = [RehypePlugin<any[]>, any]

const callouts: calloutListType = {
  note: {
    title: 'Note',
    indicator: getSVG(icons, 'info'),
    style: 'border-blue-500 dark:bg-blue-950/5',
    textColor: 'text-blue-700 dark:text-blue-300',
  },
  tip: {
    title: 'Tip',
    indicator: getSVG(icons, 'lightbulb'),
    style: 'border-green-500 dark:bg-green-950/5',
    textColor: 'text-green-700 dark:text-green-300',
  },
  warning: {
    title: 'Warning',
    indicator: getSVG(icons, 'alert-triangle'),
    style: 'border-amber-500 dark:bg-amber-950/5',
    textColor: 'text-amber-700 dark:text-amber-300',
  },
  danger: {
    title: 'Danger',
    indicator: getSVG(icons, 'shield-alert'),
    style: 'border-red-500 dark:bg-red-950/5',
    textColor: 'text-red-700 dark:text-red-300',
  },
  important: {
    title: 'Important',
    indicator: getSVG(icons, 'message-square-warning'),
    style: 'border-purple-500 dark:bg-purple-950/5',
    textColor: 'text-purple-700 dark:text-purple-300',
  },
  definition: {
    title: 'Definition',
    indicator: getSVG(icons, 'book-open'),
    style: 'border-purple-500 dark:bg-purple-950/5',
    textColor: 'text-purple-700 dark:text-purple-300',
  },
  theorem: {
    title: 'Theorem',
    indicator: getSVG(icons, 'check-circle'),
    style: 'border-teal-500 dark:bg-teal-950/5',
    textColor: 'text-teal-700 dark:text-teal-300',
  },
  lemma: {
    title: 'Lemma',
    indicator: getSVG(icons, 'puzzle'),
    style: 'border-sky-400 dark:bg-sky-950/5',
    textColor: 'text-sky-700 dark:text-sky-300',
  },
  proof: {
    title: 'Proof',
    indicator: getSVG(icons, 'check-square'),
    style: 'border-gray-500 dark:bg-gray-950/5',
    textColor: 'text-gray-700 dark:text-gray-300',
  },
  corollary: {
    title: 'Corollary',
    indicator: getSVG(icons, 'git-branch'),
    style: 'border-cyan-500 dark:bg-cyan-950/5',
    textColor: 'text-cyan-700 dark:text-cyan-300',
  },
  proposition: {
    title: 'Proposition',
    indicator: getSVG(icons, 'file-text'),
    style: 'border-slate-500 dark:bg-slate-950/5',
    textColor: 'text-slate-700 dark:text-slate-300',
  },
  axiom: {
    title: 'Axiom',
    indicator: getSVG(icons, 'anchor'),
    style: 'border-violet-600 dark:bg-violet-950/5',
    textColor: 'text-violet-700 dark:text-violet-300',
  },
  conjecture: {
    title: 'Conjecture',
    indicator: getSVG(icons, 'help-circle'),
    style: 'border-pink-500 dark:bg-pink-950/5',
    textColor: 'text-pink-700 dark:text-pink-300',
  },
  notation: {
    title: 'Notation',
    indicator: getSVG(icons, 'pen-tool'),
    style: 'border-slate-400 dark:bg-slate-950/5',
    textColor: 'text-slate-700 dark:text-slate-300',
  },
  remark: {
    title: 'Remark',
    indicator: getSVG(icons, 'message-circle'),
    style: 'border-gray-400 dark:bg-gray-950/5',
    textColor: 'text-gray-700 dark:text-gray-300',
  },
  intuition: {
    title: 'Intuition',
    indicator: getSVG(icons, 'lightbulb'),
    style: 'border-yellow-500 dark:bg-yellow-950/5',
    textColor: 'text-yellow-700 dark:text-yellow-300',
  },
  recall: {
    title: 'Recall',
    indicator: getSVG(icons, 'rotate-ccw'),
    style: 'border-blue-300 dark:bg-blue-950/5',
    textColor: 'text-blue-600 dark:text-blue-300',
  },
  explanation: {
    title: 'Explanation',
    indicator: getSVG(icons, 'help-circle'),
    style: 'border-lime-500 dark:bg-lime-950/5',
    textColor: 'text-lime-700 dark:text-lime-300',
  },
  example: {
    title: 'Example',
    indicator: getSVG(icons, 'code'),
    style: 'border-emerald-500 dark:bg-emerald-950/5',
    textColor: 'text-emerald-700 dark:text-emerald-300',
  },
  exercise: {
    title: 'Exercise',
    indicator: getSVG(icons, 'dumbbell'),
    style: 'border-indigo-500 dark:bg-indigo-950/5',
    textColor: 'text-indigo-700 dark:text-indigo-300',
  },
  problem: {
    title: 'Problem',
    indicator: getSVG(icons, 'alert-circle'),
    style: 'border-orange-600 dark:bg-orange-950/5',
    textColor: 'text-orange-700 dark:text-orange-300',
  },
  answer: {
    title: 'Answer',
    indicator: getSVG(icons, 'check'),
    style: 'border-teal-500 dark:bg-teal-950/5',
    textColor: 'text-teal-700 dark:text-teal-300',
  },
  solution: {
    title: 'Solution',
    indicator: getSVG(icons, 'check-circle-2'),
    style: 'border-emerald-600 dark:bg-emerald-950/5',
    textColor: 'text-emerald-700 dark:text-emerald-300',
  },
  summary: {
    title: 'Summary',
    indicator: getSVG(icons, 'list'),
    style: 'border-sky-500 dark:bg-sky-950/5',
    textColor: 'text-sky-700 dark:text-sky-300',
  },
}

const pluginConfig: pluginConfigType = [
  rehypeCallouts,
  {
    theme: 'obsidian',
    callouts,
    props: {
      //   titleProps: { class: 'custom-class1' },
      containerProps(_: any, type: string) {
        const newProps: Record<string, string> = {}
        newProps.class = `callout border-l-[0.25em] ${callouts[type]?.textColor} ${callouts[type]?.style}`

        return newProps
      },
    },
  },
]
export default pluginConfig
