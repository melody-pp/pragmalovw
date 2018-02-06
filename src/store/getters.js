export default {
  getThemeText: state => pageNo => {
    const pageText = state.pageTextList[pageNo]

    return pageText && pageText.content || ''
  },
  getUnit: state => key => {
    const unit = state.unite[key]

    return unit && unit[0] || {}
  },

}
