import React,{ useState } from 'react';

import Tab from './component/Tab';
import List from './component/List';
import Request from './component/Request';
import Ajax from './component/Ajax';

import './App.css';


function App() {

  let conArr = {
    'Tab':<Tab />, 
    'List':<List />,
    'Request':<Request/>,
    'Ajax':<Ajax/>
  };
  let [cpnt,setCpnt] = useState(conArr['Tab']);

  function nav(e){
    let menuTxt = e.target.textContent;
    setCpnt(conArr[menuTxt]);
  }

  return(
    <>
      <header>
      <nav onClick={nav}>
          <a>Tab</a>
          <a>List</a>
          <a>Request</a>
          <a>Ajax</a>
        </nav>
      </header>
      <main>
        {cpnt}
      </main>
    </>
  );

}

export default App;
