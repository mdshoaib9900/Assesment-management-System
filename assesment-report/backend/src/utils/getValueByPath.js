function getValueByPath(obj, path) {
  try {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  } catch (e) {
    return null;
  }
}

function getExerciseField(exercises, exerciseId, field) {
  const exercise = exercises.find(e => e.id === exerciseId);
  if (!exercise) return null;

  // Example: pick from setList[0][field]
  if (exercise.setList && exercise.setList.length > 0) {
    return exercise.setList[0][field] || null;
  }
  return null;
}

module.exports = { getValueByPath, getExerciseField };
