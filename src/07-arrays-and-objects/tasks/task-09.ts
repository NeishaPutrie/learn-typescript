/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

const typeScriptPost = []

for (let i = 0; i <posts.length; i++) {
  for (let j = 0; j < posts[i].hashtags.length; j++) {
    if (posts[i].hashtags[j] === "typescript") {
      typeScriptPost.push(posts[i])
      break
    }
  }
}

console.log(typeScriptPost)
console.log("")

const nestjsPosts = []

for (let i = 0; i < posts.length; i++) {
  for (let j = 0; j < posts[i].hashtags.length; j++) {
    if (posts[i].hashtags[j] === "nestjs") {
      nestjsPosts.push(posts[i])
      break
    }
  }
}

console.log(nestjsPosts)
console.log("")

let highestPost = posts[0]  // Anggap post pertama paling banyak likes
let highestLikes = posts[0].likes
 
for (let i = 1; i < posts.length; i++) {
  if (posts[i].likes > highestLikes) {
    highestLikes = posts[i].likes
    highestPost = posts[i]
  }
}

console.log(highestPost)
console.log(`Likes: ${highestPost.likes}`)
console.log("")

let totalLikes = 0
 
for (let i = 0; i < posts.length; i++) {
  totalLikes = totalLikes + posts[i].likes
}
 
console.log(`Total likes: ${totalLikes}`)
console.log("")

for (let i = 0; i < posts.length; i++) {
  const post = posts[i]
  
  console.log(`Post ${i + 1}`)
  console.log(`Author: ${post.author}`)
  console.log(`Content: ${post.content}`)
  console.log(`Hashtags: ${post.hashtags.join(", ")}`)
  console.log(`Likes: ${post.likes}`)
  console.log("---")
}
 
console.log("\n=== STATISTIK ===")
console.log(`Total Posts: ${posts.length}`)
console.log(`Total Likes: ${totalLikes}`)
console.log(`Average Likes per Post: ${(totalLikes / posts.length).toFixed(2)}`)
console.log(`Highest Likes: ${highestPost.likes} (by ${highestPost.author})`)
console.log(`Posts dengan #typescript: ${typeScriptPost.length}`)
console.log(`Posts dengan #nestjs: ${nestjsPosts.length}`)
 