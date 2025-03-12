var tl = gsap.timeline();

// Animate h1 and h4 together
tl.from("#nav h1, #nav h4, #nav button", {
    y: -30,
    opacity: 0,
    delay: 0.1,
    duration: 0.25,
    stagger: 0.1
});
tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 p",{
    x:300,
    opacity:0,
    duration:0.5
},"-=.5")
tl.from(".center-part1 button",{
    x:-300,
    opacity:0,
    duration:0.5
},"-=1")
tl.from(".center-part2 img",{
    y:100,
    opacity:0,
    duration:0.25
},"-=.01")
tl.from(".sectionBottom img",{
    y:30,
    opacity:0,
    duration:0.25,
    stagger:0.2
})
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".services h3,.services p",
        scroller:"body",
        markers:false,
        start:"top 80%",
        end:"top 0%",
        scrub:2
    }
})
tl2.from(".services h3",{
    x:-100,
    opacity:0,
    duration:0.5,
})
tl2.from(".services p",{
    x:-100,
    opacity:0,
    duration:0.5,
},"-=0.5")
tl2.from(".line1",
    {
      x:-300,
      opacity:0,
      duration:0.5  
    }
)
tl2.from(".line2",
    {
      x:300,
      opacity:0,
      duration:0.5  
    }
)
tl2.from(".line3",
    {
      x:-300,
      opacity:0,
      duration:0.5  
    }
)
tl2.from(".line4",
    {
      x:300,
      opacity:0,
      duration:0.5  
    }
)