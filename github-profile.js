async function fetchGitHubData() {
    const username = document.getElementById('username').value;
  
    // Fetch user profile data
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();
  
    // Fetch user repositories data
    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData = await repoResponse.json();
  
    // Display user profile data
    const profileElement = document.getElementById('profile');
    profileElement.innerHTML = `
      <h2>${userData.name}</h2>
      <p><strong>Username:</strong> ${userData.login}</p>
      <p><strong>Followers:</strong> ${userData.followers}</p>
      <p><strong>Following:</strong> ${userData.following}</p>
      <p><strong>Public Repositories:</strong> ${userData.public_repos}</p>
    `;
  
    // Display user repositories data
    const reposElement = document.getElementById('repos');
    reposElement.innerHTML = '<h2>Repositories</h2>';
    repoData.forEach(repo => {
      reposElement.innerHTML += `
        <div>
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <p>Language: ${repo.language}</p>
          <p>Stars: ${repo.stargazers_count}</p>
          <p>Watchers: ${repo.watchers_count}</p>
        </div>
      `;
    });
  }
  