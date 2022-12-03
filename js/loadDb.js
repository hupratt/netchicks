const loadMovies = $.getJSON("database/vids.json", function (data) {
  var section = 0;
  $.each(data.video, function (i, f) {
    var tblRow = `

      
      <!-- ${f.title} - OPEN -->
      <div class="card carousel-cell flex-box">
        <img
          class="card-img-top"
          src="media/images/posters/${f.thumbnail}"
        />
        <h5 class="card-title text-center">${f.title}</h5>

        <div class="overlay">
          <div class="text">
            <a
              href="#"
              class="btn btn-secondary btn-sm margin-top-under-sm"
              role="button"
              aria-pressed="true"
            >
              <img src="media/icons/info.png" width="10" alt="" />
              Info
            </a>
            <a
              href="#"
              class="btn btn-primary btn-sm margin-top-under-sm"
              role="button"
              aria-pressed="true"
            >
              <img src="media/icons/play.png" width="10" alt="" />
              Watch
            </a>
          </div>
        </div>
      <!-- ${f.title} - CLOSE -->

  `;

    if (i % 4 === 0) {
      section++;
      $(
        `<div class="flex-boxes card-deck section-` + section + `"></div>`
      ).appendTo("#movies");
    }
    $(tblRow).appendTo(".section-" + section);
  });
});

const loadBanner = $.getJSON("database/vids.json", function (data) {
  $.each(data.banner, function (i, f) {
    var tblRow = `

    
    <!-- ${f.title} - OPEN -->
    <div class="carousel-item">
      <img
        class="d-block carouselcustomaspectratio"
        src="media/images/banner/banner_stranger_things.png"
        alt="Second slide"
      />
      <div
        class="carousel-caption d-none d-md-block container-lg align-middle"
      >
        <h1>${f.title}</h1>
        <p>
          <a href="#">2016</a> | +16 | 3 Seasons | <a href="#">TV Shows</a>
        </p>
        <p class="margin-top-under-sm">
          When a young boy vanishes, a small town uncovers a mystery
          involving secret experiments, terrifying supernatural forces and
          one strange little girl.
        </p>
        <p>
          Starring: <a href="#">Winona Ryder</a>,
          <a href="#">David Harbour</a>, <a href="#">Finn Wolfhard</a>
        </p>
        <p>Creators: <a href="#">The Duffer Brothers</a></p>
        <div class="margin-top-under-sm">
          <a
            href="#"
            class="btn btn-primary btn-lg margin-right"
            role="button"
            aria-pressed="true"
          >
            <img src="media/icons/play.png" width="20" alt="" />
            Watch
          </a>
          <a
            href="#"
            class="btn btn-secondary btn-lg margin-right"
            role="button"
            aria-pressed="true"
          >
            <img src="media/icons/plus.png" width="15" alt="" />
            Add List
          </a>
        </div>
      </div>
    </div>
    <!-- ${f.title} - CLOSE -->


  `;

    $(tblRow).appendTo("#Carousel");
    // if (i === 0) {
    //   $("carousel-inner").first().addClass("active");
    // }
  });
});

$(document).ready(function () {
  console.log("ready!");
});
