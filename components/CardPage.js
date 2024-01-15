
export const CardPage = () => {
  return (
    <div className="w-full md:w-1/4 mb-6 md:mb-0 md:p-3">
      <Card>
        <img
          className="max-w-full h-auto md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1608683063/Assets/lamborghini_mxb2j7.jpg"
          alt="Bugatti"
        />
        <CardBody>
          <CardTitle className="text-lg">Lamborghini</CardTitle>
          <CardText>
            Joe made these sugar cookies. Susan decorated them. When
            motorists sped in and out of traffic
          </CardText>
          <button className="text-dark-slate-grey flex py-3 rounded-md w-full bg-yellow-custom justify-center items-center mt-4 cursor-pointer">
            Add To Cart
          </button>
        </CardBody>


      </Card>

    </div>

  )
};

function Card({ children }) {
  return (
    <div className="relative flex flex-col border-2 border-gray-200 rounded-lg">
      {children}
    </div>
  )
}

function CardBody({ children }) {
  return <div className="block flex-grow flex-shrink p-5">{children}</div>
}

function CardTitle({ children }) {
  return <div className="font-medium text-gray-700 mb-3">{children}</div>
}

function CardText({ children }) {
  return <div className="text-gray-500">{children}</div>
}

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 ml-2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);
