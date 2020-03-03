import React, { useState } from "react";
import { withFormik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";

function FormikListingForm() {
    return (
   <Form>
       <h2>Add A New Property</h2>
       <div>Bedrooms: <Field type="number" name="bedrooms"/></div>       
       <div>Bathrooms: <Field type="number" name="bathrooms"/></div>
       <div>Rooms: <Field type="number" name="rooms"/></div>
       <div>Amenities:<Field type="checkbox" name="amenities" /></div>
       <div>Home Type:<Field component="select" name="houseType" value={['A', 'B']} /></div>
       <button type="submit">Add Property</button>
   </Form>
    );
}
    const ListingForm = withFormik({
        mapPropsToValues({ bedrooms, bathrooms, rooms, amenities, houseType }) {
            return {
                bedrooms: bedrooms || 1,
                bathrooms: bathrooms || 1,
                rooms: rooms || 2,
                amenities: amenities,
                houseType: houseType,
            };
        },
        validationSchema: Yup.object().shape({
            bedrooms: Yup.string().required("How many bedrooms?"),
            bathrooms: Yup.string().required("How many bathrooms?"),

        }),
        handleSubmit(values){
            console.log(values);
        }
    })(FormikListingForm);


export default ListingForm;