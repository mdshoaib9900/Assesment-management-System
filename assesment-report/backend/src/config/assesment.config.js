module.exports = {
  assessments: {
    // -------------------------
    // Health & Fitness Assessment
    // -------------------------
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
          title: "Heart Health",
          fields: [
            { label: "Wellness Score", path: "vitalsMap.wellness_score" },
            { label: "Health Risk Score", path: "vitalsMap.health_risk_score" }
          ]
        },
        {
          title: "Stress Level",
          fields: [
            { label: "Stress Index", path: "vitalsMap.metadata.heart_scores.stress_index" },
            { label: "pNN50 %", path: "vitalsMap.metadata.heart_scores.pNN50_per" }
          ]
        },
        {
          title: "Fitness Levels",
          fields: [
            // Example: cardio endurance test → exerciseId: 235
            { label: "Cardiovascular Endurance (Jog Test Time)", special: { exerciseId: 235, field: "time" } },
            { label: "VO2 Max", path: "vitalsMap.metadata.physiological_scores.vo2max" }
          ]
        },
        {
          title: "Posture",
          fields: [
            { label: "Posture Status", path: "vitalsMap.posture" }
          ]
        },
        {
          title: "Body Composition",
          fields: [
            { label: "BMI", path: "bodyCompositionData.BMI" },
            { label: "Body Fat %", path: "bodyCompositionData.BFC" },
            { label: "Lean Mass", path: "bodyCompositionData.LM" }
          ]
        }
      ]
    },

    // -------------------------
    // Cardiac Assessment
    // -------------------------
    as_card_01: {
      displayName: "Cardiac Assessment",
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
          title: "Cardiovascular Endurance",
          fields: [
            { label: "Jog Test Time", special: { exerciseId: 235, field: "time" } }
          ]
        },
        {
          title: "Body Composition",
          fields: [
            { label: "BMI", path: "bodyCompositionData.BMI" }
          ]
        }
      ]
    }
  }
};
