$(function () {
  var people = [];

  $.getJSON("database/vids.json", function (data) {
    $.each(data.video, function (i, f) {
      var tblRow = `

        
        <!-- Beasts of No Nation - OPEN -->
        <div class="card carousel-cell">
          <img
            class="card-img-top"
            src="media/images/posters/${f.thumbnail}"
          />
          <h5 class="card-title text-center">${f.title}</h5>
          <div class="row">
            <div class="col-3 text-left no-padding">2015</div>
            <div class="col-3 text-center no-padding">
              <a href="">
                <img src="media/icons/eye.png" width="10" alt="" />
              </a>
            </div>
            <div class="col-3 text-left no-padding">
              <a href="">
                <img src="media/icons/heart.png" width="10" alt="" />
              </a>
            </div>
            <div class="col-3 text-right no-padding rating">
              <img
                src="media/icons/star.png"
                width="10"
                alt=""
                class="padding-bottom-sm"
              />
              7.7
            </div>
          </div>
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
        <!-- Beasts of No Nation - OPEN -->

    `;
      $("#movies").append(tblRow);
    });
  });
});
