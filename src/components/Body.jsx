import Slider from 'react-slick';

function Body() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <section className="mb-12">
    {/*about me */}    
    <div className=" p-48 ">
        <div className="flex items-center p-5">
            <div>
                <img src="Gonsalo.png" alt="" />
            </div>
            <div className=" flex flex-col items-center gap-4">
                <h1 className=" font-raleway text-3xl font-semibold"> SOBRE EL ARTISTA</h1>
                <p className=" font-light text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis doloremque eum nobis enim ratione sequi, ipsam molestias, ad saepe ipsum odit nulla vero obcaecati id sapiente aspernatur modi labore hic.</p>
                <p className=" font-raleway font-semibold "> - Only fail when you stop try -</p>
            </div>
        </div>
    </div>
    {/*project*/}
    <div className="flex flex-col items-center font-extralight ">
        <h2>FORMATO FISICO</h2>
        <h1 className=" font-raleway text-3xl font-semibold mb-10">ALGUNAS DE MIS OBRAS </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <img src="/1.png" alt="Image 1" className="w-full h-auto" />
        <img src="/2.png" alt="Image 2" className="w-full h-auto" />
        <img src="/3.png" alt="Image 3" className="w-full h-auto" />
        </div>
        <div className="flex gap-4 mt-8">
            <button className="  text-white bg-orange-600 pt-2 pb-2 pl-8 pr-8 font-raleway ">Shop Gallery</button>
        </div>
    </div>
</section>
  );
}

export default Body;
