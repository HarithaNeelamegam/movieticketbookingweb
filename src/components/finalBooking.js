import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const FinalTicketPage = () => {
  let { finalBooking } = useSelector((state) => state.movies);
  const [code, setCode] = useState("");
  let { singleMovie } = useSelector((state) => state.movies);
  useEffect(() => {
    {
      finalBooking.forEach((item) => {
        const date = item.Date;
        const seats = item.Seats;

        const time = item.Time;

        const ticketData = `DATE:${date}SEATS:${seats}TIME:${time}`;
        console.log(ticketData);
        setCode(ticketData);


      });
    }
  }, []);

  return (
    <div className="qrcode justify-content-center">
      <h2>{singleMovie.name}</h2>
      <img src={singleMovie.imageUrl} />
      <QRCodeCanvas
        value={code}
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
      />
    </div>
  );
};
export default FinalTicketPage;
