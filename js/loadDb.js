$(function () {
  var section = 0;

  $.getJSON("database/vids.json", function (data) {
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
});
