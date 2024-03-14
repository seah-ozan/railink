fetch("https://reservationdev.railink.co.id:8001/api/service/artsmidapp/member/activation?otp=123456", { method: "GET"})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }); 