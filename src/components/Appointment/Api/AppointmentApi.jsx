export const createAppointment = (data) => ({
    url: "/add",
    method: "POST",
    body: data ,
  });


  export const getAppointmentById = (id) => ({
    url: `/get/${id}`,
    method: "GET",
  });
  