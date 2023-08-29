const swiperMain = new Swiper('.swiperMain', {
    // Optional parameters
    autoplay: true,
    autoplay: {
      delay: 6000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

$(function () {
  for (let e = 0; e < 100; e++) new Swiper(".swiperProduct" + e, {
    spaceBetween: 40,
    enabled: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      630: {
        allowTouchMove: true,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1024: {
        allowTouchMove: true,
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
      1280: {
        allowTouchMove: true,
        slidesPerView: 4,
        grid: {
          rows: 4,
          fill: "row",
        }
      }
    },
    
    pagination: {
      el: '.swiper-pagination-product' + e,
    },
  });
});

// const swiperProduct = new Swiper('.swiperProduct', {
  // spaceBetween: 40,
  // enabled: true,

//   breakpoints: {
//     320: {
//       allowTouchMove: true,
//       slidesPerView: 1,
//       grid: {
//         rows: 1,
//         fill: "row",
//       }
//     },
//     630: {
//       allowTouchMove: true,
//       slidesPerView: 2,
//       grid: {
//         rows: 1,
//         fill: "row",
//       }
//     },
//     1024: {
//       allowTouchMove: true,
//       slidesPerView: 3,
//       grid: {
//         rows: 2,
//         fill: "row",
//       }
//     },
//     1280: {
//       allowTouchMove: true,
//       slidesPerView: 4,
//       grid: {
//         rows: 4,
//         fill: "row",
//       }
//     }
//   },
//   pagination: {
//     el: '.swiper-pagination-product',
//   },
// });