// BlogSection.tsx
import "./BlogSection.css";

interface Post {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
}

const featuredPosts: Post[] = [
  {
    title: "Refreshing Designs",
    description:
      "Quench satisfying designs to help you stir up emotion and tell a story.",
    category: "Resources",
    categoryColor: "#A855F7",
    imageUrl: "https://picsum.photos/1200/800?random=1",
  },
  {
    title: "Healthier Lifestyle",
    description:
      "Living a healthier lifestyle will help with your productivity and your mind-set.",
    category: "Lifestyle",
    categoryColor: "#3B82F6",
    imageUrl: "https://picsum.photos/1200/800?random=2",
  },
  {
    title: "Gaming Evolution",
    description:
      "Learn about the evolution of gaming and how it started a revolution.",
    category: "Entertainment",
    categoryColor: "#F59E0B",
    imageUrl: "https://picsum.photos/1200/800?random=3",
  },
];

const smallPosts: Post[] = [
  {
    title: "Best Workstations of the Year",
    description:
      "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
    category: "Inspiration",
    categoryColor: "#6366F1",
    imageUrl: "https://picsum.photos/600/400?random=4",
  },
  {
    title: "Eating for Productivity",
    description:
      "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
    category: "Food",
    categoryColor: "#DC2626",
    imageUrl: "https://picsum.photos/600/400?random=5",
  },
  {
    title: "A Design Mind-set",
    description:
      "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
    category: "Resources",
    categoryColor: "#A855F7",
    imageUrl: "https://picsum.photos/600/400?random=6",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <header className="blog-header">
        <h2>The Project Blog</h2>
        <p>Designs and layouts to help you with your app.</p>
      </header>

      <div className="blog-grid featured">
        {featuredPosts.map((post, idx) => (
          <article
            key={idx}
            className="card featured-card"
            style={{
              backgroundColor: post.categoryColor,
              backgroundImage: `url(${post.imageUrl})`,
            }}
          >
            <span className="category-pill featured-pill">
              {post.category.toUpperCase()}
            </span>
            <div className="text">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-grid small">
        {smallPosts.map((post, idx) => (
          <article key={idx} className="card small-card">
            <img src={post.imageUrl} alt={post.title} />
            <div className="content">
              <span
                className="category-pill featured-pill-small"
                style={{ backgroundColor: post.categoryColor }}
              >
                {post.category.toUpperCase()}
              </span>
              <h4>{post.title}</h4>
              <p>{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
