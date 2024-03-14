fetch("https://reservationdev.railink.co.id:8001/api/service/artsmidapp/middleware/info/get_stasiun", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }); 

  