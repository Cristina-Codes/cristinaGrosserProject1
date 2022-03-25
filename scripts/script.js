// Mobile Nav Slide-Out-Menu
// listen for a click on the .slideOutIcon
const navIcon = document.querySelector('.slideOutIcon');

navIcon.addEventListener('click', function(){
  // toggle between classes for off-screen, on-screen nav positioning
  const slideOutNav = document.querySelector('.slideOutNav');
  slideOutNav.classList.toggle('hidden');
  slideOutNav.classList.toggle('showMe');
})

// Add post to blog page sans images

// listen for submit on post comment button
  // grab the user input name
  // grab the user input message
  // grab the date and time from somewhere in the void

  //create  
    // div.comment
    // div.commentText
    // p.commentDate <!-- date pulled from the void --> <!-- "by" userInputName -->
    // p.commentP <!-- comment pulled from the textarea -->


// listen for submit on post comment button
const commentForm = document.querySelector('.commentForm');

// functions
const daySuffix = (day) => {
  let suffix = "";
  if(day === 1 || day === 21 || day === 31){
    suffix = "st";
    return suffix;
  } else if (day === 2 || day === 22){
    suffix = "nd";
    return suffix;
  } else if (day === 3 || day === 23){
    suffix = "rd";
    return suffix;
  } else {
    suffix = "th";
    return suffix;
  }
}

const postedDate = (month, day, year, userName) => {
  // get string for month name
  const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = monthArray[month];

  daySuffix(day); // st, nd, rd, or th
  const fullDay = `${day}${daySuffix(day)}`;

  const fullDate = `Posted ${monthName} ${fullDay}, ${year} by ${userName}`

  return fullDate;
}

const postThatComment = (fullDate, commentValue) => {
  //create  
  const commentSection = document.querySelector('.commentSection');

  //create the date/by paragraph
  const commentDate = document.createElement('p');
  commentDate.textContent = fullDate;
  commentDate.classList.add('commentDate');

  // create the comment
  const commentP = document.createElement('p');
  commentP.textContent = commentValue;
  commentP.classList.add('commentP');

  // append to new commentText div
  const commentText = document.createElement('div');
  commentText.classList.add('commentText');
  commentText.appendChild(commentDate);
  commentText.appendChild(commentP);

  // append to top most div for individual comments
  const commentDiv = document.createElement('div')
  commentDiv.classList.add('comment');
  commentDiv.appendChild(commentText);
    
  // append to the commentSection
  commentSection.appendChild(commentDiv);
}


// event listener
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // grab user name
  const nameInput = document.querySelector('input[type=text]');
  const userName = nameInput.value;
   //grab user comment
  const textarea = document.querySelector('textarea');
  const commentValue = textarea.value;

  // clear the form
  const emailInput = document.querySelector('input[type=email]');
  emailInput.value = "";
  nameInput.value = "";
  textarea.value = "";

  // get the date on submit
  const today = new Date();

  const month = today.getMonth();
  const day = today.getDate();
  const year = today.getFullYear();

  const fullDate = postedDate(month, day, year, userName);

  // posting the comment
  postThatComment(fullDate, commentValue);
})
