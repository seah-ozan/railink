fetch("https://reservationdev.railink.co.id:8001/api/service/artsmidapp/middleware/transaction/arts_booking/yyyy-mm-dd", { method: "POST"})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }); 