//your code here!
const infiList = document.getElementById('infi-list');

// Function to create and append list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List Item ${infiList.children.length + 1}`;
    infiList.appendChild(listItem);
  }
}

// Add 10 list items by default
addListItems(10);

// Function to check if the user has scrolled to the end of the list
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = infiList;

  // Check if the user has reached the bottom of the list
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addListItems(2); // Add 2 more list items
  }
}

infiList.addEventListener('scroll', handleScroll);

