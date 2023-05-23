import config from '@/config'
import ui from '@/ui'

export default ({
    Vue
}) => {
    Vue.use(ui)
    Vue.use(config)
}