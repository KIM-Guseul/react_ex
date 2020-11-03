import React from 'react';

function List() {

let data = [
    {tit:'회사소개', info:'회사소개 설명글입니다.'},
    {tit:'CEO', info:'CEO 설명글입니다.'},
    {tit:'오시는길', info:'오시는길 설명글입니다.'}
]

let dataArr = [];
data.forEach((d,k) => {
    dataArr.push(
        <div key={k}>
            <h2>{d.tit}</h2>
            <p>{d.info}</p>
        </div>
    );
});

  return(
    <article className="company">
        {dataArr}
    </article>
  );
}

export default List;