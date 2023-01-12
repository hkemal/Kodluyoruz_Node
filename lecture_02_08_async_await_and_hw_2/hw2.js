const posts = [
  { id: 1, content: "lorem ipsum 1" },
  { id: 2, content: "lorem ipsum 2" },
  { id: 3, content: "lorem ipsum 3" },
];

const listPosts = () => {
  posts.forEach((p) => {
    console.log(`${p.id} - ${p.content}`);
  });
};

const addPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    posts.push(newPost);
    setTimeout(() => resolve(posts), 2000);
  });
  return promise;
};

// addPost({ id: 4, content: "lorem ipsum 4" }, listPosts);

async function showPosts() {
  try {
    await addPost({ id: 4, content: "lorem ipsum 4" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
