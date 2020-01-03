function sun() {
    $("#sun").animate({ opacity: .7 }, 1000).animate({ opacity: 1 }, 1000);
    setTimeout(sun, 2000);
  }
  
  function cloud1() {
    $("#cloud1").animate({ left: '+=1050px' }, 10000).animate({ left: '-150px' }, 0);
    setTimeout(cloud1, 10000);
  }
  
  function cloud2() {
    $("#cloud2").animate({ left: '+=1150px' }, 9000).animate({ left:"-250px" }, 0);
    setTimeout(cloud2, 9000);
  }
  
  function cloud3() {
    $("#cloud3").animate({ left: '+=1000px' }, 6000).animate({ left: '-100px' }, 0);
    setTimeout(cloud3, 6000);
  }

  sun();
  cloud1();
  cloud2();
  cloud3();