import { logo } from "../assets "

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
                <button type='button' onClick={() => window.open("https://github.com/Subashkumar-S/AI_Summarizer")} className='black_btn'>
                    Github
                </button>
            </nav>
            <h1 className='head_text font-inter'>Summarize Articles with <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className="desc font-satoshi">
            Effortless Content Digests: Revolutionize Your Reading Experience with OpenAI Article Summarizer API
            </h2>
        </header>
    )
}

export default Hero