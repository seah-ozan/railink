/*curl --location
'https://reservationdev.railink.co.id:8001/api/service/artsmidapp/member/register' \
 \
--header 'token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4' \
 \
--header 'Content-Type: application/json' \
 \
 --data \
 '{
    "name": "string",
    "email": "string_email",
    "phone_number": "string_number",
    "date_of_birth": "dddd-mm-yy",
    "gender": "char",
    "password": "string"
    "confirm_password": "string"
 }'*/ 

fetch("https://reservationdev.railink.co.id:8001/api/service/artsmidapp/member/register", { method: "POST"})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }); 