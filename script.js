const browserInfo = {
  appVersion: navigator.appVersion,
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language
};
localStorage.setItem('systemInfo', JSON.stringify(browserInfo));


const footer = document.getElementById('footerInfo');
const info = JSON.parse(localStorage.getItem('systemInfo'));
footer.innerHTML = '<pre>' + JSON.stringify(info, null, 2) + '</pre>';


fetch('https://jsonplaceholder.typicode.com/posts/11/comments')
  .then(response => response.json())
  .then(comments => {
    const container = document.getElementById('comments');
    comments.forEach(comment => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${comment.name}</h3><p>${comment.body}</p><hr>`;
      container.appendChild(div);
    });
  
    for(let i = 1; i <= 5; i++) {
      const div = document.createElement('div');
      div.innerHTML = `<p>for: номер ${i}</p>`;
      container.appendChild(div);
    }
  
    let j = 0;
    while (j < 5) {
      const div = document.createElement('div');
      div.innerHTML = `<p>while: номер ${j}</p>`;
      container.appendChild(div);
      j++;
    }
});

setTimeout(() => {
  document.getElementById('feedbackModal').style.display = 'flex';
}, 60000);


const hour = new Date().getHours();
document.body.classList.add(hour >= 7 && hour < 21 ? 'day' : 'night');


function toggleTheme() {
  if (document.body.classList.contains('day')) {
    document.body.classList.remove('day');
    document.body.classList.add('night');
  } else {
    document.body.classList.remove('night');
    document.body.classList.add('day');
  }
}
