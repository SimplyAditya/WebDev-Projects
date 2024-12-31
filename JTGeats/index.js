$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".request-dish").on("click", function () {
    $("#modalOverlay").css("display", "block");
    $("#requestDishModal").css("display", "block");
  });

  $("#cancelModal, #submitModal").on("click", function () {
    $("#modalOverlay").css("display", "none");
    $("#requestDishModal").css("display", "none");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".custom-video");
  const playButton = document.querySelector(".play-button");
  const videoWrapper = document.querySelector(".video-wrapper");

  function togglePlay() {
    if (video.paused) {
      video.play();
      playButton.classList.add("hidden");
    } else {
      video.pause();
      playButton.classList.remove("hidden");
    }
  }

  video.addEventListener("click", togglePlay);
  playButton.addEventListener("click", togglePlay);

  // Show play button when video ends
  video.addEventListener("ended", () => {
    playButton.classList.remove("hidden");
  });

  // Show play button when video is paused
  video.addEventListener("pause", () => {
    playButton.classList.remove("hidden");
  });

  // Hide play button when video starts playing
  video.addEventListener("play", () => {
    playButton.classList.add("hidden");
  });

  // Open Empty Cart Modal
  document.getElementById('emptyCartBtn').addEventListener('click', function() {
    document.getElementById('emptyCartModalModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
  });

  // Close Empty Cart Modal
  document.getElementById('closeEmptyCartModal').addEventListener('click', function() {
    document.getElementById('emptyCartModalModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
  });
});
