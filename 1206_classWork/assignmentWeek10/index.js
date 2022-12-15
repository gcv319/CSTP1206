fetch('https://api.github.com/repos/facebook/react/issues')
  .then(res => res.json())
  .then(data => console.log(data))