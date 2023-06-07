import Profile from '@/components/home/Profile';
import Title from '@/components/home/Title';

export default function Home() {
  return (
    <div className="flex flex-col md:items-start gap-8 py-12 md:py-24 w-4/5 max-w-5xl mx-auto text-center md:text-left">
      <section>
        <Title emoji="💻" innerText={'Solmin Seo'} />
        <Profile />
      </section>
      <section>
        <Title emoji="📚" innerText="Posts" />
        {/* TODO: // Home -> minified blog list (gallary) */}
        {/* <List postList={postData} /> */}
      </section>
    </div>
  );
}
