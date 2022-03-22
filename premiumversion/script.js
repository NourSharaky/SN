var notesContainer = document.getElementsByClassName('addedNotes')[0];
var newNoteWindow = document.getElementsByClassName('newNoteWindow')[0];
var addbtn = document.getElementById("addbtn");
var checkIcon = document.getElementById("check-icon");
var XIcon = document.getElementById("x-icon");
var i = 0;


addbtn.addEventListener("click", function(){
  typeNote();
});
XIcon.addEventListener("click", function(){
  typeNote();
});
checkIcon.addEventListener("click", function(){
  createNote();
});

function typeNote() {
  if (newNoteWindow.style.display == "none") newNoteWindow.style.display = "block";
  else newNoteWindow.style.display = "none";
};

function createNote() {
  var noteText = document.getElementById("note-text").value;

  var noteBox =  document.createElement("div");
  noteBox.className = "box";
  noteBox.setAttribute("draggable","true");

  var note = document.createElement("div");
  note.className = "note";
  note.style.margin = margin();
  note.style.transform = rotate();
  note.style.background = color();

  var text = document.createElement("div");
  text.setAttribute("contenteditable","true");
  text.className = "text";
  text.innerHTML = noteText;

  var drag = document.createElement("i");
  drag.className ="fa-solid fa-grip-lines";
  drag.setAttribute("id","drag-icon")
  note.appendChild(drag);

  noteBox.appendChild(note);
  note.appendChild(text);
  notesContainer.insertAdjacentElement("beforeend",noteBox);

  note.addEventListener("mouseenter", function(){
    note.style.transform = "scale(1.1)";
  });
  note.addEventListener("mouseleave", function(){
    note.style.transform = "scale(1.0)" + rotate();
  });
  note.addEventListener("dblclick", function(){
    note.remove();
  });

  document.getElementById("note-text").value = "";

  dragging();
};

function margin() {
  var randomMargin = ["-5px","5px","-10px","10px","15px","-15px"];
  return randomMargin[Math.floor(Math.random()*randomMargin.length)];
};
function rotate() {
  var randomRotate = ["rotate(3deg)","rotate(-3deg)","rotate(5deg)","rotate(-5deg)","rotate(1deg)","rotate(-1deg)",];
  return randomRotate[Math.floor(Math.random()*randomRotate.length)];
};
function color() {
  var randomColor = ["#FFADAD","#FFD6A5","#FDFFB6","#CAFFBF","#9BF6FF","#A0C4FF","#BDB2FF","#FFC6FF","#fff","#9ADCFF","#FFF89A","#FFB2A6","#FF8AAE","#fff"];
  if (i> randomColor.length -1){
    i = 0;
  };
  return randomColor[i++];
};

var isDragging = null;
var items = [];

function handleDragStart(e) {
  isDragging = this;
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function handleDragOver(e) {
  if (e.preventDefault) e.preventDefault();
};

function handleDragEnter(e) {
  // object underneath the drag
  this.childNodes[0].classList.add('over');
};

function handleDragLeave(e) {
  this.childNodes[0].classList.remove('over');
};

function handleDrop(e) {
  // not fo2 nafso
  if (isDragging != this) {
    isDragging.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  };
};

function handleDragEnd(e) {
  items.forEach(function (item) {
    item.childNodes[0].classList.remove('over');
  });
};

function dragging() {
  items = document.querySelectorAll('.addedNotes .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
};

function bold(){
      document.execCommand("bold", false, null);
}
function italic(){
      document.execCommand("italic", false, null);
}
function underline(){
      document.execCommand("underline", false, null);
}
function strikeThrough(){
      document.execCommand("strikeThrough", false, null);
}
function uList(){
      document.execCommand("insertUnorderedList", false, null);
}
function oList(){
      document.execCommand("insertOrderedList", false, null);
}
function indent(){
      document.execCommand("indent", false, null);
}
function justify(){
      document.execCommand("justifyCenter", false, null);
}
function justifyLeft(){
      document.execCommand("justifyLeft", false, null);
}
function justifyRight(){
      document.execCommand("justifyRight", false, null);
}
function copy(){
      document.execCommand("copy", false, null);
}
function cut(){
      document.execCommand("cut", false, null);
}
function paste(){
      document.execCommand("paste", false, null);
}
function undo(){
      document.execCommand("undo", false, null);
}
function redo(){
      document.execCommand("redo", false, null);
}


// responsive nav bar
var lists = document.getElementsByClassName("get-li");
function Toggle(){
  // loop over list items
  // to display list
  if (lists[0].classList.contains("displayNone")) {
    for (i = 0; i < lists.length ; i++){
      lists[i].classList.replace("displayNone", "displayBlock")};
  }
  // to not display list
  else if (lists[0].classList.contains("displayBlock")) {
    for (i = 0; i < lists.length ; i++){
      lists[i].classList.replace("displayBlock", "displayNone") };
  };
};
