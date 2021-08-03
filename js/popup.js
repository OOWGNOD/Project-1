const sign = document.getElementsByClassName('.signUp');
const userId = document.getElementsByClassName('.userId');
const userPass = document.getElementsByClassName('.userPass');
const userConfirm = document.getElementsByClassName('.userConfirm');
const userPhone = document.getElementsByClassName('.userPhone');
const userEmail = document.getElementsByClassName('.userEmail');


            sign.addEventListener('click',function(){
            if (!userId){
                alert('아이디를 입력하세요.')
                doc.getElementById('userId').focus();
                return;
            }
            if (!userPass){
                alert('비밀번호를 입력하세요.')
                doc.getElementById('userPass').focus();
    
                return;
    
            }
            
            if (!userConfirm){
                alert('비밀번호를 입력하세요.')
                doc.getElementById('userConfirm').focus();
                return;
            }
            if (!userPhone){
                alert('전화번호를 입력하세요.')
                doc.getElementById('userPhone').focus();
                return;
            }
            if (!userEmail){
                alert('이메일를 입력하세요.')
                doc.getElementById('userEmail').focus();
                return;
            }
            
            if (userPass!=userConfirm){
                alert('비밀번호가 서로 다릅니다.');
                doc.getElementById('userPass').Value='';
                doc.getElementById('userConfirm').Value='';
                doc.getElementById('userPass').focus();
            }
    
            if (userPass.length<6){
                alert('비밀번호는 최소 6자리 이상 작성해야 합니다.');
                doc.getElementById('userPass').Value=''
                doc.getElementById('userConfirm').Value=''
    
                doc.getElementById('userPass').focus();
                return;
            }
    const regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
    
            if (!regExp.text(useremail)){
                alert('이메일 형식이 아닙니다.');
                doc.getElementById('userEmail').Value='';
                doc.getElementById('userEmail').focus();
                return;
            }

            alert('회원가입을 축하합니다.');

        });



