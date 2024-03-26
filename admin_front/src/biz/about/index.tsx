function Blog({ posts }) {
    return (
        <ul>
            {posts.map((post,index) => (
                <li key={index}>{post.title}</li>
            ))}
        </ul>
    )
}
export default Blog