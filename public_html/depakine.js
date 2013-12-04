// Author: Filip Bartek

function hide(event) {
  event.stopPropagation();
  var header = event.currentTarget;
  var parent = header.parentElement;
  var tagName = parent.tagName;
  if (tagName == "SECTION") {
    var classList = parent.classList;
    if (classList.contains("hidden")) {
      classList.remove("hidden");
    } else {
      classList.add("hidden");
    }
  }
}

var sections = document.getElementsByTagName("section");
for (sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
  var section = sections[sectionIndex];
  var sectionChildren = section.childNodes;
  for (sectionChildIndex = 0; sectionChildIndex < sectionChildren.length;
      sectionChildIndex++) {
    var sectionChild = sectionChildren[sectionChildIndex];
    var tagName = sectionChild.tagName;
    if (tagName == "HEADER") {
      //console.log(sectionChild);
      sectionChild.addEventListener("click", hide);
    }
  }
  /*if (typeof section.childNodes === "undefined") {
    console.log("yes");
  } else {
    console.log("no");
  }*/
}
