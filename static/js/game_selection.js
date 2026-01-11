document.addEventListener('DOMContentLoaded', () => {
  const userMetaData = document.getElementById('userProfilData');
  const dataTab = document.getElementById('dataTab');
  if (!userMetaData || !dataTab) return

  const UMD_width = userMetaData.getBoundingClientRect().width
  const UMDoffset = -UMD_width;

  let isHidden = false
  
  dataTab.addEventListener('click', () => {

    isHidden = !isHidden

    if (!isHidden) {
      userMetaData.style.transform = `translateX(${UMDoffset}px)`;
      dataTab.style.transform = "translate(100%, -120%)";
    }
    else {
      userMetaData.style.transform = `translateX(0)`;
      dataTab.style.transform = "translate(70%, -120%)";
    }

  });
});


// document.addEventListener('DOMContentLoaded', () => {

//   const cards = document.querySelectorAll('.music_box');
//   const main = document.querySelector('main');
//   const cover_flow = document.getElementById('cover_flow');
//   const return_button = document.getElementById("return_button");
//   const search_input = document.querySelector(".ryuji_button");
//   const clear_button = document.getElementById("clear_button");

//   let previous_main = {
//     filter: '',
//     opacity: '',
//   };

//   // Clear search form content when user press the cross (div element)
//   clear_button.addEventListener('click', () => {
//     search_input.value = '';
//     search_input.focus(); // keep focus on form
//   });

//   // If one of the cards in the music box is clicked change main style and display cover flow
//   cards.forEach((card) => {
//     card.addEventListener('click', () => {

//       // Debug print
//       console.log('card clicked');
      
//       // Store previous style before changing
//       previous_main.filter = main.style.filter;
//       previous_main.opacity = main.style.opacity;

//       main.style.filter = 'blur(10px)';
//       main.style.opacity = '0.3';
//       cover_flow.style.display = 'block';
//     });
//   });

//   function close_coverFlow () {
//     // debug print
//     console.log('close cover flow');

//     // Return to previous main style and remove coverflow 
//     main.style.filter = previous_main.filter;
//     main.style.opacity = previous_main.opacity;
//     cover_flow.style.display = 'none'; // Or use classList.remove('visible') if class-based visibility
//   };

//   return_button.addEventListener('click', close_coverFlow);

//   document.addEventListener('click', (event) => {
//     // If cover flow is visible and user clicks outside it, close it
//     if (cover_flow.style.display === 'block' && !cover_flow.contains(event.target)) {
//       close_coverFlow(); 
//     }
//   });

//   // Prevent clicks inside the cover flow from propagating to the document
//   cover_flow.addEventListener('click', (event) => {
//     event.stopPropagation();
//   });
// });



