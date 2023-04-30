import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sum-logo' className='w-28 obje-contain'/>
            <button type="button"
            onClick={() => window.open('https://github.com/anubhav0821/Article-Summarizer')}
            className='black_btn'
            >
                Github
            </button>
        </nav>
        <h1 className='head_text'>Summarize Articles with 
        <br className='max-md:hidden'/> <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplyfiy the article you want to read with Summize, an open source article summarizer that transforms leangthy articles into clear and consise summaries.
        </h2>
    </header>
  )
}

export default Hero