// menyeleksi id di HTML
let getRangeBorder = document.getElementById("myRangeBorder");
let getRangerPadding = document.getElementById("myRangePadding");
let getBackgroundColor = document.getElementById("myBackgroundColor");
let getFontSize = document.getElementById("myRangeFontSize");
let getFontColor = document.getElementById("myFontColor");
let getFontWeight = document.getElementById("myFontWeight");
let babyButton = document.getElementById("myButton");

// variabel value css
let borderRadius = document.getElementById("border-radius");
let padding = document.getElementById("padding");
let bgColor = document.getElementById("background-color");
let fontSize = document.getElementById("font-size");
let fontColor = document.getElementById("font-color");
let fontWeight = document.getElementById("font-weight")

// mengambil data dari value
borderRadius.innerHTML = getRangeBorder.value;
padding.innerHTML = getRangerPadding.value;
bgColor.innerHTML = getBackgroundColor.value;
fontSize.innerHTML = getFontSize.value;
fontColor.innerHTML = getFontColor.value;
fontWeight.innerHTML = getFontWeight.value;

// funsi pada border radius
getRangeBorder.oninput = function() {
  borderRadius.innerHTML = this.value;
  babyButton.style.borderRadius = `${borderRadius.innerHTML}px`;
};

// funsi pada font weight
getFontWeight.oninput = function() {
  fontWeight.innerHTML = this.value;
  babyButton.style.fontWeight = `${fontWeight.innerHTML}`;
};

// funsi pada padding
getRangerPadding.oninput = function() {
  padding.innerHTML = this.value;
  babyButton.style.padding = `${padding.innerHTML}px`;
};

// fungsi pada background color
getBackgroundColor.oninput = function() {
  bgColor.innerHTML = this.value;
  babyButton.style.backgroundColor = `${bgColor.innerHTML}`;
};

// fungsi font size
getFontSize.oninput = function() {
  fontSize.innerHTML = this.value;
  babyButton.style.fontSize = `${fontSize.innerHTML}px`;
};

// fungsi font color
getFontColor.oninput = function() {
  fontColor.innerHTML = this.value;
  babyButton.style.color = `${fontColor.innerHTML}`;
};
