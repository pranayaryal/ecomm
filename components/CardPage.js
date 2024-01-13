
export const CardPage = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
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
          </CardBody>


        </Card>

      </div>

    </div>
  )
};
