module.exports = {
  assessments: {
    as_hr_02: {
      displayName: "Health & Fitness Assessment",
      sections: [
        {
          title: "Key Body Vitals",
          fields: [
            { label: "Overall Score", path: "accuracy" },
            { label: "Heart Rate", path: "vitalsMap.vitals.heart_rate" },
            { label: "BP Systolic", path: "vitalsMap.vitals.bp_sys" },
            { label: "BP Diastolic", path: "vitalsMap.vitals.bp_dia" }
          ]
        },
        {
          title: "Body Composition",
          fields: [
            { label: "BMI", path: "bodyCompositionData.BMI" },
            { label: "Body Fat %", path: "bodyCompositionData.BFC" }
          ]
        }
      ]
    },
    as_card_01: {
      displayName: "Cardiac Assessment",
      sections: [
        {
          title: "Key Body Vitals",
          fields: [
            { label: "Overall Score", path: "accuracy" },
            { label: "Heart Rate", path: "vitalsMap.vitals.heart_rate" }
          ]
        },
        {
          title: "Body Composition",
          fields: [{ label: "BMI", path: "bodyCompositionData.BMI" }]
        }
      ]
    }
  }
};
