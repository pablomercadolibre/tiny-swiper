// eslint-disable-next-line import/no-named-default
import { default as Swiper, SwiperPlugin } from './core/index'

import SwiperPluginLazyload from './modules/lazyload'
import SwiperPluginPagination from './modules/pagination'
import SwiperPluginKeyboardControl from './modules/keyboardControl'

const plugins = [
    SwiperPluginLazyload,
    SwiperPluginPagination,
    SwiperPluginKeyboardControl
]

Swiper.use(plugins as Array<SwiperPlugin>)

export default Swiper
