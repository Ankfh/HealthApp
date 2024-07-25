import React from "react";
import MuiButton from "../../shared/Button/UI/MuiButton";
import CalendarInputField from "../../shared/CalenderInput/view/CalenderInputView";
import Logout from "../../Navbar/UI/Logout";

const AppointmentView = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 m-5 max-w-lg w-full">
        <form className="w-full" onSubmit={props.handleSubmit(props.onSubmit)}>
          <div className="flex flex-col gap-16">
            <h2 className="w-full text-center font-bold text-lg">
              Schedule your free consultation.
            </h2>
            <div className="text-center">
              <CalendarInputField
                name="date"
                control={props.control}
                label="Enter date"
                type="text"
                errors={props.errors}
              />
            </div>
            <div className="text-center self-center w-full max-w-[11rem]">
              <MuiButton
                variant="contained"
                type="submit"
                title={"submit"}
                size={"small"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentView;
