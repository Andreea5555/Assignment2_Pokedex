import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    //a small about page with the languages/frameworks/API the app uses 
    //and some conclusions we had
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About This Pokédex 📓</h1>
        <section className="mb-8">
          <p className="mb-4">
            The application uses:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>React with TypeScript</li>
            <li>Vite as the build tool 🛐</li>
            <li>React Router for navigation</li>
            <li>PokéAPI for Pokémon data</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="mb-6">Our conclusions</h2>
          <p>This project was fun to put together, we had fun doing both the front end ⭐ and the backend. ✨</p>
          <p>At first we were thinking if we should go with something like a cocktails API or a Stardew Valley API but in the end we kept the pokemon one and it was still fun. 🥳</p>
          <p>We could have made some improvements as we also stated in the comments from the code but it came out pretty good in the end.👍😊👍</p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;