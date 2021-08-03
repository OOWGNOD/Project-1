// index.js
function init(){
    const elTr = document.querySelector('.bd-box');
    const popup = document.querySelector('.popup');
    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','../data.json');  /* get, post */
    xhr.send(null);
    xhr.onload = function(){

        res = JSON.parse(xhr.responseText);
        //문서에서 불러온 내용을 객체타입으로 변경함(JSON.parse())
        
        res.work.forEach(function(v,k){
            tagList += `<tr><td>${v.num}</td><td><a href="#">${v.contents}</a></td><td>${v.date}</td><td>${v.views}</td></tr>`;
            //tagList변수에 li 3개를 더하기 할당함
        });        
        elTr.innerHTML = tagList;
        //ul태그안의 html코드를 tagList(li 3개)로 변경함

        const elTd = document.querySelectorAll('a');
        for(let i=0; i<elTr.length; i++){
            // 화면에 출력된 li에 클릭이벤트를 발생(i값이 i++증감연산자에 의해 0,1,2값으로 변경됨)
            elTd[i].addEventListener('click',function(){
                // 첫번째 li의 i값은 0, 두번째 i값은 1, 세번째 i값은 2
                popup.style='display:flex';
                //팝업창 스타일 display:flex로 변경
                dataChange(i);                
                //팝업창의 내용을 변경(클릭한 li의 값과 일치되는 내용으로 변경)
            });
        }

        function dataChange(k){
            //json work값중 0,1,2값의 내용을 변수에 할당
            num = res.work[k].num; 
            contents = res.work[k].contents;
            date = res.work[k].date;
            views = res.work[k].views;

            // 팝업안의 내용을 가져온 정보로 넣고 변수에 할당
            tagList = `<h2>${contents}[${date}]</h2>
                        <div>
                            내용이 없습니다.
                        </div>`;
            
            popup.innerHTML = tagList;
            //팝업안의 html을 tagList로 변경
        }

        popup.addEventListener('click',function(){
            popup.style = 'display:none';
        });

    }
}

window.onload = init;