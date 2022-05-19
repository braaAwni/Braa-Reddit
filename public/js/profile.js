const card = document.querySelector(".card2");
const name1 = document.querySelector(".name");
const email = document.querySelector(".title");
const logoutBtn = document.getElementById("logout");
const posts = document.querySelector(".post-body");
const userNa = document.querySelector(".username");
//user data card
fetch("/user")
  .then((data) => data.json())
  .then((value) => {
    const name3 = document.createElement("span");
    name3.className = "user";
    name3.textContent = value[0].username;
    userNa.appendChild(name3);
    name1.textContent = value[0].username;
    email.textContent = value[0].email;
  });

//logout
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/logout").then((data) => window.location.assign("/"));
});
//delete post
const deleteFunction = (id) =>
  fetch(`/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  });
//user post
const id = window.location.href.split("?")[1]?.split("=")[1];
if (!id) {
  fetch("/userPosts")
    .then((data) => data.json())
    .then((value) => {
      if (!value.length) {
        const noValue = document.createElement("div");
        noValue.className = "no-posts";
        noValue.textContent = "No Posts Yet";
        posts.appendChild(noValue);
      } else {
        value.forEach((e) => {
          const userDa = document.createElement("span");
          userDa.className = "by";
          userDa.textContent = "Posted by" + e.username;
          const titleDa = document.createElement("h3");
          titleDa.className = "titlePost";
          titleDa.textContent = e.title;

          const contentDa = document.createElement("p");
          contentDa.className = "content";
          contentDa.textContent = e.content;

          const btn = document.createElement("button");
          btn.className = "Delete";
          btn.textContent = "Delete";
          btn.onclick = () => {
            deleteFunction(e.id);
            window.location.assign("/profile");
          };

          const section = document.createElement("section");
          section.className = "cont";
          section.appendChild(userDa);
          section.appendChild(titleDa);
          section.appendChild(contentDa);
          section.appendChild(btn);

          posts.appendChild(section);
        });
      }
    });
} else {
  fetch(`/profile/${id}`)
    .then((data) => data.json())
    .then(([post, user]) => {
      name1.textContent = user[0].username;
      email.textContent = user[0].email;

      post.forEach((e) => {
        if (!post.length) {
          const noValue = document.createElement("div");
          noValue.className = "no-posts";
          noValue.textContent = "No Posts Yet";
          posts.appendChild(noValue);
        } else {
          const userDa = document.createElement("span");
          userDa.className = "by";
          userDa.textContent = "Posted by" + e.username;
          const titleDa = document.createElement("h3");
          titleDa.className = "titlePost";
          titleDa.textContent = e.title;

          const contentDa = document.createElement("p");
          contentDa.className = "content";
          contentDa.textContent = e.content;

          const section = document.createElement("section");
          section.className = "cont";
          section.appendChild(userDa);
          section.appendChild(titleDa);
          section.appendChild(contentDa);
          posts.appendChild(section);
        }
      });
    });
}
