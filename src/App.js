
import './App.css';
/*import About from './components/About';*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor="grey"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <div className="containe my-3">
     <TextForm heading="Enter your text to analyze"  mode={mode}/>
     </div>
     {/*<About/>*/}
    </>
  );
}

export default App;
