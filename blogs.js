// Generate 10 finance-related blog posts using AI
const blogPosts = [
  {
    title: "AI-Powered Finance Tips",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc. Nullam auctor, nunc id aliquam lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.",
    likes: 0,
    dislikes: 0,
  },
  // Add more blog posts here
];

// Function to render blog posts
function renderBlogPosts() {
  const blogList = document.querySelector(".blog-list");
  blogList.innerHTML = "";

  blogPosts.forEach((blog) => {
    const blogElement = document.createElement("div");
    blogElement.classList.add("blog");

    const titleElement = document.createElement("h2");
    titleElement.textContent = blog.title;

    const contentElement = document.createElement("p");
    contentElement.textContent = blog.content;

    const likeElement = document.createElement("button");
    likeElement.textContent = `Like (${blog.likes})`;
    likeElement.addEventListener("click", () => {
      blog.likes++;
      likeElement.textContent = `Like (${blog.likes})`;
    });

    const dislikeElement = document.createElement("button");
    dislikeElement.textContent = `Dislike (${blog.dislikes})`;
    dislikeElement.addEventListener("click", () => {
      blog.dislikes++;
      dislikeElement.textContent = `Dislike (${blog.dislikes})`;
    });

    const shareElement = document.createElement("button");
    shareElement.textContent = "Share";
    shareElement.addEventListener("click", () => {
      // Add sharing functionality here
    });

    const commentElement = document.createElement("button");
    commentElement.textContent = "Comment";
    commentElement.addEventListener("click", () => {
      // Add commenting functionality here
    });

    blogElement.appendChild(titleElement);
    blogElement.appendChild(contentElement);
    blogElement.appendChild(likeElement);
    blogElement.appendChild(dislikeElement);
    blogElement.appendChild(shareElement);
    blogElement.appendChild(commentElement);

    blogList.appendChild(blogElement);
  });
}

// Call the render function to display blog posts
renderBlogPosts();
