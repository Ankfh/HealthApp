import { object, string, number, date } from "yup";

const PersonaldetailsValidation = (page) => {
  const firstpageValidation = object().shape({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    street: string().required("Street Address is required"),
    city: string().required("City is required"),
    state: string().required("State/Province is required"),
    country: string().required("Country is required"),
    age: number().required("Age is required"),
    ethnicity: string().required("Ethnicity is required"),
    race: string().required("Race is required"),
    gender: string().required("Gender is required"),
    preferences: string().required("Dietary preferences are required"),
    type: string().required("Cuisine type is required"),
    participant: number().required("Participant Height is required"),
    weight: number().required("Weight is required"),
    BMI: number().required("BMI is required"),
    phone: string().required("Phone is required"),
    DOB: number().required("DOB is required"),
    allergies: string().required("Any food Allergies is required"),
  });

  const secondpageValidation = object().shape({
    moreEnergy: string(),
    feelGoodAllDay: string(),
    sleepBetter: string(),
    reduceBellyFat: string(),
    banishBodyFat: string(),
    betterClearerSkin: string(),
    getRidOfWrinkles: string(),
    stopConstipation: string(),
    getRidOfIndigestion: string(),
    solveBloodSugarIssues: string(),
    lowerCholesterol: string(),
    reduceHighBloodPressure: string(),
    getRidOfAnxiety: string(),
    reverseAutoimmuneDisease: string(),
    lookGoodForEvent: string(),
    liveActiveHealthierLife: string(),
    recoverAfterOverindulgence: string(),
  });

  const thirdPageValidtion = object().shape({
    description: string().required("Brief description is required"),
    history: string().required("Programs & Treatments tried are required"),
    medicationHistory: string().required(
      "Medications and supplements are required"
    ),
    mentalHealth: string().required("Mental and emotional state is required"),
  });

  const fourthpageValidtion = object().shape({
    sedimentation_rate: string().required(
      "Erythrocyte sedimentation rate is required"
    ),
    cbc: string().required("Complete blood count CBC is required"),
    fasting_glucose: string().required("Fasting Glucose is required"),
    bun: string().required("Blood Urea Nitrogen is required"),
    creatinine: string().required("Creatinine is required"),
    calcium: string().required("Calcium is required"),
    lipid_panel: string().required("Lipid Panel is required"),
    triglycerides: string().required("Triglycerides is required"),
    hdl: string().required("HDL is required"),
    cholesterol: string().required("Cholesterol is required"),
    ldl: string().required("LDL is required"),
    hba1c: string().required("HBA1c is required"),
    vit_d: string().required("Vit-D is required"),
    b12: string().required("B12 is required"),
    homocysteine: string().required("Homocysteine is required"),
    tft_thyroid: string().required("TFT- Thyroid is required"),
  });

  switch (page) {
    case 1:
      return firstpageValidation;
    case 2:
      return secondpageValidation;
    case 3:
      return thirdPageValidtion;
    case 4:
      return fourthpageValidtion;
    default:
      return object();
  }
};

export default PersonaldetailsValidation;
