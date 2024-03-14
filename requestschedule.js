fetch("https://reservationdev.railink.co.id:8001/api/service/artsmidapp/middleware/schedule/arts_getschedule?org=origincode&des=destinationcode&date=yyyy-mm-dd&member_code=123123123123", { method: "GET"})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }); 