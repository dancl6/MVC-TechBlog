async function postFormHandler(event) {
    event.preventDefault();
  console.log("i'm at post form handler")
    const title = document.querySelector('#post-title').value.trim();
    const comment = document.querySelector('#post-url').value.trim();
    // const user_id = req.session.user_id;
    if (title && comment) {
      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({
          title,
          comment
        //   user_id
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
          console.log("success");
        // document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', postFormHandler);