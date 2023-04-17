const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");
// const cube1 = document.getElementById("cube1"); // if you want to add any animation to it.
const cube2 = document.getElementById("cube2");
const cube3 = document.getElementById("cube3");
const cube4 = document.getElementById("cube4");
const lastCubeFaces = document.querySelectorAll(".cube4__box");
const secondCube = document.querySelector(".cube2__box");

cubes.forEach((cube) => {
  cube.addEventListener("click", () => {
    container.classList.toggle("container-animate");
    cube2.classList.toggle("cube2-animate");
    cube3.classList.toggle("cube3-animate");
    cube4.classList.toggle("cube4-animate");
    lastCubeFaces.forEach((lastCubeFace) => {
      setTimeout(() => {
        lastCubeFace.classList.toggle("cube4__box__flip");
      }, 300);
    });
    setTimeout(() => {
      secondCube.classList.toggle("cube2__box__flip");
    }, 300);
  });
});
