document.addEventListener("DOMContentLoaded", function () {
  const concepts = document.querySelectorAll(".concept");
  const definitionBoxes = document.querySelectorAll(".definition-box");
  const btnRevisar = document.querySelector(".btn-revisar");
  const btnReiniciar = document.querySelector(".btn-reiniciar");

  // Drag and Drop funcionalidad
  concepts.forEach((concept) => {
    concept.addEventListener("dragstart", dragStart);
    concept.addEventListener("dragend", dragEnd);
  });

  definitionBoxes.forEach((box) => {
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
  });

  function dragStart(e) {
    e.target.classList.add("dragging");
    e.dataTransfer.setData("text/plain", e.target.dataset.pair);
  }

  function dragEnd(e) {
    e.target.classList.remove("dragging");
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add("highlight");
  }

  function dragLeave(e) {
    this.classList.remove("highlight");
  }

  function drop(e) {
    e.preventDefault();
    this.classList.remove("highlight");

    const conceptPair = e.dataTransfer.getData("text/plain");
    const definitionPair = this.dataset.pair;

    if (this.querySelector(".concept")) return;

    const draggingConcept = document.querySelector(
      `.concept[data-pair="${conceptPair}"]`
    );
    if (draggingConcept) {
      this.insertBefore(draggingConcept, this.querySelector(".dropzone"));
    }
  }

  // Revisar respuestas
  btnRevisar.addEventListener("click", () => {
    let correctas = 0;
    definitionBoxes.forEach((box) => {
      const concept = box.querySelector(".concept");
      box.classList.remove("correct", "incorrect");

      if (concept) {
        if (concept.dataset.pair === box.dataset.pair) {
          box.classList.add("correct");
          correctas++;
        } else {
          box.classList.add("incorrect");
        }
      }
    });

    alert(`Has acertado ${correctas} de ${definitionBoxes.length} relaciones.`);
  });

  // Reiniciar ejercicio
  btnReiniciar.addEventListener("click", () => {
    const conceptsColumn = document.querySelector(".concepts-column");
    concepts.forEach((concept) => {
      conceptsColumn.appendChild(concept);
    });
    definitionBoxes.forEach((box) => {
      box.classList.remove("correct", "incorrect", "highlight");
    });
  });
});
