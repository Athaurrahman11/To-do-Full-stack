import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import toast from 'react-hot-toast'
import { Homepage } from './pages/Homepage'
import { Routes,Route } from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
function App() {

  return (
    <div className='bg-blue-800'>
      
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/detail/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
