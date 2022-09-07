import Header from './components/Header/Header'

import styles from './App.module.scss'
import HeroSlider from './components/HeroSlider/HeroSlider'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSlider />
    </div>
  )
}

export default App
