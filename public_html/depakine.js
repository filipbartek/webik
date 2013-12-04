// Author: Filip Bartek

function hide(event) {
  event.stopPropagation();
  var button = event.currentTarget;
  console.assert(button.tagName == "BUTTON");
  var header = button.parentElement;
  console.assert(header.tagName == "HEADER");
  var section = header.parentElement;
  console.assert(section.tagName == "SECTION");
  var classList = section.classList;
  if (classList.contains("expanded")) {
    classList.remove("expanded");
    button.textContent = "+";
  } else {
    classList.add("expanded");
    button.textContent = "-";
  }
}

function addPlusButton(header) {
  var plusButton = document.createElement("BUTTON");
  var plusText = document.createTextNode("+");
  plusButton.appendChild(plusText);
  plusButton.addEventListener("click", hide);
  header.insertBefore(plusButton, header.firstChild);
}

var sections = document.getElementsByTagName("section");
for (sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
  var section = sections[sectionIndex];
  var sectionChildren = section.childNodes;
  for (sectionChildIndex = 0; sectionChildIndex < sectionChildren.length;
      sectionChildIndex++) {
    var sectionChild = sectionChildren[sectionChildIndex];
    if (sectionChild.tagName == "HEADER") {
      var header = sectionChild;
      addPlusButton(header);
    }
  }
}
