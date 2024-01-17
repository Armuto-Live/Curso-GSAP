// gsap.to("#box",{
//     x:0,
//     y:300,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:.5
// })

// gsap.from("#box",{
//     x:0,
//     y:300,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:.5,
// })

// gsap.to("h1",{
//     x:500,
//     color:"blue",
//     duration:"3",
//     delay:1
// })

// gsap.to("h2",{
//     x:400,
//     color:"salmon",
//     duration:"2",
//     delay:2
// })

// gsap.to("h3",{
//     x:400,
//     color:"green",
//     duration:"1",
//     delay:3
// })


// gsap.to("h1",{
//     x:500,
//     color:"blue",
//     duration:1,
//     delay:1,
//     // stagger:1,
//     repeat:-1,
//     yoyo:true,
// })

let timeLine=gsap.timeline()
timeLine.to('h1',{
    x:600,
    duration:1,
    repeat:1,
})

timeLine.to('h2',{
    x:500,
    duration:2,
})

timeLine.to('h3',{
    x:400,
    duration:3,
})