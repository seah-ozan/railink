fetch("https://reservationdev.railink.co.id:8001/api/service/artsmidapp/booking/booking-history?member_code=123123123", { method: "GET"})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }); 