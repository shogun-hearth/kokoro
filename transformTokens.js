import { registerTransform, extend } from 'style-dictionary'
import baseConfig from './config.json'

registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: token => {
    return token.unit === 'pixel' && token.value !== 0
  },
  transformer: token => {
    return `${token.value}px`
  },
})

registerTransform({
  name: 'size/percent',
  type: 'value',
  matcher: token => {
    return token.unit === 'percent' && token.value !== 0
  },
  transformer: token => {
    return `${token.value}%`
  },
})

const StyleDictionaryExtended = extend(baseConfig)

StyleDictionaryExtended.buildAllPlatforms()