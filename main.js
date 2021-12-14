// 동그란 버튼을 누르면 스케일을 업시키기 위한 선택자를 classlist에 넣어줌
let circle = document.querySelector('.circle');
let menubgd= document.querySelector('.menu_background')
let grd = document.querySelector('.gradation')
//클릭 시 다음 함수를 실행한다.
    circle.onclick = function(){
        // 아래 3개의 클래스에 active 클래스를 붙임
        circle.classList.toggle('active')
        menubgd.classList.toggle('active')
        grd.classList.toggle('active')
    } 
    
    
                    
                    
                    
    //클릭하면 움직이는 걸로 대체하자.....
    //icon을 가져옴
    let icon = document.getElementsByClassName('icon');
    let rotate_deg = 0;
    //menubgd을 가져와 이벤트를 적용하고 클릭 시 rotate_1 함수를 실행
    menubgd.addEventListener('click', (e) => rotate_1(e.offsetX, e.offsetY));

    
    const rotate_1 = function(x,y){
        //x와 y 좌표들을 중심 기준으로 음수와 양수로 만들었다. 
        let cord_x = (75+x)-150;
        let cord_y =150-(y+75);
        //console.log((75+x)-150)
        //console.log(150-(y+75))
        // console.log(x,y)
        if(cord_x>0 && cord_y>0){
            console.log('here1')
            rotate_plus()
        }else if(cord_x>0 && cord_y<0){
            console.log('here2')
        rotate_plus()
    }else if(cord_x<0 && cord_y>0){
        console.log('here3')   
        rotate_minus()    
    }else if(cord_x<0 && cord_y<0){      
        console.log('here4')
        rotate_minus()
    }
    console.log(rotate_deg)
    //함수가 실행되면 아래의 스타일을 적용시킨다.
    menubgd.style.transform = `rotate(${rotate_deg}deg)`
    //icon은 배열로 여러클래스를 가져왔기 때문에 아래와 같이 적용시킴
    for(let i = 0; i<8; i++){
        icon[i].style.transform = `rotate(${-rotate_deg}deg)`
    }
    //console.log(icon[1])
}
//아이콘들의 정렬을 위해 45도씩 적용되는 함수 
const rotate_plus = function(){
    rotate_deg += 45;
}
const rotate_minus = function(){
    rotate_deg -= 45;
}


//흰색 원판 회전 시키기(하다가 실패함..)
    // let icon = document.querySelector('.icon');
    // let rotate_start_x = 0;
    // let rotate_gab = 0;
    // let is_rotate = false;
    
    // // 화면을 처음 클릭했을때 x좌표
    // const rotate_start = function(e){
        //     rotate_start_x = e;
        //     is_rotate = true;
        // }
        // const rotate_move = function(e){
            //     if(is_rotate){
                //         rotate_gab = (e - rotate_start_x)
                //     }
                //     menubgd.style.transform = `rotate(${rotate_gab}deg)`
                //     console.log(e)
                //     console.log(rotate_gab)
                
                // }
                // const rotate_end = function(){
                    //     is_rotate = false;
                    
                    // }
                    
                    // menubgd.addEventListener('mousedown', (e) => rotate_start(e.offsetX))
                    // menubgd.addEventListener('mousemove', (e)=> rotate_move(e.offsetX))
                    // menubgd.addEventListener('mouseup', ()=> rotate_end())
                    // menubgd.addEventListener('mouseout', ()=> rotate_end())