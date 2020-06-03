// 加上自定义的左侧工具栏
import CustomPalette from '../palette_append/CustomPalette.js'
import CustomRenderer from './CustomRenderer.js'

export default {
    __init__: ['customPalette', 'customRenderer'],
    customPalette: ['type', CustomPalette],
    customRenderer: ['type', CustomRenderer]
}