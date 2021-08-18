export default function TutorialTestimonial(props) {
  return (
    <div
      className={`max-w-[290px] md:max-w-[344px] rounded-lg shadow-xl ${props.className}`}
    >
      <div className="box-border flex justify-end mr-14">
          <picture>
            <source
              srcSet="https://www.powrcdn.com/tutorials/quotes.webp"
              type="image/webp"
            />
            <source
              srcSet="https://www.powrcdn.com/tutorials/quotes.png"
              type="image/png"
            />
            <img
              alt="quotes"
              className="absolute w-8 max-w-full align-middle border-0 -mt-4 z-10"
              loading="lazy"
              data-cfsrc="https://www.powrcdn.com/tutorials/quotes.png"
              src="https://www.powrcdn.com/tutorials/quotes.png"
            />
          </picture>
        </div>

        <div className="z-0">
          <div
            className=""
          >
            { props.children }
          </div>
        </div>
    </div>
  )
}
