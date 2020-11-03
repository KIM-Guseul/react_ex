import React,{ useState } from 'react';


function Request() {

    let [movieList,setMovieList] = useState([]), 
        [movies,setMovies]=useState([]);

    function req(){
        let input = document.querySelector('input[name=sj]').value;
        let newDate = new Date();
        newDate = newDate.getFullYear() + '-' + newDate.getMonth();

            //변수 movieList에 {파라미터값}을 추가
        let newMovie = [...movieList, {subject:input, date:newDate}];
        setMovieList(newMovie);//li값 변경

            //li에 값을 반복적으로 쌓아주는
        let li = newMovie.map((m,k)=>{
            return(
                <li key={k} data-num={k}> {m.subject} [{m.date}] <a>삭제</a> </li>
                //key={k}:react가 순서대로 값을 넣기위한 key값. data-num={k}:돔을 제어하기 위한 key값
            );
        });
        setMovies(li); //li값 기록. movies값 변경
    }

    function update(e){
        let num = e.target.dataset.num; 
        e.target.parentElement.remove(); //li 삭제. but 객체도 삭제해줘야해.

        let delMovie = movies.map(d=>{
            if(d.key != num){
                return(d);
            }
        });
        setMovies(delMovie);
        console.log(movies);
        
    }


    return(
        <section className="request">
            <article>
                <h2>INPUT</h2>
                <input type="text" name="sj"></input>
                <button onClick={req}>저장</button>
            </article>
            <article>
                <h2>금주 베스트셀러</h2>
                <ul onClick={update}>
                    {movies}
                </ul>
            </article>
        </section>
    );

}

export default Request;