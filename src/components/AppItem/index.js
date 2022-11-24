import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="app-list-container">
      <img alt={appName} src={imageUrl} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
