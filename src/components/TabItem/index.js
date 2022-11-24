import './index.css'

const TabItem = props => {
  const {tabItem, updateTabItem, isActive} = props
  const {tabId, displayText} = tabItem

  const onClickTab = () => {
    updateTabItem(tabId)
  }

  const activeClassName = isActive ? 'tab-button' : ''

  return (
    <li className="list-items">
      <button type="button" className="list-button" onClick={onClickTab}>
        {displayText}
      </button>
      <hr className={activeClassName} />
    </li>
  )
}
export default TabItem
