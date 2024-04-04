      // enable hidden navbar
        const nav= document.querySelector(".nav")
        let lastScrollY = window.scrollY;
        
        window.addEventListener("scroll", () => {
           if (lastScrollY < window.scrollY){
            console.log("we are going down");
            nav.classList.add("nav--hidden");
           } else {
            console.log("we are going up");
            nav.classList.remove("nav--hidden");
           }
        
           lastScrollY = window.scrollY;
        });
        
              // enable hidden navbar for mobile view
         const nav2= document.querySelector(".nav2")
         let LastScrollY = window.scrollY;
         
         window.addEventListener("scroll", () => {
            if (LastScrollY < window.scrollY){
             console.log("we are going down");
             nav2.classList.add("nav---hidden");
            } else {
             console.log("we are going up");
             nav2.classList.remove("nav---hidden");
            }
         
            LastScrollY = window.scrollY;
         });

// add to cart mobile view and window view
  // Function to add or remove class based on screen size
  let listProductView = document.getElementsByClassName("listProduct")[0];
  function listProductForMobileWidth() {
   let listProductView = document.getElementsByClassName("listProduct")[0];
   if (window.innerWidth <= 768) {
     listProductView.classList.add('listProductForMobile');
   } else {
     listProductView.classList.remove('listProductForMobile');
   }
 }

   // Initial call to set class based on initial screen size
   listProductForMobileWidth();

   // Listen for resize event on window
   window.addEventListener('resize', function() {
     // Call the updateClass function on resize
     listProductForMobileWidth();
   });
