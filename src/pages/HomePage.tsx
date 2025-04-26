import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const HomePage = () => {
  //here we just display some general starting info and the button to the PokedexPage
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Pokédex 🎉</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Find detailed information about all your favorite Pokémon!
        </p>
        <p className="text-xl mb-8 max-w-2xl">
          (don't forget to have fun )
        </p>
        <Link 
          to="/pokedex" 
          style={{
            display: 'inline-block',
            backgroundColor: '#880000',
            color: 'white',
            padding: '10px 18px',
            margin: '5px',
            border: '2px solid rgb(47, 6, 10)', // this color seemed better than normal red
            borderRadius: '12px',
            textDecoration:'none',
          }}
        >
          Explore and go 🏃 
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;