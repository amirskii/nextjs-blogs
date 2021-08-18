export default function QuotedBox(props) {
  return (
    <div
      className={`md:w-2/3 mx-4 md:mx-8 rounded-lg border-2 border-gray-200 border-solid box-border shadow-xl ${props.className}`}
    >
      <div className="-mt-3 box-border flex justify-center">
          <picture>
            <source
              srcSet="https://www.powrcdn.com/tutorials/quotes.webp"
              type="image/webp"
              className="box-border"
            />
            <source
              srcSet="https://www.powrcdn.com/tutorials/quotes.png"
              type="image/png"
            />
            <img
              alt="quotes"
              className="absolute w-6 max-w-full align-middle border-0"
              loading="lazy"
              data-cfsrc="https://www.powrcdn.com/tutorials/quotes.png"
              src="https://www.powrcdn.com/tutorials/quotes.png"
            />
          </picture>
        </div>

        <div className="p-8 box-border">
          <div
            className="relative px-4 lg:w-full box-border"
          >
            { props.children }
          </div>
        </div>
    </div>
  )
}
