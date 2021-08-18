import TutorialTestimonial from './tutorial_testimonial'

export default function TestimonialFilled(props) {
  return (
    <TutorialTestimonial className="bg-white">
      <picture>
        <source
          srcSet={props.data.webp}
          type="image/webp"
          className="box-border"
        />
        <source
          srcSet={props.data.png}
          type="image/png"
          className="box-border"
        />
        <img
          alt="4 stars"
          loading="lazy"
          src={props.data.png}
          className="w-full align-middle border-0 box-border rounded-t-lg"
          />
      </picture>
      <div className="p-4">
        <picture>
          <source
            srcSet="https://www.powrcdn.com/tutorials/rating-4stars.webp"
            type="image/webp"
            className="box-border"
          />
          <source
            srcSet="
              https://www.powrcdn.com/tutorial_pages_new_design/rating-4stars.png
            "
            type="image/png"
            className="box-border"
          />
          <img
            alt="4 stars"
            loading="lazy"
            src="https://www.powrcdn.com/tutorial_pages_new_design/rating-4stars.png"
            className="w-24 max-w-full"
          />
        </picture>
        <h3
          className="mt-3 mb-2 w-64 font-gordita-medium tracking-normal text-color7 box-border text-base"
        >
          {props.data.title}
        </h3>
        <p
          className="mt-2 mb-2 w-64 text-sm italic font-light leading-5 text-color7"
        >
          {props.data.text}
        </p>
        <p
          className="mx-0 mt-0 mb-2 w-64 text-sm font-light leading-5 text-color7"
        >
          {props.data.author}
          <a
            href={props.data.link}
            className="font-medium text-blue-500 no-underline cursor-pointer focus:text-blue-800 focus:underline hover:font-normal hover:text-blue-800 hover:no-underline"
          > {props.data.app}</a
          >
        </p>
      </div>
    </TutorialTestimonial>    
  )
}
