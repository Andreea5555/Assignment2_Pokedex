import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
        backgroundColor: '#880000',
        padding: '10px 18px',
        border: '2px solid rgb(47, 6, 10)', //tried to keep this colour everywhere in the pages
    }}>
      <div className=" container mx-auto flex justify-between items-center">
      <img //adding a little bit of pizzaz with the image
          src="/Assignment2_Pokedex/pokemon-ball.png"
          style={{ 
            width: '50px',
            height: 'auto',
            marginLeft:'-90px',
        }} 
        />
        <Link to="/pokedex" 
          style={{
            font:'bold',
            color:'white',
            fontSize:'25px',
            marginRight:'900px',

        }}>Pokédex</Link>
        <div className="flex gap-4" /*making the navigation buttons so the user can travel easily through pages*/>
          <Link to="/" className="text-white ">Home</Link>
          <Link to="/about" className=" text-white ">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;