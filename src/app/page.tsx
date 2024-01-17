export default function Home() {
  const posts = getPosts();
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <main className="flex flex-col gap-4 p-4">
      {sortedPosts.map((post) => (
        <Post
          key={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          slug={post.slug}
        />
      ))}
      {sortedPosts.map((post) => (
        <Post
          key={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </main>
  );
}

interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
}

function Post({ title, description, date, slug }: Post) {
  return (
    <div className="flex gap-4 rounded-sm p-2 transition-colors hover:bg-base hover:shadow-md">
      <div className="h-16 w-24 flex-shrink-0 rounded-sm bg-crust"></div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-subtext1">{description}</p>
        <span className="text-sm text-overlay0">{date}</span>
      </div>
    </div>
  );
}

function getPosts() {
  return [
    {
      title: "Hello, world!",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2023/12/01",
      slug: "hello-world",
    },
    {
      title: "Lorem ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2023/12/02",
      slug: "second-post",
    },
    {
      title: "Dolor sit amet",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2023/12/03",
      slug: "third-post",
    },
    {
      title: "Consectetur adipiscing elit",
      description: "This is my fourth post.",
      date: "2023/12/04",
      slug: "fourth-post",
    },
  ];
}
