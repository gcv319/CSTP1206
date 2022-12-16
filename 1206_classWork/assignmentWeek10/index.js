const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[user-card-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  users.forEach(user => {
    const isVisible = user.issue.toUpperCase().includes(value.toUpperCase()) || user.tags.includes(value);
    user.element.classList.toggle("hide", !isVisible);
  })
})

fetch("https://api.github.com/repos/facebook/react/issues")
  .then(res => res.json())
  .then(data => {
    users = data.map(element => {
      let objLabels = [];
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const pfp = card.querySelector("[data-userPfp]");
      const issue = card.querySelector("[data-issue]");
      const tags = card.querySelector("[data-tags]");
      pfp.src = element.user.avatar_url;
      issue.textContent = element.title;
      element.labels.forEach(label => {
        tags.textContent += label.name + "\n";
        objLabels.push(label.name);
      });
      userCardContainer.append(card);
      return { issue: element.title, tags: objLabels, element: card }
    });
  });