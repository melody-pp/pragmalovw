export default {
  getThemeText: state => pageNo => {
    const pageText = state.pageTextList[pageNo]

    return pageText && pageText.content || ''
  }
}
