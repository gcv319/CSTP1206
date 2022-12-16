const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[user-card-container]");
const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
})

fetch("https://api.github.com/repos/facebook/react/issues")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const pfp = card.querySelector("[data-userPfp]");
      const issue = card.querySelector("[data-issue]");
      const tags = card.querySelector("[data-tags]");
      pfp.src = element.user.avatar_url;
      issue.textContent = element.title;
      element.labels.forEach(label => {
        console.log(label.name);
        tags.textContent += label.name + "\n";
      });
      userCardContainer.append(card);
    });
    console.log(data);
  });