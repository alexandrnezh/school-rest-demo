exports.getQuery = (queryParams) => {
  const query = {};
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined) {
      if (key === 'number_of_students_gte') {
        query.number_of_student.$gte = value;
      } else if (key === 'number_of_students_lte') {
        query.number_of_student.$lte = value;
      } else query[key] = value;
    }
  });
  return query;
};
