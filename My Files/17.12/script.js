        // Function to fetch and filter comments
        function fetchAndFilterComments() {
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(comments => {
                const filteredComments = comments.filter(comment => comment.postId <= 5);
                console.log('Filtered Comments:', filteredComments);
            })
            .catch(error => {
                console.error('An error occurred:', error);
                console.log('An error occurred');
            });
        }

        // Function to send a POST request
        function sendPost() {
            const postData = {
                title: 'New Post',
                body: 'This is the body of the new post',
                userId: 1
            };

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Post created:', data);
            })
            .catch(error => {
                console.error('An error occurred:', error);
                console.log('An error occurred');
            });
        }

        // Call the functions
        fetchAndFilterComments();
        sendPost();

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
