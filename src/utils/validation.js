





export const isVal = (formik, index) => {

  switch (index) {
    case 1:
      if (formik.errors.email && formik.touched.email) {
        return true;
      } else {
        return false;
      }


    case 2:
      if (formik.errors.username && formik.touched.username) {
        return true;
      } else {
        return false;
      }
  }




}