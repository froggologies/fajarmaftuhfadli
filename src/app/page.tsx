import Image from "next/image";

export default function Home() {
  const posts = getPosts();
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <main className="p-4 sm:px-10 md:px-16 lg:px-0">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-10 sm:max-w-xl md:max-w-2xl">
        {sortedPosts.map((post, i) => (
          <Post
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post.slug}
            image={`https://source.unsplash.com/random/300x200/` + `?${i}`}
          />
        ))}
        {sortedPosts.map((post, i) => (
          <Post
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post.slug}
            image={`https://source.unsplash.com/random/300x200/` + `?${i}`}
          />
        ))}
      </div>
    </main>
  );
}

interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
}

function Post({ title, description, date, slug, image }: Post) {
  return (
    <div className="flex gap-4 rounded-sm">
      <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-crust">
        <Image
          src={image}
          width={200}
          height={200}
          alt="post image"
          className="object-cover object-center"
        />
      </div>
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
