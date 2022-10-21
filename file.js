var oimage = null;
var canvas = document.getElementById("can1");
var fileinput = document.getElementById("upload");
var f1 = null;
var f2 = null;
var f3 = null;
var f4 = null;

function uploadImage() {
  fileinput = document.getElementById("upload");
  oimage = new SimpleImage(fileinput);
  oimage.drawTo(canvas);
  f1 = new SimpleImage(fileinput);
  f2 = new SimpleImage(fileinput);
  f3 = new SimpleImage(fileinput);
}

function grayScale() {
  if (oimage == null || !oimage.complete() || f1 == null || !f1.complete()) {
    alert("Image Not Loaded!");
    return;
  } else {
    for (var pixel of f1.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    f1.drawTo(canvas);
  }
}

function rainbow() {
  if (oimage == null || !oimage.complete() || f2 == null || !f2.complete()) {
    alert("Image Not Loaded!");
    return;
  } else {
    for (var pixel of f2.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      var height = f2.getHeight();
      var length = height / 7;
      var y = pixel.getY();
      if (y < length) {
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(2 * avg - 255);
        }
      }
      if (y > length && y < 2 * length) {
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0.8 * avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(1.5 * avg - 51);
          pixel.setBlue(2 * avg - 255);
        }
      }
      if (y > 2 * length && y < 3 * length) {
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(2 * avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2 * avg - 255);
        }
      }
      if (y > 3 * length && y < 4 * length) {
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(2 * avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(2 * avg - 255);
          pixel.setGreen(255);
          pixel.setBlue(2 * avg - 255);
        }
      }
      if (y > 4 * length && y < 5 * length) {
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2 * avg);
        } else {
          pixel.setRed(2 * avg - 255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
        }
      }
      if (y > 5 * length && y < 6 * length) {
        if (avg < 128) {
          pixel.setRed(0.8 * avg);
          pixel.setGreen(0);
          pixel.setBlue(2 * avg);
        } else {
          pixel.setRed(1.2 * avg - 51);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
        }
      }
      if (y > 6 * length) {
        if (avg < 128) {
          pixel.setRed(1.6 * avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6 * avg);
        } else {
          pixel.setRed(0.4 * avg + 153);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(0.4 * avg + 255);
        }
      }
    }
    f2.drawTo(canvas);
  }
}

function redFilter() {
  if (
    oimage == null ||
    oimage == !oimage.complete() ||
    f3 == null ||
    f3 == !oimage.complete()
  ) {
    alert("Image not loaded!");
    return;
  } else {
    for (var pixel of f3.values()) {
      var avg = pixel.getRed() + pixel.getGreen() + pixel.getBlue();
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    f3.drawTo(canvas);
  }
}

function negative() {
  if (
    oimage == null ||
    oimage == !oimage.complete() ||
    f4 == null ||
    f4 == !oimage.complete()
  ) {
    alert("Image not loaded!");
    return;
  } else {
    for (var pixel of f4.values()) {
      var r2 = 255 - pixel.getRed();
      var g2 = 255 - pixel.getGreen();
      var b2 = 255 - pixel.getBlue();
      pixel.setRed(r2);
      pixel.setGreen(g2);
      pixel.setBlue(b2);
    }
    f4.drawTo(canvas);
  }
}

function clearButton(){
  var context= canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}
