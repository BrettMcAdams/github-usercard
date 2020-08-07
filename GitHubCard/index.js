import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


const githubData = axios.get('https://api.github.com/users/BrettMcadams')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const entry = document.querySelector('.cards')

function gitMaker(gitObj) {
  
  const myCard = document.createElement('div')
  const myImg = document.createElement('img')
  const myCardInfo = document.createElement('div')
  const myName = document.createElement('h3')
  const myUsername = document.createElement('p')
  const myLocation = document.createElement('p')
  const myProfile = document.createElement('p')
  const myAddress = document.createElement('a')
  const myFollowers = document.createElement('p')
  const myFollowing = document.createElement('p')
  const myBio = document.createElement('p')

  myCard.appendChild(myImg)
  myCard.appendChild(myCardInfo)
  myCardInfo.appendChild(myUsername)
  myCardInfo.appendChild(myLocation)
  myCardInfo.appendChild(myProfile)
  myCardInfo.appendChild(myFollowers)
  myCardInfo.appendChild(myFollowing)
  myCardInfo.appendChild(myBio)
  myCardInfo.appendChild(myName)
  myProfile.appendChild(myAddress)

  myCard.classList.add('card')
  myCardInfo.classList.add('card-info')
  myName.classList.add('name')
  myUsername.classList.add('username')

  gitObj.then((response) => {
    myName.innerHTML = response.data.name;
    myUsername.innerHTML = response.data.login;
    myLocation.innerHTML = response.data.location;
    myImg.src = response.data.avatar_url;
    myAddress.href = response.data.html_url;
    myAddress.innerHTML = response.data.html_url;
    myFollowers.innerHTML = `Followers: ${response.data.followers}`;
    myFollowing.innerHTML = `Following: ${response.data.following}`;
  });

  return myCard
}

const gitPanel = gitMaker(githubData)

entry.appendChild(gitPanel)


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
