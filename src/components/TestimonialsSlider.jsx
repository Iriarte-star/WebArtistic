import  { useEffect, useState } from 'react';
import { GoTriangleDown } from "react-icons/go";

function TestimonialSlider() {
  // Use state to track the active testimonial ID
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  useEffect(() => {
    // Function to handle the image click event
    function handleImageClick(event) {
      const id = event.target.getAttribute('data-id');
      setActiveTestimonial(id);
    }

    // Attach the click event to all images
    const images = document.querySelectorAll("img[data-id]");
    images.forEach((image) => {
      image.addEventListener('click', handleImageClick);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      images.forEach((image) => {
        image.removeEventListener('click', handleImageClick);
      });
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render

  // Data for testimonials
  const testimonialsData = [
    {
      id: '1',
      name: 'John Doe',
      enterprise: 'ABC Inc.',
      testimonial:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime cupiditateof,',
      image: '/t1.jpg'  
    },
    {
      id: '2',
      name: 'Jane Smith',
      enterprise: 'XYZ Corp.',
      testimonial: 'Testimonial for Jane Smith.',
      image: '/t2.png'  

    },
    {
      id: '3',
      name: 'Bob Johnson',
      enterprise: 'EFG Ltd.',
      testimonial: 'Testimonial for Bob Johnson.',
      image: '/t3.png'  

    },
    {
      id: '4',
      name: 'Alice Brown',
      enterprise: 'LMN Co.',
      testimonial: 'Testimonial for Alice Brown.',
      image: '/t4.png'  

    },
    {
      id: '5',
      name: 'Charlie Wilson',
      enterprise: 'PQR Group',
      testimonial: 'Testimonial for Charlie Wilson.',
      image: '/t5.png'  

    },
  ];

  return (
    <section className=' flex  flex-col items-center'>
      <h2>ENTREGA INMEDIATA</h2>
      <h1 className=" font-raleway text-3xl font-semibold mb-10">NUESTROS CLIENTES FELICES</h1>
    <div className="flex flex-col mt-6 mb-40 justify-center ">
      <div className="ml-48 mr-48 text-center bg-cyan-400  font-raleway text-lg font-bold p-10  shadow-lg flex gap-5 justify-center">
        <GoTriangleDown className='w-6 h-6  text-white shadow-lg bg-white rounded-full'/>
        <p className="">
          {activeTestimonial
            ? `${testimonialsData[activeTestimonial - 1].name}, ${testimonialsData[activeTestimonial - 1].enterprise}: ${testimonialsData[activeTestimonial - 1].testimonial}`
            : 'Select a testimonial'}
        </p>
      </div>
      <div className="flex justify-center mt-8 gap-4">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="text-center flex gap-4">
            <img
              src={`${testimonial.image}`}
              alt={testimonial.name}
              className={`rounded-full w-24 h-24 ${
                activeTestimonial === testimonial.id ? 'border-4 border-black ' : ''
              }`}
              data-id={testimonial.id}
            />
            {activeTestimonial === testimonial.id && (
              <div className="flex flex-col text-left">
                <div className='  flex  justify-center'>
                    <GoTriangleDown className='w-6 h-6  text-cyan-400 shadow-lg bg-cyan-400 rounded-full'/>
                </div>
                <h2 className=' font-raleway font-bold text-xl'>{testimonial.name}</h2>
                <h3 className='  font-extralight'>{testimonial.enterprise}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
</section>
  );
}

export default TestimonialSlider;
