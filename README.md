# GitHub-Profile-Viewer
Try it here: https://bogdanmoale.github.io/GitHub-Profile-Viewer/

Simple web page for a GitHub Profile Viewer. To fulfill the functionality, the app use the github-profile.js script:

1. The fetchGitHubData function is defined to fetch data from the GitHub API for the given username.

2. It first retrieves the value entered in the input field with the id "username" using document.getElementById('username').value. This value represents the GitHub username provided by the user.

3. The function then makes two asynchronous requests using fetch() to the GitHub API:<br />

The first request fetches the user profile data by appending the username to the URL: https://api.github.com/users/${username}.<br />
The second request fetches the user's repositories data using a similar URL: https://api.github.com/users/${username}/repos.<br />
The response from each fetch request is then parsed using response.json() to extract the data in JSON format.<br />

4. Next, the function updates the content of the elements with the "profile" and "repos" IDs to display the user's profile and repository information.

5. For the profile data, it populates the "profile" element with the user's name, username, number of followers, number of people they follow, and the number of public repositories they have.

6. For the repositories data, it populates the "repos" element with a heading "Repositories" followed by a list of repositories. For each repository, it displays the name, description (if available), programming language, number of stars, and number of watchers.

8. The repository data is looped through using forEach to create a new HTML structure for each repository, and then it's added to the "repos" element using innerHTML.

