
import React,{useState} from 'react'; //useState : 데이터를 바꾸는 용도 (상태를 변화시키는 함수). 초기값 설정하면 한번만 읽고 다음부터는 읽지 않아.
import Con1 from './Contents.js';
import './App.css';


function App() { //App -> 컴포넌트 함수(시작 스펠링 : 대문자)

  return ( //값을 반환 하나의 값만 리턴할 수 있어. 하나로 묶어줘야해
    <section>
      <Btns/><Btns/><Btns/><Btns/>
      <Con1/>
    </section>
  );

} 
//jss : xml처럼 사용자가 만드는 이름으로 태그처럼 사용. so class 이름 지정할 때 className 사용


function Btns(){

  let [count,addCount] = useState(0); 
    //count = 0. 처음에 입력된 원본값/ addCount : 변경 후의 값
    //let countChange = [...count]; //count값이 복제되어 countChange에 담김
  
  function add(){
    addCount(count+1);
      //app 컨포넌터 안에서 변형값이 생기면 계속 재실행. 변수를 count++ 해도 실행될때마다 초기화되니까 안먹혀....
    }
    
  return(
    <button onClick={add}>COUNT {count}</button>
  );

} //함수의 컨포넌트화. 하나의 함수를 여러번 각각 실행할수 있어


export default App;
