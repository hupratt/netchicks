$(function () {
  var people = [];

  $.getJSON("database/vids.json", function (data) {
    $.each(data.video, function (i, f) {
      var tblRow = `

        <div class="card-deck">
        <!-- Beasts of No Nation - OPEN -->
        <div class="card carousel-cell">
          <img
            class="card-img-top"
            src="media/images/posters/beasts_of_no_nation.jpg"
          />
          <h5 class="card-title text-center">Beasts of No Nation</h5>
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
        </div>
        <!-- Beasts of No Nation - OPEN -->

        <!-- El Camino - OPEN -->
        <div class="card carousel-cell">
          <img
            class="card-img-top"
            src="media/images/posters/el_camino.jpg"
          />
          <h5 class="card-title text-center">El Camino</h5>
          <div class="row">
            <div class="col-3 text-left no-padding">2019</div>
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
              8.0
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
        </div>
        <!-- El Camino - OPEN -->

        <!-- The Dark Knight - OPEN -->
        <div class="card carousel-cell">
          <img
            class="card-img-top"
            src="media/images/posters/dark_knight.jpg"
          />
          <h5 class="card-title text-center">The Dark Knight</h5>
          <div class="row">
            <div class="col-3 text-left no-padding">2008</div>
            <div class="col-3 text-center no-padding selected">
              <a href="">
                <img src="media/icons/eye-selected.png" width="10" alt="" />
              </a>
            </div>
            <div class="col-3 text-left no-padding selected">
              <a href="">
                <img
                  src="media/icons/heart-selected.png"
                  width="10"
                  alt=""
                />
              </a>
            </div>
            <div class="col-3 text-right no-padding rating">
              <img
                src="media/icons/star.png"
                width="10"
                alt=""
                class="padding-bottom-sm"
              />
              9.0
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
        </div>
        <!-- The Dark Knight - OPEN -->

        <!-- Inception - OPEN -->
        <div class="card carousel-cell">
          <img
            class="card-img-top"
            src="media/images/posters/inception.png"
          />
          <h5 class="card-title text-center">Inception</h5>
          <div class="row">
            <div class="col-3 text-left no-padding">2010</div>
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
              8.8
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
        </div>
        <!-- Inception - OPEN -->

        <!-- Okja - OPEN -->
        <div class="card carousel-cell">
          <img class="card-img-top" src="media/images/posters/okja.jpg" />
          <h5 class="card-title text-center">Okja</h5>
          <div class="row">
            <div class="col-3 text-left no-padding">2017</div>
            <div class="col-3 text-center no-padding selected">
              <a href="">
                <img src="media/icons/eye-selected.png" width="10" alt="" />
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
              7.3
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
        </div>
        <!-- Okja - OPEN -->
      </div>
      <!-- First row of Card Deck Layout - OPEN -->
    `;
      $("#movies").append(tblRow);
    });
  });
});
