import Header from './components/Header/Header'
import HeroSlider from './components/HeroSlider/HeroSlider'
import CardList from './components/CardList/CardList'
import Drawer from './components/Drawer/Drawer'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <Drawer />
      {/* <Header />
      <HeroSlider />
      <CardList /> */}
    </div>
  )
}

export default App
