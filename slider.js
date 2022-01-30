function Slider() {
  this.imageUrls = [];
  this.currentImageIndex = 0;
  this.showPrevBtn = null;
  this.showNextBtn = null;
  this.slideImage = null;
  this.start = function (elId) {
    var that = this;

    var elSelector = "#" + elId;
    var el = document.querySelector(elSelector);

    this.showPrevBtn = el.querySelector(".show-prev-btn");
    this.showNextBtn = el.querySelector(".show-next-btn");
    this.slideImage = el.querySelector(".slide-img");

    //subscribe to events
    this.showPrevBtn.addEventListener("click", function (e) {
      that.onShowPrevClick(e);
    });
    this.showNextBtn.addEventListener("click", function (e) {
      that.onShowNextClick(e);
    });

    //create images array
    this.imageUrls.push(
      "https://media.istockphoto.com/photos/cat-surfing-on-internet-picture-id1172290687?k=20&m=1172290687&s=612x612&w=0&h=xINesZHX6C7C6PH5PfRx2cDn8d69o01osus3YjXq1QU="
    );
    this.imageUrls.push(
      "https://media.istockphoto.com/photos/cat-on-glass-bottom-view-picture-id1171983473?k=20&m=1171983473&s=612x612&w=0&h=BQV-f1L5VNVIhLF2iPq-iOxnIuCNX8QynuchBdDY0qQ="
    );
    this.imageUrls.push(
      "https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg"
    );
    this.imageUrls.push(
      "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg"
    );

    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  };
  this.onShowPrevClick = function (e) {
    this.currentImageIndex--;
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;
    //disable prev button if need
    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  };
  this.onShowNextClick = function (e) {
    this.currentImageIndex++;
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;
    //disable next button if need
    if (this.currentImageIndex === this.imageUrls.length - 1) {
      this.showNextBtn.disabled = true;
    }
  };
}