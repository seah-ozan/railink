fetch("https://reservationdev.railink.co.id:8001/api/service/artsmidapp/member/login", { method: "POST"})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }); 