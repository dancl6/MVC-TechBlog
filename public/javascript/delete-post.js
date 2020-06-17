  
  async function deletePost(event) {
    event.preventDefault();
  console.log("i'm at post form handler")
  const postId = document.querySelector('input[name="post-id"]').value;


        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
          ];
          console.log(window.location.toString());
          console.log(id);

          const response = await fetch(`/api/posts/${postId}`, {
            method: 'DELETE',
  
          });
        
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
    // }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deletePost);