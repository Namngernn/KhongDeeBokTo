const forYouTab = document.getElementById('forYouTab');
const followingTab = document.getElementById('followingTab');
const container = document.getElementById('container');

function switchTab(tab) {
    if (tab === 'forYou') {
      // Code to show the "For You" tab and hide the "Following" tab
      forYouTab.style.display = 'block';
      // Code to update the content of the container based on the selected tab
      container.innerHTML = 'Content for For You tab';
    } else if (tab === 'followingTab') {
      // Code to show the "Following" tab and hide the "For You" tab
      followingTab.style.display = 'block';
      // Code to update the content of the container based on the selected tab
      container.innerHTML = 'Content for Following tab';
    }
  }


// function switchTab(tab) {
    // Remove 'active' class from all tabs
    // document.getElementById('forYouTab').classList.remove('active');
    // document.getElementById('followingTab').classList.remove('active');

    // Add 'active' class to the clicked tab
    // document.getElementById(tab + 'Tab').classList.add('active');

    // Add logic to update content based on the selected tab if needed
    // For example: display different content or make an AJAX request
    // document.getElementById('container').innerHTML = 'Content for ' + tab;
// }

document.addEventListener('DOMContentLoaded', function () {
    // Example data for cards (replace this with your actual data)
    const cardData = [
        { imageUrl: 'https://forfundeal.com/wp-content/uploads/2022/08/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89-%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89.jpg', caption: 'Hello', read:'Read more...' },
        { imageUrl: 'https://forfundeal.com/wp-content/uploads/2022/08/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89-%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89.jpg', caption: 'Hello', read:'Read more...' },
        { imageUrl: 'https://forfundeal.com/wp-content/uploads/2022/08/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89-%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89.jpg', caption: 'Hello', read:'Read more...' },

        // Add more data as needed
    ];

    
    // Function to create and append cards
    function createCard(imageUrl, caption,read) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
    
        // Heart icon
        const heartIcon = document.createElement('i');
        heartIcon.className = 'fas fa-heart'; // Font Awesome heart icon
    
        // Bookmark icon
        const bookmarkIcon = document.createElement('i');
        bookmarkIcon.className = 'fas fa-bookmark'; // Font Awesome bookmark icon
    
        const img = document.createElement('img');
        img.src = imageUrl;
    
        const containerDiv = document.createElement('div');
        containerDiv.className = 'container';
    
        const p = document.createElement('p');
        p.textContent = caption;
        const btn = document.createElement('p');
        btn.textContent = read;
    
        containerDiv.appendChild(heartIcon);
        containerDiv.appendChild(p);
        containerDiv.appendChild(bookmarkIcon);
    
        cardDiv.appendChild(img);
        cardDiv.appendChild(containerDiv);
        cardDiv.appendChild(btn);

        document.getElementById('container').appendChild(cardDiv);
    }
    cardData.forEach(card => {
        createCard(card.imageUrl, card.caption, card.read);
    });
});

