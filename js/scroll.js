let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progressValue");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(scrollProgress.style){
      if (pos > 100) {
        scrollProgress.style.display = "flex";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.style.background = `conic-gradient(#DC3545 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;