import React,{useState} from 'react';
import "../App.css";

function Tab() {
    //  let contents = {tab01:<Con1/>,tab02:<Con2/>,tab03:<Con3/>}; textContent
      let contents = [<Con1/>,<Con2/>,<Con3/>];
      let [idx,setIdx] = useState(0);
    
      function tab(e){
        let li = document.querySelectorAll('.App li');
        let num = e.target.dataset.num;
    
        li.forEach(function(el,key){
        // [].map.call(li,function(el,key){
          if(num == key){
            el.classList.add('active');
          }else{
            el.classList.remove('active');
          }
        });
    
    
    //    e.target.className = 'active';
        setIdx(num);
      }
    
      return (
        <div className="App">
          <ul>
            <li onClick={tab} data-num="0">tab01</li>
            <li onClick={tab} data-num="1">tab02</li>
            <li onClick={tab} data-num="2">tab03</li>
          </ul>
          <div>
            {contents[idx]}
          </div>
        </div>
      );
    
    }
    
    
    function Con1(){
      return( <div>contents01</div> );
    }
    function Con2(){
      return( <div>contents02</div> );
    }
    function Con3(){
      return( <div>contents03</div> );
    }

    
export default Tab;
