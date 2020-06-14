async function commentFormHandler(event) {
    event.preventDefault();

    // const comme
    
  const title = document.querySelector('#post-title').value.trim();
  const comment = document.querySelector('#post-url').value.trim();
  const user_id = 5;
    if (comment) {
      console.log("I am here at comment");
      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({
          // id,
          // comment
          title,
          comment,
          user_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', commentFormHandler);