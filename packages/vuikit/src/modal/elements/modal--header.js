import { mergeData } from '@vuikit/core/utils/vue'

export default {
  functional: true,
  name: 'ElModalHeader',
  render (h, { props, data, children }) {
    return h('div', mergeData(data, {
      class: 'uk-modal-header'
    }), children)
  }
}