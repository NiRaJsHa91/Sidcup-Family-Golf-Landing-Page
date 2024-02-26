 const cur =document.querySelector('#curSor')
 const curBlur = document.querySelector('#cur-blur')
 document.addEventListener('mousemove',(e)=>{
    cur.style.left = e.x-12.5+'px';
    cur.style.top =e.y-12.5+'px';
    curBlur.style.left = e.x-150+'px';
    curBlur.style.top =e.y-150+'px';
 })

 const navHeads=document.querySelectorAll('#nav h4')
 navHeads.forEach((elem)=>{
    elem.addEventListener('mouseover',()=>{
        elem.style.color='#95c11e';
        cur.style.backgroundColor='transparent';
        cur.style.border='1px solid white'
        cur.style.scale=5
        cur.style.transition='scale ease 0.3s'
    })
 })
 navHeads.forEach((elem)=>{
    elem.addEventListener('mouseleave',()=>{
        elem.style.color='white';
        cur.style.backgroundColor='#95c11e';
        cur.style.border='none'
        cur.style.scale=1
        cur.style.transition='scale ease 0.4s'
    })
 })

//  card tilt effect

const card_1 = document.getElementById('card-1')
card_1.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x)

    const middleX = card_1.clientHeight / 2;
    const middleY = card_1.clientWidth / 2;
    // console.log(middleX)

    const offsetX = ((middleX - x)/middleX)*45
    const offsetY = ((middleY - y)/middleY)*10
    // console.log(offsetX)

    card_1.style.setProperty('--rotateY',-1*offsetX+'deg')
    card_1.style.setProperty('--rotateX',offsetY+'deg')

})
card_1.addEventListener('mouseleave',(e)=>{
   
    card_1.style.setProperty('--rotateY',0+'deg')
    card_1.style.setProperty('--rotateX',0+'deg')

})


//  ---------------------------------

 document.addEventListener('click',()=>{
    cur.classList.add('cur-on-click')
    setTimeout(()=>{
        cur.classList.remove('cur-on-click')
    },300)
 })

// ----------------------------------
gsap.to("#nav",{
    backgroundColor:'black',
    duration:'1',
    // delay:'1',
    height:'100px',
    scrollTrigger:{
        trigger:'nav',
        scroll:'body',
        // markers:'true',
        start:'top -10%',
        end:'top -11%',
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:'main',
        start:'top -25%',
        end:'top -70%',
        scrub:6
    }
})

gsap.to('#colon-left',{
    top:'30%',
    left:'15%',
    scrollTrigger:{
        trigger:'#colon-left',
        scroll:'body',
        // markers:'true',
        start:'top 50%',
        end:'top 47%',
        scrub:3
    }
})
gsap.to('#colon-right',{
    bottom:'33%',
    right:'15%',
    scrollTrigger:{
        trigger:'#colon-left',
        scroll:'body',
        start:'top 50%',
        end:'top 40%',
        // markers:'true',
        scrub:3

    }
})

