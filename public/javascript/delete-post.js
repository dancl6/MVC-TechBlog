  
  async function deletePost(event) {
    event.preventDefault();
  console.log("i'm at post form handler")
    // const title = document.querySelector('#post-title').value.trim();
    // const comment = document.querySelector('#post-url').value.trim();
    // const user_id = req.session.user_id;
    // if (title && comment) {

        // router.delete('/:id', (req, res) => {
        //     Post.destroy({
        //       where: {
        //         id: req.params.id
        //       }

        const post_id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
          ];

          const response = await fetch('/api/posts/:id', {
            method: 'DELETE',
            body: JSON.stringify({
              post_id
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
    // }
  }
  
  document.querySelector('#delete-post').addEventListener('submit', deletePost);