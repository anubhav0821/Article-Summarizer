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
        <h1 className='head_text'>Enter the link to summarize the articles with 
        <br className='max-md:hidden'/> <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
        Summarize articles effortlessly with our innovative tool that leverages Chat GPT technology. Extract only the most important information from lengthy articles and enjoy clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero