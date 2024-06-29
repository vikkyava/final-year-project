import Slideshow from '../components/Slideshow';
import IntroSection from '../components/IntroCard';

function HomePage() {
    return <div className='max-w-6xl mx-auto'>
        <Slideshow />
        <IntroSection />
        <div className='bg-gradient-to-r from-slate-800 via-slate-500 to-slate-700 h-60 outline-red-200 relative'>
            <div className='text-4xl  text-white absolute top-20 left-1/2 transform -translate-x-1/2'>Highlights</div>
            <div className='flex gap-1.5 absolute bottom-0 left-1/2 transform -translate-x-1/2 items-center justify-center'>
                <div className='bg-white w-40 p-4'>
                    Featured News
                </div>
                <div className='bg-green-500 text-white w-40 p-4'>
                    Upcoming Events
                </div>
            </div>
        </div>
    </div>
};

export default HomePage;