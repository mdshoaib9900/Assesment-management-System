module.exports = {
  // -------------------------
  // Health & Fitness Assessment
  // -------------------------
  as_hr_02: {
    sections: [
      "Key Body Vitals",
      "Heart Health",
      "Stress Level",
      "Fitness Levels",
      "Posture",
      "Body Composition"
    ],
    fields: {
      // Top-level accuracy
      overallHealthScore: "accuracy",

      // Key Body Vitals
      heartRate: "vitalsMap.vitals.heart_rate",
      bpSys: "vitalsMap.vitals.bp_sys",
      bpDia: "vitalsMap.vitals.bp_dia",

      // Fitness Levels → special mapping (exercise with id: 235 → setList[0].time)
      cardioEndurance: { exerciseId: 235, field: "time" },

      // Body Composition
      bmi: "bodyCompositionData.BMI"
    }
  },

  // -------------------------
  // Cardiac Assessment
  // -------------------------
  as_card_01: {
    sections: [
      "Key Body Vitals",
      "Cardiovascular Endurance",
      "Body Composition"
    ],
    fields: {
      // Top-level accuracy
      overallHealthScore: "accuracy",

      // Key Body Vitals
      heartRate: "vitalsMap.vitals.heart_rate",
      bpSys: "vitalsMap.vitals.bp_sys",
      bpDia: "vitalsMap.vitals.bp_dia",

      // Cardio Endurance → same mapping from exerciseId: 235
      cardioEndurance: { exerciseId: 235, field: "time" },

      // Body Composition
      bmi: "bodyCompositionData.BMI"
    }
  }
};
