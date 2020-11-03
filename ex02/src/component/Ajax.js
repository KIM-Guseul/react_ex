import React,{useEffect, useState} from 'react';
import $ from 'jquery';

function Ajax(){
    let [board,setBoard] = useState();
    useEffect(()=>{
        $.ajax({
            url:'./data.json',
            success:function(data){
                setBoard(data.board);
            }
        });
    },[]);

    return(
        <>
            <Board attr={board} num={0} />
        </>
    );
}

//props: 해당 컴포넌트에서 만들어진 모든 속성 호출 (attr, num)
function Board(props) {
    if(props.attr){

        let aa = props.attr.map(function(board,k){
            return(
                <div className="box" key={k}>
                    {board.tit}
                </div>
            );
        });
        return aa;
        
    }else{
        return '';
    }

    
}

export default Ajax;