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
      })
    //   .then (data =>{
    //       console.log(data)
    //   })
  
      if (response.ok) {
          console.log("success");
        window.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', postFormHandler);


// function test() {
//     const token = localStorage.getItem("s%3AIAYxg3yPLS0Rr8zZ9g7EOMXk2kEunMGy.m8nRIusIciDWjYgxm297%2BSQo%2F%2BG1oLmOfaI6326sKVs");
//     await fetch(`/api/post`, {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         body
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${token}`
//       }
//     });
//     document.location.replace("/dashboard");
//   };
 

// test();


  
//   async function deletePost(event) {
//     event.preventDefault();
//   console.log("i'm at post form handler")
//     const title = document.querySelector('#post-title').value.trim();
//     const comment = document.querySelector('#post-url').value.trim();
//     // const user_id = req.session.user_id;
//     if (title && comment) {
//       const response = await fetch('/api/posts/', {
//         method: 'POST',
//         body: JSON.stringify({
//           title,
//           comment
//         //   user_id
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       })
//     //   .then (data =>{
//     //       console.log(data)
//     //   })
  
//       if (response.ok) {
//           console.log("success");
//         window.location.reload('/dashboard');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }
  
//   document.querySelector('.new-post-form').addEventListener('submit', deletePost);