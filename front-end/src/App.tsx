import { useState } from 'react'
import { Background } from './components/Background/Background'
import { QuestionCard } from './components/QuestionCard/QuestionCard'
import { Heart } from './components/Heart/Heart'
import styles from './App.module.scss'
function App() {
  const [finished, setFinished] = useState(false)
  return (
    <>
      <div className={styles.app}>
        <Background />
        {!finished
          ? <QuestionCard onFinish={() => setFinished(true)} />
          : <Heart />
        }
      </div>      
    </>
  )
}

export default App
