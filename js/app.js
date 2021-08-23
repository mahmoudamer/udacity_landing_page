// global variables
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();

//  observer function to check if element in viewport or not
//  to add or remove 'active' class
const observerHandler = (section) => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    },
    { threshold: [0.7] }
  );

  io.observe(section);
};

// click handler function to be add to each li
// in order to scroll
const clickHandler = function (e, section) {
  e.preventDefault();
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

// looping through sections in order to create a nav link for each
// plus adding the click handler
for (const section of sections) {
  let li = document.createElement("li");
  li.textContent = section.getAttribute("data-nav");
  li.addEventListener("click", (e) => clickHandler(e, section));
  fragment.appendChild(li);
}

let navbar = document.getElementById("navbar__list");
navbar.appendChild(fragment);

sections.forEach(observerHandler);
