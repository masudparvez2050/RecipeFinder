
import HeroImage from '../images/undraw_cooking_p7m1.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            
            <img src={HeroImage} alt='people cookin' className="hero-img"/>
            
            <div className='description'>
                <div>
                    <h1 className='hero-title'>RecipeFinder</h1>
                    <p>Welcome to RecipeFinder, your go-to destination for finding and saving incredible recipes.</p>
                </div>
            </div>
        </section>
        
    )
}

export default Hero;